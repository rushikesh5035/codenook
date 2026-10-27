import Link from "next/link";

import { Logo } from "@/components/common/logo";

const footerLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="px-5 sm:px-8">
      <div className="mx-auto max-w-6xl py-8 sm:py-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-3">
            <Link href="/" aria-label="CodeNook home">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-6">
              AI pull request reviews grounded in your repository.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    className="text-muted-foreground hover:text-foreground focus-visible:ring-brand-blue rounded-sm text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="text-muted-foreground mt-7 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CodeNook</p>
          <p>Built for developers who care about the code around the change.</p>
        </div>
      </div>
    </footer>
  );
}
