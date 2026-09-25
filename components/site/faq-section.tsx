'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { AnimateEnter } from '@/app/home/AnimateEnter';
import { SectionLabel } from './section-label';

// Structure and styling ported from Spectrum UI's FAQSection.
const faqs = [
  {
    question: 'Do we need another AI model or API key?',
    answer: 'No. Lockstep runs inside GitHub Copilot in VS Code and uses the models your Copilot plan already provides, including your own models if you have configured them in Copilot. There is no second model connection and no model keys on developer laptops.',
  },
  {
    question: 'How do the approval gates work?',
    answer: 'Each phase writes its artifact to a branch and opens a pull request. CODEOWNERS routes it to the right team, such as architects for the blueprint, and branch protection blocks the merge until they approve. The next phase only starts from the approved, merged artifact.',
  },
  {
    question: 'Can someone approve their own work or skip a gate?',
    answer: 'GitHub already prevents authors approving their own pull requests, and branch protection can dismiss approvals when new commits arrive. Skipping a gate would mean changing branch protection, which is itself controlled and logged by your GitHub admins.',
  },
  {
    question: 'Where do the skill packs live?',
    answer: 'On Dev and Team, packs come from the Lockstep registry. On Enterprise, you mirror signed packs into a registry you host, such as a private GitHub repository, and your enablement team approves every update before developers get it.',
  },
  {
    question: 'Does our code leave our environment?',
    answer: 'Your code and artifacts stay in your repositories. Model calls go through your existing Copilot plan under your existing Copilot agreement, so nothing new is added to your data flow by Lockstep.',
  },
  {
    question: 'What does it cost to run?',
    answer: 'The Lockstep licence, plus the Copilot usage each phase consumes on your existing plan. Lockstep shows the credits each phase used, so teams can see what the work cost.',
  },
  {
    question: 'What does a pilot look like?',
    answer: 'One team, one real intent, four to six weeks. We set up CODEOWNERS, branch protection and the right packs with you, run all six phases, and review the approval history together at the end.',
  },
];

function PlusMinusIcon() {
  return (
    <span
      aria-hidden
      className="relative size-4 shrink-0 text-[#080808] transition-all duration-300 ease-out group-hover:text-[#f9452d] group-data-[state=open]:rotate-180 dark:text-neutral-100 dark:group-hover:text-[#E1F435]"
    >
      <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[11px] -translate-x-1/2 -translate-y-1/2 bg-current" />
      <span className="absolute left-1/2 top-1/2 h-[11px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ease-out group-data-[state=open]:scale-y-0" />
    </span>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="container scroll-mt-16 py-16">
      <AnimateEnter duration={0.55} className="flex flex-col gap-3">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-spectral text-[24px] leading-[28.8px] tracking-[-1px] text-[#2d2f2e] dark:text-neutral-100">
          Things teams ask
          <br />
          before a pilot
        </h2>
      </AnimateEnter>

      <AccordionPrimitive.Root type="single" collapsible defaultValue="faq-0" className="mt-10 w-full max-w-[960px]">
        {faqs.map((faq, index) => (
          <AnimateEnter key={faq.question} duration={0.55} delay={index * 0.045}>
            <AccordionPrimitive.Item
              value={`faq-${index}`}
              className="border-b border-[#f5f5f5] transition-colors duration-300 hover:border-[#e8e8e8] dark:border-[#1f1f1f] dark:hover:border-neutral-800"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="group flex w-full items-center gap-3.5 px-4 py-4 text-left outline-hidden transition-colors duration-300 hover:bg-[#fafafa] focus-visible:bg-[#fafafa] dark:hover:bg-neutral-900/50 dark:focus-visible:bg-neutral-900/50">
                  <PlusMinusIcon />
                  <span className="font-spectral text-lg leading-[1.3] tracking-[-0.4px] text-[#080808]/95 transition-[transform,color] duration-300 ease-out group-hover:translate-x-0.5 group-hover:text-[#080808] dark:text-neutral-100 dark:group-hover:text-white">
                    {faq.question}
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-faq-close data-[state=open]:animate-faq-open motion-reduce:animate-none">
                <div className="pb-[18px] pl-[46px] pr-4">
                  <p className="max-w-[520px] animate-fade-up font-inter text-base leading-6 tracking-[-0.32px] text-[#080808]/75 motion-reduce:animate-none dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          </AnimateEnter>
        ))}
      </AccordionPrimitive.Root>
    </section>
  );
}
