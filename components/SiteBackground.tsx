export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041f1a] via-bg to-[#0a3530]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 18% 22%, rgba(201,138,59,0.22), transparent 42%),
            radial-gradient(circle at 82% 68%, rgba(15,107,102,0.35), transparent 48%),
            radial-gradient(circle at 50% 100%, rgba(5,44,36,0.9), transparent 55%)`,
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-[0.55]" />
      <div className="grain absolute inset-0 opacity-80" />
      <div className="animate-aurora absolute -left-[15%] top-[5%] h-[50vmax] w-[50vmax] rounded-full bg-primary/25 blur-[110px]" />
      <div
        className="animate-aurora absolute -right-[10%] top-[30%] h-[42vmax] w-[42vmax] rounded-full bg-accent/12 blur-[100px]"
        style={{ animationDelay: "-7s" }}
      />
    </div>
  );
}
