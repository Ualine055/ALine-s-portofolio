"use client";
import GlowBackground from "@/components/GlowBackground";

export default function Contact() {
  return (
    <section className="py-20 bg-[#1e1e1e] relative overflow-hidden" id="contact">
      <GlowBackground variant="center" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-poppins relative">
          Contact
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFD700] rounded-full mt-4"></div>
        </h2>

        <div className="rounded-2xl shadow-xl p-8 md:p-12 border border-[#FFD700]/20">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="aa26a5da-6596-4088-a5ff-55db314c541b" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] outline-none transition-colors duration-200 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] outline-none transition-colors duration-200 text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] outline-none transition-colors duration-200 resize-none text-white placeholder-gray-400"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#FFD700] hover:bg-yellow-500 text-[#1e1e1e] font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
