type Blob = { className: string; delay?: string };

// Blob layouts, so each section's glow sits in a different place
const layouts: Record<"hero" | "left" | "right" | "center", Blob[]> = {
  hero: [
    { className: "top-20 left-10 w-72 h-72" },
    { className: "top-40 right-10 w-96 h-96", delay: "2s" },
    { className: "-bottom-8 left-1/2 w-80 h-80", delay: "4s" },
  ],
  left: [
    { className: "top-10 -left-20 w-96 h-96" },
    { className: "bottom-10 left-1/3 w-72 h-72", delay: "3s" },
  ],
  right: [
    { className: "top-1/4 -right-20 w-96 h-96" },
    { className: "bottom-0 right-1/3 w-72 h-72", delay: "3s" },
  ],
  center: [
    { className: "top-1/3 left-1/4 w-80 h-80" },
    { className: "top-1/2 right-1/4 w-72 h-72", delay: "2s" },
  ],
};

export default function GlowBackground({ variant = "hero" }: { variant?: keyof typeof layouts }) {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
      {layouts[variant].map(({ className, delay }) => (
        <div
          key={className}
          className={`absolute ${className} bg-[#FFD700] rounded-full mix-blend-multiply filter blur-xl animate-pulse`}
          style={delay ? { animationDelay: delay } : undefined}
        ></div>
      ))}
    </div>
  );
}
