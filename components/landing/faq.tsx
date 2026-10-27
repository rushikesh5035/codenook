"use client";

import { CircleHelp, Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "What is CodeNook?",
    answer:
      "CodeNook reviews GitHub pull requests with context from the surrounding repository, then shares findings and suggestions where your team already works.",
  },
  {
    question: "How does CodeNook use my repository context?",
    answer:
      "After you connect a repository, CodeNook indexes its files and retrieves relevant code while reviewing a pull request. That helps ground the review in more than the changed lines alone.",
  },
  {
    question: "Where will I see the review?",
    answer:
      "Review feedback is posted directly to the GitHub pull request, so you can read and discuss findings alongside the code changes.",
  },
  {
    question: "Which repositories can I connect?",
    answer:
      "Sign in with GitHub and choose repositories the GitHub connection can access. You can connect up to 3 repositories on Free; Pro supports unlimited connected repositories.",
  },
  {
    question: "What are the Free and Pro limits?",
    answer:
      "Free includes up to 3 connected repositories and 5 reviews per repository. Pro is $15 per month and removes those repository and review limits.",
  },
  {
    question: "Can I chat with my codebase?",
    answer:
      "Repository chat is planned, but it is not available yet. Today, CodeNook uses repository context to make pull request reviews more informed.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="lg:pt-1">
          <div className="border-brand-blue/20 bg-brand-blue/5 mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium">
            <CircleHelp
              aria-hidden="true"
              className="text-brand-blue size-3.5"
            />
            FAQ
          </div>
          <h2
            id="faq-title"
            className="text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl"
          >
            Answers for your next code review
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-base leading-7 text-pretty sm:text-lg sm:leading-8">
            The essentials on repository access, review context, and plans.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(5,143,255,0.2)_0%,rgba(5,143,255,0.07)_34%,rgba(0,0,0,0.12)_100%)]"
        >
          {questions.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`faq-${index}`}
              className="data-open:bg-brand-blue/8 border-b border-white/10 last:border-b-0"
            >
              <AccordionTrigger className="text-foreground focus-visible:ring-brand-blue/70 min-h-16 items-center px-5 py-5 text-left text-sm leading-6 font-semibold hover:no-underline focus-visible:ring-2 focus-visible:ring-inset sm:px-6 sm:text-base [&_[data-slot=accordion-trigger-icon]]:hidden">
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="text-foreground/75 relative ml-auto size-4 shrink-0"
                >
                  <Plus className="absolute inset-0 size-4 group-aria-expanded/accordion-trigger:hidden" />
                  <Minus className="absolute inset-0 hidden size-4 group-aria-expanded/accordion-trigger:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 px-5 text-sm leading-6 sm:px-6 sm:text-[15px]">
                <p className="max-w-[68ch] pb-5">{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
