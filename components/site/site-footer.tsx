import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { AnimateEnter } from '@/app/home/AnimateEnter';
import { LogoMark } from './logo';
import { ThemeToggle } from '@/components/theme-toggle';

// Layout and styling ported from Spectrum UI's footer.

const phaseLinks = [
  { label: 'Discover & Define', href: '#lifecycle' },
  { label: 'Architect & Design', href: '#lifecycle' },
  { label: 'Build & Orchestrate', href: '#lifecycle' },
  { label: 'Evaluate & Validate', href: '#lifecycle' },
  { label: 'Release & Operate', href: '#lifecycle' },
  { label: 'Observe & Evolve', href: '#lifecycle' },
  { label: 'Security & Compliance', href: '#foundation' },
  { label: 'Governance', href: '#foundation' },
  { label: 'Knowledge & RAG', href: '#foundation' },
  { label: 'Model Management', href: '#foundation' },
  { label: 'Tools / MCP', href: '#foundation' },
  { label: 'Traceability & Audit', href: '#foundation' },
];

const primaryLinks = [
  { label: 'Docs', href: '#docs' },
  { label: 'Changelog', href: '#changelog' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block py-[7px] font-inter text-sm font-medium leading-[21px] text-black transition-colors duration-200 ease-out hover:text-[#f9452d] dark:text-white dark:hover:text-[#E1F435]"
    >
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="container-frame relative">
        <AnimateEnter className="flex flex-col items-start gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-14">
          <h2 className="font-spectral text-[28px] font-light leading-[34px] text-black sm:text-[32px] sm:leading-[36px] dark:text-white">
            Ship your next agentic product
          </h2>
          <div id="install" className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-2.5">
            <Link
              id="demo"
              href="#demo"
              className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-white px-6 font-inter text-base text-black shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] dark:hover:bg-neutral-800 transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-neutral-50 active:scale-[0.97] motion-safe:hover:-translate-y-0.5 sm:w-auto dark:bg-[#0B0B0D] dark:text-white dark:hover:bg-white/[0.05]"
            >
              Book a demo
            </Link>
            <Link
              href="#install"
              className="group inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-black px-6 font-inter text-base text-white transition-[transform,background-color] duration-200 ease-out hover:bg-neutral-800 active:scale-[0.97] sm:w-auto dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Install Extension
              <span className="inline-flex w-0 -translate-x-1 items-center justify-end overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </div>
        </AnimateEnter>

        <div className="flex flex-col gap-12 px-5 pb-12 sm:px-8 md:px-10 md:pb-14">
          <AnimateEnter className="flex items-center justify-between gap-4">
            <Link href="/" className="group flex items-center gap-2 md:gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 p-1.5 dark:bg-neutral-100">
                <LogoMark className="h-full w-full text-white dark:text-neutral-900" />
              </span>
              <span className="whitespace-nowrap font-mono text-sm font-medium uppercase tracking-[0.5px] text-foreground/80 transition-colors duration-300 group-hover:text-foreground sm:text-base">
                Lockstep
              </span>
            </Link>
            <ThemeToggle />
          </AnimateEnter>

          <AnimateEnter>
            <section className="flex flex-col gap-5 pt-10">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.28px] text-neutral-500">
                Lifecycle & Foundation
                <span className="ml-2 text-neutral-400 dark:text-neutral-500">{phaseLinks.length}</span>
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {phaseLinks.map((c) => (
                  <li key={c.label}>
                    <FooterLink href={c.href}>{c.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </section>
          </AnimateEnter>

          <AnimateEnter>
            <div className="flex flex-col-reverse items-center gap-6 border-t border-border pt-8 md:flex-row md:justify-between">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.28px] text-neutral-500">
                © 2026 Lockstep. All rights reserved.
              </p>
              <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                {primaryLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-inter text-sm font-medium text-neutral-600 transition-colors duration-200 ease-out hover:text-[#f9452d] dark:text-neutral-400 dark:hover:text-[#E1F435]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </AnimateEnter>
        </div>
      </div>
    </footer>
  );
}
