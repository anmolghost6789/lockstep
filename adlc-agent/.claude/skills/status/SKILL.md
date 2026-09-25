---
name: status
description: "Show run state, phase and gate status, pending approvers, policy results, audit chain integrity and the next safe action. User-invoked only."
disable-model-invocation: true
allowed-tools:
  - Read
  - Bash(python3 .claude/skills/adlc/scripts/*:*)
---

# /status

1. If `adlc/.state/run_state.json` does not exist, say: `No active ADLC run. Use /discover-define to begin.` and stop.
2. Run `state.py show`, `adlc_gate.py status` and `audit_log.py verify`.
3. Display: run ID and status; each phase with its status, gate status and required approver role; the latest validation and policy result per phase; audit chain integrity; `progress.json > next` as the next safe action.
4. If the audit chain is broken, say so first and recommend contacting the platform team before any further gate decisions.
