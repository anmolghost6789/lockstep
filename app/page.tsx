import { HeroSection } from './home';
import { FAQSection } from '@/components/site/faq-section';
import { PricingSection } from '@/components/site/pricing-section';
import { FoundationSection, LifecycleSection, UseCasesSection } from '@/components/site/sections';

export default function Homepage() {
  return (
    // Same frame as Spectrum UI's homepage: `@container` lets the hero stage bleed to the viewport edge.
    <div className="@container">
      <div className="container-frame">
        <HeroSection />
      </div>
      <div className="container-frame">
        <LifecycleSection />
      </div>
      <div className="bg-neutral-50/60 dark:bg-white/[0.02]">
        <div className="container-frame">
          <FoundationSection />
        </div>
      </div>
      <div className="container-frame">
        <UseCasesSection />
      </div>
      <div className="bg-neutral-50/60 dark:bg-white/[0.02]">
        <div className="container-frame">
          <PricingSection />
        </div>
      </div>
      <div className="bg-neutral-50/10 dark:bg-neutral-950/10">
        <div className="container-frame">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
