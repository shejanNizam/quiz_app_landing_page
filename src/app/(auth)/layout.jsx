export default function AuthLayout({ children }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-10">
      {children}
    </main>
  );
}
