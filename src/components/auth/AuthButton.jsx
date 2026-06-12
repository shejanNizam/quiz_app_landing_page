export default function AuthButton({ children, type = "submit", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-black transition hover:brightness-110"
    >
      {children}
    </button>
  );
}
