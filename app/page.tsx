import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { ReviewContext } from "@/components/landing/review-context";

export default function Home() {
  return (
    <>
      <main className="bg-background min-h-screen overflow-x-clip">
        <Header />
        <Hero />
        <ReviewContext />
        <HowItWorks />
        <Features />
        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
