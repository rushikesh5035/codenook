"use client";

import { type CSSProperties, type ReactNode, useRef } from "react";

import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

export interface StickyScrollCardItem {
  step: string;
  title: string;
  description: string;
  tags: string[];
  visual: ReactNode;
}

interface StickyScrollCardsProps {
  cards: StickyScrollCardItem[];
  className?: string;
}

function StackCard({
  card,
  index,
  total,
  scrollProgress,
  reduceMotion,
}: {
  card: StickyScrollCardItem;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const start = total > 1 ? index / (total + 1) : 0;
  const restingScale = Math.max(0.92, 1 - (total - index - 1) * 0.04);
  const scale = useTransform(
    scrollProgress,
    [start, 1],
    reduceMotion ? [1, 1] : [1, restingScale]
  );
  const stackStyle = {
    "--stack-top-mobile": `${4.5 + index * 0.8}rem`,
    "--stack-top-desktop": `${6 + index * 1.25}rem`,
    zIndex: index + 1,
  } as CSSProperties;

  return (
    <li
      className="sticky top-(--stack-top-mobile) grid h-126 w-full items-start justify-items-center sm:h-144 lg:top-(--stack-top-desktop) lg:h-[calc(100svh-var(--stack-top-desktop))]"
      style={stackStyle}
    >
      <motion.article
        style={
          reduceMotion ? undefined : { scale, transformOrigin: "center top" }
        }
        className="bg-background border-brand-blue/20 relative isolate mx-auto grid min-h-120 w-full max-w-6xl overflow-hidden rounded-lg border shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] md:min-h-128 md:grid-cols-[1.12fr_0.88fr] md:items-center"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 78% 92% at 16% 0%, color-mix(in srgb, var(--brand-blue) 34%, transparent), transparent 72%)",
          }}
        />
        <div
          aria-hidden="true"
          className="to-background/75 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-transparent"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1.5 right-6 z-0 font-mono text-2xl leading-none font-semibold tracking-[-0.08em] text-white/8 md:top-6 md:right-6 md:text-6xl"
        >
          {card.step}
        </span>

        <div
          aria-hidden="true"
          className="relative z-10 flex min-h-56 items-center justify-center px-5 pt-7 sm:min-h-64 sm:px-8 md:min-h-[32rem] md:px-10 md:py-12"
        >
          <div className="w-full md:scale-[1.08]">{card.visual}</div>
        </div>

        <div className="relative z-10 px-5 pt-1 pb-7 sm:px-8 sm:pb-9 md:px-10 md:py-14 md:pr-14">
          <div className="border-brand-blue/25 bg-brand-blue/8 text-brand-blue mb-4 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em]">
            <span className="bg-brand-blue size-1.5 rounded-full" />
            STEP {card.step}
          </div>
          <h3 className="max-w-sm text-xl font-semibold tracking-[-0.025em] text-balance sm:text-2xl lg:text-3xl">
            {card.title}
          </h3>
          <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-6 sm:text-base sm:leading-7">
            {card.description}
          </p>
          <ul
            aria-label={`${card.title} details`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {card.tags.map((tag) => (
              <li
                key={tag}
                className="border-foreground/10 bg-background/50 text-muted-foreground rounded-full border px-2.5 py-1 text-[10px] font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </li>
  );
}

export function StickyScrollCards({
  cards,
  className,
}: StickyScrollCardsProps) {
  const container = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (cards.length === 0) return null;

  return (
    <ol
      ref={container}
      className={cn("relative flex w-full flex-col gap-0", className)}
    >
      {cards.map((card, index) => (
        <StackCard
          key={`${card.step}-${card.title}`}
          card={card}
          index={index}
          total={cards.length}
          scrollProgress={smoothProgress}
          reduceMotion={reduceMotion}
        />
      ))}
    </ol>
  );
}
