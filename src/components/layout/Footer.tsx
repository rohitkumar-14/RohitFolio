export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 mt-20 flex flex-col items-center justify-center text-[var(--color-muted)] text-sm gap-2">
      <p>© {new Date().getFullYear()} Rohit. All rights reserved.</p>
      <div className="flex gap-4">
        <span>Next.js</span>
        <span>•</span>
        <span>Tailwind</span>
        <span>•</span>
        <span>Framer Motion</span>
        <span>•</span>
        <span>Three.js</span>
      </div>
    </footer>
  );
}
