export default function SectionDivider() {
  return (
    <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
      <span className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-accent/70" />
    </div>
  );
}
