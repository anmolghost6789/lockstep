import {
  BarChart3,
  Blocks,
  Boxes,
  BrainCircuit,
  Cable,
  Code2,
  Cog,
  Database,
  FileCheck2,
  Library,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react';

import { AnimateEnter } from '@/app/home/AnimateEnter';
import { CardCaption, SectionLabel } from './section-label';
import { GateAuditTable } from './gate-audit-table';
import { PhaseGrid, type PhaseCardData } from './skill-viewer';
import { getSkillPackage } from '@/lib/skills';

const PHASES: PhaseCardData[] = [
  {
    id: 'discover-define',
    caption: '01 discover & define',
    icon: 'Search',
    title: 'Turn business intent into clear requirements',
    points: ['Clarifying questions with AI', 'Personas and user stories', 'Functional and non-functional requirements', 'Risks, constraints and success criteria'],
    gate: 'Product owner approves',
    output: 'AI Product Requirement Spec',
    file: 'adlc/01-aiprs.md',
  },
  {
    id: 'architect-design',
    caption: '02 architect & design',
    icon: 'DraftingCompass',
    title: 'Create the agentic solution blueprint',
    points: ['AI-generated plan and unit decomposition', 'Agent topology and orchestration', 'Model selection, RAG and knowledge design', 'Tools, APIs and MCP integration'],
    gate: 'Architect approves',
    output: 'Agentic Solution Blueprint',
    file: 'adlc/02-blueprint.md',
  },
  {
    id: 'build-orchestrate',
    caption: '03 build & orchestrate',
    icon: 'Hammer',
    title: 'Implement, integrate and create in bolts',
    points: ['Small build-and-validate cycles', 'Agents, skills, tools and guardrails', 'RAG pipelines and data integration', 'Generated code with unit tests'],
    gate: 'Engineer accepts each diff',
    output: 'Working Agentic Product',
    file: 'adlc/03-units.yaml',
  },
  {
    id: 'evaluate-validate',
    caption: '04 evaluate & validate',
    icon: 'SquareCheckBig',
    title: 'Prove reliability, safety and business value',
    points: ['LLM evals for accuracy, relevance, safety', 'RAG groundedness and citations', 'Tool, orchestration and regression tests', 'Security and performance checks'],
    gate: 'QA lead signs the scorecard',
    output: 'Evaluation Scorecard',
    file: 'adlc/04-scorecard.json',
  },
  {
    id: 'release-operate',
    caption: '05 release & operate',
    icon: 'Rocket',
    title: 'Deploy securely and at scale',
    points: ['Deployable units: code, config, infra', 'CI/CD and environment setup', 'Model, prompt and agent versioning', 'Runbooks and operational readiness'],
    gate: 'Release manager approves',
    output: 'Governed Production Release',
    file: 'adlc/05-release.md',
  },
  {
    id: 'observe-evolve',
    caption: '06 observe & evolve',
    icon: 'BarChart3',
    title: 'Learn from real usage and improve',
    points: ['Logs, metrics and traces', 'Drift and anomaly detection with AI', 'Cost, latency and outcome tracking', 'Feedback into the next intent'],
    gate: 'Product owner picks next intent',
    output: 'Improvement Backlog',
    file: 'adlc/06-backlog.md',
  },
];

const FOUNDATION = [
  { icon: Cog, label: 'One model connection', body: 'Uses your Copilot models. No second key, nothing on laptops.' },
  { icon: UserCheck, label: 'Named-role gates', body: 'Pull request reviews routed by CODEOWNERS to the right team.' },
  { icon: Users, label: 'Separation of duties', body: 'GitHub stops authors approving their own phase.' },
  { icon: ShieldCheck, label: 'Fails closed', body: 'Branch protection blocks the next phase until approval.' },
  { icon: Boxes, label: 'Centrally managed packs', body: 'Your enablement team approves every skill pack update.' },
  { icon: Library, label: 'Client-hosted registry', body: 'Packs live in your GitHub or artifact registry.' },
  { icon: Cable, label: 'Tools / MCP', body: 'Works with Copilot’s MCP registry and allow-list.' },
  { icon: BarChart3, label: 'Cost per phase', body: 'See the Copilot credits each phase used.' },
  { icon: FileCheck2, label: 'Traceability & Audit', body: 'Every approval attributed, versioned and exportable.' },
];

const USE_CASES = [
  { id: 'data-engineering', icon: Database, title: 'Data Engineering', points: ['Data product design and requirements', 'Pipeline generation and orchestration', 'Automated DQ and testing', 'Metadata and knowledge graph integration'] },
  { id: 'business-automation', icon: Blocks, title: 'Business Automation', points: ['Process discovery and documentation', 'Agentic workflow design', 'System integrations via APIs and MCP', 'Continuous monitoring and optimisation'] },
  { id: 'genai-rag', icon: BrainCircuit, title: 'GenAI / RAG Solutions', points: ['Knowledge design and ingestion', 'RAG plus agent architecture', 'Evaluation, guardrails and safety', 'Enterprise deployment and scaling'] },
  { id: 'software-engineering', icon: Code2, title: 'Software Engineering', points: ['AI-assisted development', 'Code generation and review', 'Automated testing', 'Release management and observability'] },
];

const CARD ='rounded-2xl border border-black/[0.08] bg-white shadow-xs dark:border-white/[0.09] dark:bg-[#0B0B0D]';

function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-[size:26px_26px] opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
    />
  );
}

