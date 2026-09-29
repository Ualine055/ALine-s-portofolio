"use client";
import { useState, type FormEvent } from "react";
import GlowBackground from "@/components/GlowBackground";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // Send the form to Web3Forms in the background so visitors stay on the page
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 bg-[#1e1e1e] relative overflow-hidden" id="contact">
      <GlowBackground variant="center" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-poppins relative">
          Contact
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFD700] rounded-full mt-4"></div>
        </h2>

        <div className="rounded-2xl shadow-xl p-8 md:p-12 border border-[#FFD700]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="aa26a5da-6596-4088-a5ff-55db314c541b" />
            <input type="hidden" name="subject" value="New message from your portfolio" />
            {/* Hidden spam trap: real visitors never fill this in */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your name"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] outline-none transition-colors duration-200 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your email"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] outline-none transition-colors duration-200 text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              aria-label="Your message"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] outline-none transition-colors duration-200 resize-none text-white placeholder-gray-400"
            ></textarea>

            <div className="text-center space-y-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-yellow-500 text-[#1e1e1e] font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-wait disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>
                    <i className="bx bx-loader-alt animate-spin"></i> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="inline-flex items-center gap-2 text-green-400">
                    <i className="bx bx-check-circle text-xl"></i> Thank you! Your message has been sent. I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="inline-flex items-center gap-2 text-red-400">
                    <i className="bx bx-error-circle text-xl"></i> Something went wrong. Please try again or email me at ualine055@gmail.com.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
