import Link from 'next/link';
import { Check } from 'lucide-react';

import { AnimateEnter } from '@/app/home/AnimateEnter';
import { cn } from '@/lib/utils';
import { CardCaption, SectionLabel } from './section-label';

const TIERS = [
  {
    id: 'dev',
    name: 'Dev',
    price: '$9',
    unit: 'per month',
    blurb: 'For individual developers running the lifecycle in their own repos.',
    cta: 'Get Dev',
    href: '#install',
    features: [
      '@lockstep phases in Copilot Chat',
      'Generic lifecycle pack',
      'Personal approvals',
      'Packs from the Lockstep registry',
      'Community support and docs',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    price: '$19',
    unit: 'per developer / month',
    blurb: 'For engineering teams that need governed delivery, not just faster code.',
    cta: 'Start with Team',
    href: '#install',
    highlight: true,
    features: [
      'Everything in Dev',
      'Named-role gates via CODEOWNERS and branch protection',
      'One industry pack included',
      'Team admin and seat management',
      'Audit export',
      'Email support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contact us',
    unit: 'annual licence, volume pricing',
    blurb: 'For regulated enterprises that host everything in their own environment.',
    cta: 'Contact sales',
    href: '#demo',
    features: [
      'Everything in Team',
      'Client-hosted pack registry with approved updates',
      'All relevant industry packs, plus custom packs',
      'Risk-based extra approvers',
      'SSO, central policy and offline licensing',
      'Pilot, onboarding and support SLA',
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="container scroll-mt-16 py-16">
      <AnimateEnter duration={0.55} className="flex flex-col gap-3">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="font-spectral text-[24px] leading-[28.8px] tracking-[-1px] text-[#2d2f2e] dark:text-neutral-100">
          Simple plans,
          <br />
          on top of the Copilot you already have
        </h2>
        <p className="max-w-[548px] font-inter text-[14px] font-medium leading-[20px] text-[#646464] dark:text-neutral-400">
          Lockstep uses your Copilot models, so there is no separate model bill from us. Approvers who only review and sign
          are always free.
        </p>
      </AnimateEnter>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier, index) => (
          <AnimateEnter key={tier.id} duration={0.55} delay={index * 0.06} className="flex flex-col">
            <CardCaption>{tier.highlight ? `${tier.id} · most teams start here` : tier.id}</CardCaption>
            <article
              className={cn(
                'flex h-full flex-col rounded-2xl border bg-white p-6 shadow-xs dark:bg-[#0B0B0D]',
                tier.highlight
                  ? 'border-neutral-900 ring-1 ring-neutral-900 dark:border-[#E1F435]/70 dark:ring-[#E1F435]/40'
                  : 'border-black/[0.08] dark:border-white/[0.09]',
              )}
            >
              <h3 className="font-spectral text-[22px] leading-none tracking-[-0.5px] text-[#080808] dark:text-neutral-100">{tier.name}</h3>
              <p className="mt-2 min-h-[40px] font-inter text-[13px] leading-[1.5] text-neutral-600 dark:text-neutral-400">{tier.blurb}</p>
              <div className="mt-5 flex min-h-[44px] flex-wrap items-end gap-x-2 gap-y-1">
                <span
                  className={cn(
                    'whitespace-nowrap font-spectral leading-none tracking-[-1.5px] text-[#080808] dark:text-neutral-100',
                    tier.price.startsWith('$') ? 'text-[40px]' : 'text-[32px]',
                  )}
                >
                  {tier.price}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-neutral-500 dark:text-neutral-400">{tier.unit}</span>
              </div>
              <Link
                href={tier.href}
                className={cn(
                  'mt-6 inline-flex h-11 w-full items-center justify-center rounded-full font-inter text-[15px] transition-[transform,background-color] duration-200 ease-out active:scale-[0.98]',
                  tier.highlight
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200'
                    : 'bg-white text-black shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] dark:hover:bg-neutral-800',
                )}
              >
                {tier.cta}
              </Link>
              <ul className="mt-6 space-y-2.5 border-t border-black/[0.06] pt-5 dark:border-white/[0.07]">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5 font-inter text-[13px] leading-[1.5] text-neutral-700 dark:text-neutral-300">
                    <Check className="mt-[3px] size-3.5 shrink-0 text-[#f9452d] dark:text-[#E1F435]" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          </AnimateEnter>
        ))}
      </div>

      <p className="mt-6 max-w-[760px] font-inter text-[12.5px] leading-[1.6] text-neutral-500 dark:text-neutral-400">
        Prices in USD, excluding taxes. Requires a paid GitHub Copilot plan (Business or Enterprise for Team and Enterprise). Phases use your Copilot models and count
        towards your Copilot usage, and Lockstep shows the credits each phase used.
      </p>
    </section>
  );
}