export function LifecycleSection() {
  const skills = getSkillPackage();
  return (
    <section id="lifecycle" className="container relative scroll-mt-16 py-16">
      <AnimateEnter duration={0.55} className="flex flex-col gap-3">
        <SectionLabel>Lifecycle</SectionLabel>
        <h2 className="font-spectral text-[24px] leading-[28.8px] tracking-[-1px] text-[#2d2f2e] dark:text-neutral-100">
          From intent to impact,
          <br />
          with a human gate after every phase
        </h2>
        <p className="max-w-[548px] font-inter text-[14px] font-medium leading-[20px] text-[#646464] dark:text-neutral-400">
          AI drives planning, decomposition, generation and execution. People validate decisions, provide oversight and
          confirm business value before the next phase can start. Open any phase to read the skill file that runs it.
        </p>
      </AnimateEnter>

      <div className="relative mt-10">
        <DotGrid />
        <PhaseGrid cards={PHASES} skills={skills.phases} common={skills.common} />
      </div>

      <AnimateEnter duration={0.55} className="mt-4">
        <p className="max-w-[560px] font-inter text-[14px] leading-[20px] text-[#646464] dark:text-neutral-400">
          Continuous feedback loop: the improvement backlog from phase 06 becomes the next intent. Learn, improve, repeat.
        </p>
      </AnimateEnter>
    </section>
  );
}

export function FoundationSection() {
  return (
    <section id="foundation" className="container scroll-mt-16 py-16">
      <AnimateEnter duration={0.55} className="flex flex-col gap-3">
        <SectionLabel>ADLC Foundation</SectionLabel>
        <h2 className="font-spectral text-[24px] leading-[28.8px] tracking-[-1px] text-[#2d2f2e] dark:text-neutral-100">
          Built on what you already run,
          <br />
          governed by your enablement team
        </h2>
      </AnimateEnter>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <AnimateEnter duration={0.55}>
          <CardCaption>foundation</CardCaption>
          <ul className={`${CARD} divide-y divide-black/[0.06] p-1.5`}>
            {FOUNDATION.map(({ icon: Icon, label, body }) => (
              <li key={label} className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.04]">
                <span className="grid size-7 shrink-0 place-items-center rounded-md bg-neutral-100 text-neutral-700 dark:bg-white/[0.07] dark:text-neutral-300">
                  <Icon className="size-3.5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-medium text-neutral-900 dark:text-neutral-100">{label}</span>
                  <span className="block text-[12px] text-neutral-500">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </AnimateEnter>
        <AnimateEnter duration={0.55} delay={0.08} className="min-w-0">
          <CardCaption>traceability & audit</CardCaption>
          <GateAuditTable />
        </AnimateEnter>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section id="use-cases" className="container scroll-mt-16 py-16">
      <AnimateEnter duration={0.55} className="flex flex-col gap-3">
        <SectionLabel>Use cases</SectionLabel>
        <h2 className="font-spectral text-[24px] leading-[28.8px] tracking-[-1px] text-[#2d2f2e] dark:text-neutral-100">
          Applicable across
          <br />
          agentic product development
        </h2>
      </AnimateEnter>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {USE_CASES.map(({ id, icon: Icon, title, points }, index) => (
          <AnimateEnter key={id} duration={0.55} delay={index * 0.05}>
            <CardCaption>{id}</CardCaption>
            <article className={`${CARD} h-full p-4`}>
              <span className="grid size-8 place-items-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-white/[0.07] dark:text-neutral-300">
                <Icon className="size-4" />
              </span>
              <h3 className="mt-3 font-spectral text-[18px] leading-[1.25] tracking-[-0.4px] text-[#080808] dark:text-neutral-100">{title}</h3>
              <ul className="mt-2.5 space-y-1.5">
                {points.map((point) => (
                  <li key={point} className="flex gap-2.5 font-inter text-[13px] leading-[1.5] text-neutral-600 dark:text-neutral-400">
                    <span aria-hidden className="mt-[7px] size-1 shrink-0 rounded-full bg-neutral-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </AnimateEnter>
        ))}
      </div>
    </section>
  );
}
