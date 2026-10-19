import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen flex-col items-start justify-center">
      <p className="eyebrow mb-5">404 / Page not found</p>
      <h1 className="text-6xl font-medium tracking-[-.07em]">Lost in the details<span className="accent">.</span></h1>
      <p className="mt-5 max-w-md text-sm leading-6 text-[#a7a49d]">This page doesn’t exist—or may have moved.</p>
      <Link href="/" className="pill-link mt-8">Back to home ↗</Link>
    </main>
  );
}
