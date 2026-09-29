import Link from "next/link";
import Navbar from "@/components/Navbar";
import GlowBackground from "@/components/GlowBackground";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-[#1e1e1e] relative overflow-hidden px-4">
        <GlowBackground />
        <div className="text-center relative z-10">
          <p className="text-[#FFD700] text-lg font-medium tracking-wider uppercase mb-4">&lt;Error /&gt;</p>
          <h1 className="text-8xl md:text-9xl font-bold text-white font-poppins mb-4">404</h1>
          <p className="text-xl text-white/70 mb-10 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center justify-center bg-[#FFD700] hover:bg-yellow-500 text-[#1e1e1e] font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <i className="bx bx-left-arrow-alt text-xl mr-2 group-hover:-translate-x-1 transition-transform"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    </>
  );
}
