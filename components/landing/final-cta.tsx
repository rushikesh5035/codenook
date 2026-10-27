import { HeroPrimaryCTA } from "@/components/landing/hero-primary-cta";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="px-5 pt-4 pb-14 sm:px-8 sm:pb-16 lg:pb-20"
    >
      <div
        className="border-brand-blue/20 relative isolate mx-auto max-w-6xl overflow-hidden rounded-2xl border px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        style={{
          background:
            "radial-gradient(ellipse 55% 120% at 100% 0%, rgba(5,143,255,0.22), transparent 72%), linear-gradient(110deg, rgba(5,143,255,0.12), rgba(5,143,255,0.035) 58%, rgba(3,7,12,0.92))",
        }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_38%_85%_at_0%_100%,rgba(5,143,255,0.1),transparent_75%)]" />

        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center md:gap-10">
          <div className="max-w-2xl">
            <h2
              id="final-cta-title"
              className="text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl"
            >
              Give every pull request the context it needs.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6 sm:text-base">
              Connect GitHub to get AI reviews grounded in your repository,
              right on the pull request.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center gap-4">
            <HeroPrimaryCTA />
            <p className="text-muted-foreground text-xs">
              Free to start. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
