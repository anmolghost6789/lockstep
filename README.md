# Lockstep homepage

Product model: a VS Code extension on top of GitHub Copilot. Phases run as `@lockstep` in Copilot Chat using the client's Copilot models, gates are pull request reviews routed by CODEOWNERS and enforced by branch protection, and skill packs are managed centrally and can be client-hosted. Pricing: Dev $9/month, Team $19/developer/month, Enterprise on request (`components/site/pricing-section.tsx`).

Marketing homepage for an ADLC (Agentic Development Lifecycle) extension for VS Code,
built on Spectrum UI's own homepage design. "Lockstep" and the logo are placeholders.

## Run it

Unzip into an empty folder (not over an earlier version), then:

    npm install
    npm run dev

If you see `Module not found: Can't resolve 'react-markdown'` (or any other package), the
dependencies are out of date. This happens when a new version is unzipped over an old
`node_modules`. Fix it with a clean install:

    rm -rf node_modules .next        # Windows PowerShell: rmdir /s /q node_modules .next
    npm install
    npm run dev

Open http://localhost:3000. Deploys to Vercel as-is.

## What comes from Spectrum UI

Source: https://github.com/arihantcodes/spectrum-ui (Apache 2.0, see `LICENSE-spectrum-ui.txt`).

Homepage structure, taken from Spectrum's own site:
- `app/home/HeroContent.tsx`, `HeroStage.tsx`, `CornerBadge.tsx`, `AnimateEnter.tsx`: the hero,
  the panning "camera" canvas of live cards, the corner-bracket badge and entrance animations.
  Only the copy and the cards on the canvas were changed.
- `components/site/site-header.tsx`, `site-footer.tsx`, `faq-section.tsx`: Spectrum's navbar,
  footer and FAQ, with the same classes and your content.
- `app/globals.css`: Spectrum's tokens, chroma headline sweep, container-frame and reveal utilities.
- Fonts match Spectrum: Spectral (headings), Inter (body copy), Geist Sans and Mono.

Components on the hero canvas (`app/home/stage-cards.tsx` holds all their ADLC content):
- AI Chat Card: 01 Intent
- Agent Plan: 02 Level-1 plan
- Agent Steps: 03 Bolts
- Diff View: 04 code review
- Approval Card: human gate (added `approvedMessage` / `rejectedMessage` props)
- Recent Activity: lifecycle agent feed
- Nav List Card: artifacts and governance
- FAQ Tabs Card: security, models, rollout

Also used: Data Table (audit log in the Foundation section), Scramble Text (logo), Button.

## Dark mode

Light, System and Dark, using Spectrum UI's own theme switch (`components/theme-toggle.tsx`) and
`next-themes`. It follows the operating system by default and remembers the visitor's choice.
The switch sits in the header on larger screens and in the footer on phones. Dark mode uses
Spectrum's dark palette, including its lime accent (`#E1F435`) in place of the orange.

## Phase skills

Each lifecycle card opens the skill that runs that phase, read at build time from `adlc-agent/`
(`lib/skills.ts`), so the site always shows the files that ship. Deep links work:
`/#skill-build-orchestrate`. `npm run build` re-zips the package to `public/adlc-agent.zip`
for the "Skill pack" download. The "Open in VS Code" button uses a placeholder URI
(`vscode://lockstep.adlc/open`); set it to your extension id in `components/site/skill-viewer.tsx`.

## Sections

`components/site/sections.tsx` holds the Lifecycle (six phases with gates and outputs),
ADLC Foundation, and Use cases sections. Spectrum's homepage only has a hero and FAQ, so these
are new, built from the same visual vocabulary: orange corner marks, mono labels, Spectral
headings and the same card style.

## Before launch

All names, numbers, security claims and pilot terms are placeholders. Check them with product
and security before publishing.
