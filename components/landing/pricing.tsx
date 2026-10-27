"use client";

import Link from "next/link";

import {
  BadgeCheck,
  Code2,
  Infinity,
  Rocket,
  Sparkles,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

const plans = [
  {
    name: "Free",
    description: "A simple way to review your first repositories.",
    price: "$0",
    cadence: "per month",
    icon: Rocket,
    featured: false,
    features: [
      "Connect up to 3 repositories",
      "Up to 5 reviews per repository",
      "Repository-aware code reviews",
    ],
  },
  {
    name: "Pro",
    description: "For developers with more repositories to review.",
    price: "$15",
    cadence: "per month",
    icon: Sparkles,
    featured: true,
    features: [
      "Everything in Free",
      "Unlimited connected repositories",
      "Unlimited reviews per repository",
    ],
  },
];

export function Pricing() {
  const { data: session } = useSession();
  const isAuthenticated = Boolean(session);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="relative isolate overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="border-brand-blue/20 bg-brand-blue/5 text-foreground mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium">
            <Tag aria-hidden="true" className="text-brand-blue size-3.5" />
            Pricing
          </div>

          <h2
            id="pricing-title"
            className="text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl"
          >
            Straight forward pricing for better code reviews
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-base leading-7 text-pretty sm:text-lg sm:leading-8">
            Start free. Upgrade when you need more repositories and reviews.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:mt-11 lg:grid-cols-2">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isFeatured = plan.featured;
            const href = isAuthenticated ? "/dashboard/subscription" : "/login";

            return (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 sm:p-7 ${
                  isFeatured ? "border-brand-blue/35" : "border-white/9"
                }`}
                style={{
                  background: isFeatured
                    ? "linear-gradient(180deg, rgba(5, 143, 255, 0.34) 0%, rgba(5, 143, 255, 0.15) 38%, rgba(5, 143, 255, 0.045) 72%, rgba(3, 7, 12, 0.96) 100%)"
                    : "linear-gradient(180deg, rgba(5, 143, 255, 0.24) 0%, rgba(5, 143, 255, 0.10) 38%, rgba(5, 143, 255, 0.03) 72%, rgba(3, 7, 12, 0.96) 100%)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Icon
                      aria-hidden="true"
                      className={`size-5 shrink-0 ${isFeatured ? "text-brand-blue" : "text-foreground/85"}`}
                      strokeWidth={1.8}
                    />
                    <h3 className="text-xl font-semibold tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  {isFeatured && (
                    <span className="bg-brand-blue inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white sm:text-xs">
                      <Infinity aria-hidden="true" className="size-5" />
                      UNLIMITED
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mt-3 min-h-6 text-sm leading-6 sm:text-base">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-baseline gap-2 sm:mt-6">
                  <span className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    / {plan.cadence}
                  </span>
                </div>

                <Button
                  asChild
                  className={`mt-5 h-11 w-full rounded-full text-sm font-semibold sm:mt-6 ${
                    isFeatured
                      ? "bg-brand-blue hover:bg-brand-blue/90 text-white shadow-[0_8px_24px_-10px_rgba(5,143,255,0.8)]"
                      : "border-brand-blue/25 bg-brand-blue/8 text-foreground hover:bg-brand-blue/15"
                  }`}
                  variant={isFeatured ? "default" : "outline"}
                >
                  <Link href={href}>
                    {isAuthenticated
                      ? isFeatured
                        ? "Choose Pro"
                        : "Open dashboard"
                      : "Get started"}
                  </Link>
                </Button>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 sm:mt-7 sm:space-y-3.5 sm:pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-foreground/90 flex items-start gap-2.5 text-sm leading-6 sm:text-base"
                    >
                      <BadgeCheck
                        aria-hidden="true"
                        className="text-brand-blue mt-0.5 size-4 shrink-0 sm:size-[18px]"
                        strokeWidth={1.8}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
