import HeroSection from "./_components/hero-section";
import ParticipantsSection from "./_components/participants-section";
import SponsorsSection from "./_components/sponsors-section";

export default function Page() {
  return (
    <>
      <HeroSection />

      <SponsorsSection />

      <div className="px-10 container">
        <ParticipantsSection />
      </div>
    </>
  );
}
