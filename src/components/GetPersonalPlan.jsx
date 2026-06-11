"use client";

import { forwardRef, useEffect, useState } from "react";
// Import Ant Design components
import { Button, Form, Input, message, Modal } from "antd";
// Assuming CHeading is a custom component
import CHeading from "./CHeading";

// PlanCard component remains unchanged
function PlanCard({ plan, isSelected, onSelect }) {
  const borderStyle = isSelected
    ? "border-red-600 shadow-md ring ring-red-600"
    : "border-gray-200";

  const badgeBgColor = isSelected ? "bg-red-600" : "bg-gray-200";
  const badgeTextColor = isSelected ? "text-white" : "text-gray-800";
  const originalPriceTextColor = isSelected ? "text-white" : "text-gray-400";

  return (
    <div
      className={`relative px-4 py-3 mb-3 border rounded-xl cursor-pointer transition-all duration-200 bg-white ${borderStyle}`}
      onClick={() => onSelect(plan.id)}
    >
      {" "}
      {plan.isPopular && (
        <div className="absolute top-0 left-4 transform -translate-y-1/2 px-2 py-0.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-[#A50015] border border-gray-600">
          MOST POPULAR{" "}
        </div>
      )}{" "}
      <div className="flex items-center justify-between relative pr-24">
        {" "}
        <div className="flex items-center space-x-3">
          {" "}
          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 
${isSelected ? "border-[#A50015] bg-white" : "border-gray-400"}`}
          >
            {" "}
            {isSelected && (
              <div className="w-3 h-3 rounded-full bg-[#A50015]"></div>
            )}{" "}
          </div>{" "}
          <div className="flex flex-col">
            {" "}
            <p
              className={`text-base font-medium ${
                isSelected ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {plan.duration}{" "}
            </p>{" "}
            <p className="text-sm text-gray-500">
              {" "}
              <span className="line-through mr-1 text-gray-400">
                {plan.originalPrice}{" "}
              </span>{" "}
              <span
                className={`${
                  isSelected ? "text-black font-semibold" : "text-gray-400"
                }`}
              >
                {plan.discountedPrice}{" "}
              </span>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          {" "}
          <div
            className={`relative flex flex-col items-center justify-center h-16 w-[100px] ${badgeBgColor} rounded-r-lg shadow-md`}
          >
            {" "}
            <div
              className={`absolute left-0 top-0 h-full w-4 z-0`}
              style={{
                clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
                backgroundColor: isSelected
                  ? "rgb(220 38 38)"
                  : "rgb(229 231 235)",
                transform: "translateX(-100%)",
              }}
            ></div>{" "}
            <div className="relative z-10 text-center">
              {" "}
              <p className={`text-xs line-through ${originalPriceTextColor}`}>
                {plan.dailyRateOriginal}{" "}
              </p>{" "}
              <p className={`text-lg font-bold leading-none ${badgeTextColor}`}>
                {plan.dailyRateDiscounted}{" "}
              </p>{" "}
              <p className={`text-xs ${badgeTextColor}`}>per day</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

const GetPersonalPlan = forwardRef((props, ref) => {
  const { heading } = props;
  const [data, setData] = useState({ data: [] }); // State for Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm(); // Antd form hook

  const apiPlans = data?.data || [];

  const plans = apiPlans
    .map((plan) => {
      let id;
      let name; // Use plan.name for API payload
      if (plan.name === "1-week") {
        id = "1week";
        name = "1-week";
      } else if (plan.name === "1-month") {
        id = "1month";
        name = "1-month";
      } else if (plan.name === "3-months") {
        id = "3month";
        name = "3-months";
      }

      const formatPrice = (price) => `${price.toFixed(2)} ${plan.currency}`;

      return {
        id: id,
        name: name, // Store the plan name for the POST payload
        duration: plan.displayName.toUpperCase(),
        originalPrice: formatPrice(plan.originalPrice),
        discountedPrice: formatPrice(plan.price),
        dailyRateOriginal: formatPrice(plan.originalPricePerDay),
        dailyRateDiscounted: formatPrice(plan.pricePerDay),
        isPopular: plan.isPopular,
        previousPercentage: "34%",
        discountPercentage: `${Math.round(plan.discountPercentage)}%`,
      };
    })
    .filter((p) => p.id);

  const defaultPlanId =
    plans.find((p) => p.id === "1month")?.id || plans[0]?.id || "";
  const [selectedPlan, setSelectedPlan] = useState(defaultPlanId);

  useEffect(() => {
    if (plans.length > 0 && !plans.find((p) => p.id === selectedPlan)) {
      setSelectedPlan(defaultPlanId);
    }
  }, [plans, selectedPlan, defaultPlanId]); // API Fetch for Plans

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://thepeak.merinasib.shop/api/v1/dashboard/subscription-plans"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching subscription plans:", error?.message);
      }
    };

    fetchData();
  }, []);

  const currentPlan =
    plans.find((p) => p.id === selectedPlan) || plans[0] || {};
  // console.log(currentPlan.name);

  const currentApiPlan = apiPlans.find((p) => {
    let id;
    if (p.name === "1-week") id = "1week";
    else if (p.name === "1-month") id = "1month";
    else if (p.name === "3-months") id = "3month";
    return id === selectedPlan;
  }); // Function to show the modal (UPDATED)

  const handleGetMyPlan = () => {
    if (!currentPlan.id) {
      message.warning("Please select a plan before proceeding.");
      return;
    }
    setIsModalVisible(true); // Set the value for the read-only plan display field
    form.setFieldsValue({
      selectedPlanDisplay: currentPlan.duration,
      email: undefined, // Clear the email field
    });
  }; // Function to handle form submission (POST API call)

  const handleFormSubmit = async (values) => {
    console.log(values);
    const { email } = values;
    const planName = currentPlan.name;
    // console.log(email);

    if (!planName) {
      message.error("Selected plan is invalid. Please try again.");
      return;
    }

    setIsLoading(true);
    try {
      // NOTE: This is the API endpoint to initiate the checkout flow
      const response = await fetch(
        "https://thepeak.merinasib.shop/api/v1/app/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            subscriptionType: planName,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const jsonData = await response.json();
      console.log(jsonData);
      const checkoutUrl = jsonData?.data?.checkoutUrl;

      if (checkoutUrl) {
        // Navigate to the checkout URL
        window.location.href = checkoutUrl;
      } else {
        message.error("Checkout URL not received in the response.");
        setIsModalVisible(false);
      }
    } catch (error) {
      message.error(`Submission failed: ${error.message}`);
      setIsModalVisible(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getRenewalText = () => {
    if (!currentApiPlan) return "";

    if (selectedPlan === "1week") {
      return (
        <p>
          We've automatically applied the discount to your **1-week Kegel
          Plan**. Please note that your subscription will be automatically
          renewed at the full price of **31 USD per 1 month** at the end of your
          1-week Kegel Plan and will then be continuously renewed every 1 month
          until you cancel. If you want to manage your subscription, you may do
          so visiting Billing Center or in the Dr. Kegel app.{" "}
        </p>
      );
    }
    if (selectedPlan === "1month") {
      return (
        <p>
          We've automatically applied the discount to your **1-month Kegel
          Plan**. After 1 month, your subscription will be automatically renewed
          at the full price of **31 USD per 1 month** and will then be
          continuously renewed every 1 month until you cancel. If you want to
          manage your subscription, you may do so visiting Billing Center or in
          the Dr. Kegel app.{" "}
        </p>
      );
    }
    if (selectedPlan === "3month") {
      return (
        <p>
          We've automatically applied the discount to your **3-months Kegel
          Plan**. After 3 months, your subscription will be automatically
          renewed at the full price of **53.04 USD per 3 months** and will then
          be continuously renewed every 3 months until you cancel. If you want
          to manage your subscription, you may do so visiting Billing Center or
          in the Dr. Kegel app.{" "}
        </p>
      );
    }
    return "";
  }; // Loading/No Data state

  if (plans.length === 0 && !data.data.length) {
    return (
      <div ref={ref} className="flex justify-center items-center p-8">
        <p className="text-gray-500">Loading plans...</p>{" "}
      </div>
    );
  }

  return (
    <div ref={ref} className="flex flex-col items-center p-4 sm:p-8">
      <CHeading text={heading} />{" "}
      <div className="w-full max-w-md bg-red-50 border border-red-300 rounded-lg p-3 my-4 flex justify-center items-center">
        {" "}
        <span className="text-2xl mr-3" role="img" aria-label="gift box">
          🎁{" "}
        </span>{" "}
        <p className="text-base font-semibold text-gray-600">
          Get a{" "}
          <span className="line-through font-extrabold">
            {currentPlan.previousPercentage}{" "}
          </span>{" "}
          <span className="text-[#A50015] font-extrabold">
            {currentPlan.discountPercentage}{" "}
          </span>
          discount on your Kegel plan{" "}
        </p>{" "}
      </div>{" "}
      <div className="w-full max-w-md mx-auto">
        {" "}
        {plans?.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan === plan.id}
            onSelect={setSelectedPlan}
          />
        ))}{" "}
        <div className="flex items-center justify-center my-4">
          <span className="text-[#A50015] mr-2">✔</span>{" "}
          <p className="text-sm font-medium text-gray-700">
            **30-day money-back guarantee**{" "}
          </p>{" "}
        </div>{" "}
        <button
          className="w-full py-4 bg-[#A50015] text-white font-bold text-xl rounded-xl shadow-lg hover:bg-red-900 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50"
          onClick={handleGetMyPlan}
        >
          Get My Plan{" "}
        </button>{" "}
        <div className="mt-4 text-xs text-center text-gray-500">
          {getRenewalText()}{" "}
        </div>{" "}
      </div>
      {/* Ant Design Modal */}{" "}
      <Modal
        title="Confirm Your Plan & Email"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {" "}
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          {/* Selected Plan Field (Read-only) */}{" "}
          <Form.Item
            label="Selected Plan"
            name="selectedPlanDisplay" // Name used to display the plan duration
          >
            {" "}
            <Input
              readOnly // Makes the field read-only
              placeholder="Plan name will be shown here"
              value={currentPlan.name}
            />{" "}
          </Form.Item>
          {/* Email Field with Proper Validation */}{" "}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
              {
                type: "email",
                message: "The input is not a valid email address!",
              },
            ]}
          >
            <Input placeholder="Enter your email address" />
          </Form.Item>
          {/* Submit Button */}{" "}
          <Form.Item>
            {" "}
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full"
              style={{
                backgroundColor: "#A50015",
                borderColor: "#A50015",
                height: "40px",
              }}
            >
              {" "}
              {isLoading ? "Processing..." : "Proceed to Checkout"}{" "}
            </Button>{" "}
          </Form.Item>{" "}
        </Form>{" "}
      </Modal>{" "}
    </div>
  );
});

GetPersonalPlan.displayName = "GetPersonalPlan";

export default GetPersonalPlan;
