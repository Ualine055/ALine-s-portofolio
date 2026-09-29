export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-12 rounded-t-3xl mx-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-bold mb-6 font-poppins">Aline</p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { href: "mailto:ualine055@gmail.com", icon: "ri-mail-line", isRemix: true },
              { href: "https://www.instagram.com/___kalisimbi", icon: "bxl-instagram" },
              { href: "https://www.linkedin.com/in/uwineza-aline-3b194122a", icon: "bxl-linkedin" },
            ].map(({ href, icon, isRemix }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1e1e1e] text-[#FFD700] rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-[#FFD700]/30"
              >
                <i className={`${isRemix ? icon : `bx ${icon}`} text-lg`}></i>
              </a>
            ))}
          </div>
          <p className="text-white text-sm font-poppins">© Aline. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
