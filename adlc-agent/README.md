# ADLC Agent: skill package for the Agentic Development Lifecycle

A Claude Code skill package that runs the six-phase ADLC inside VS Code, with enterprise controls: named-role approval gates, separation of duties, a hash-chained audit log, policy hooks, and model and MCP allow-lists.

It follows the same package layout as the Design Agent reference (hidden shared-protocol skill, self-contained phase skills, contracts, templates, scripts, thresholded subagents, context tiers, governed memory), and adds the governance layer an enterprise client will ask for.

## Commands

| Command | What it does |
|---|---|
| `/discover-define` | Intent → AI Product Requirement Spec (AIPRS) |
| `/architect-design` | AIPRS → Agentic Solution Blueprint + Level-1 plan + ADRs |
| `/build-orchestrate` | Blueprint → working product, built unit by unit in bolts |
| `/evaluate-validate` | Product → Evaluation Scorecard against AIPRS thresholds |
| `/release-operate` | Scorecard → governed production release with runbook |
| `/observe-evolve` | Production telemetry → improvement backlog and next intent |
| `/approve-gate` | Record an approve, reject or waiver decision for a gate |
| `/status` | Current phase, gate states, blockers, next safe action |
| `/cancel` | Stop the run, preserving the audit trail |

## Quick start

1. Copy this folder into the root of your repository.
2. Copy `.claude/settings.template.json` to `.claude/settings.json`. Platform teams can push `.claude/managed-settings.example.json` through their device management so users cannot relax it.
3. Edit `config/project_config.json` (gateway, model pins, thresholds) and `config/governance/*.json` (who can approve which gate, which MCP servers are allowed).
4. Put the business intent in `inputs/instructions/intent.md`.
5. In Claude Code, run `/discover-define`.

Requires Python 3.10+ (standard library only) for scripts and hooks.

## Enterprise readiness

See [docs/enterprise-readiness.md](docs/enterprise-readiness.md) for the control-by-control mapping a security review will want.
