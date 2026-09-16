import SiteBackground from "@/components/SiteBackground";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteBackground />
      {children}
    </>
  );
}
