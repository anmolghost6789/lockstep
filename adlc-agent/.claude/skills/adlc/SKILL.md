---
name: adlc
description: "Shared hidden protocol for the ADLC phase skills: gate enforcement, audit logging, policy checks, traceability and state bookkeeping."
argument-hint: "[optional run context]"
user-invocable: false
allowed-tools:
  - AskUserQuestion
  - Agent
  - Read
  - Grep
  - Glob
  - Bash(python3:*)
  - Bash(cat:*)
  - Bash(ls:*)
  - Bash(mkdir:*)
---

# ADLC Shared Protocol

This hidden skill is loaded by every ADLC phase skill. User-facing actions are /discover-define, /architect-design, /build-orchestrate, /evaluate-validate, /release-operate, /observe-evolve, /approve-gate, /status and /cancel.

## Phase entry (every phase, in this order)

1. Read `CLAUDE.md`, `config/project_config.json`, this file, and `adlc/.state/run_state.json` if it exists.
2. **Gate check.** Unless this is /discover-define on a new intent, run:
   ```
   python3 .claude/skills/adlc/scripts/adlc_gate.py check --gate <previous gate id>
   ```
   Exit code 0 means approved or waived. Any other exit code: stop, say which gate is outstanding and who can approve it (the script prints the required role), recommend /approve-gate or /status, and end the turn. Do not continue on a verbal "go ahead" in chat.
3. **Upstream integrity.** `adlc_gate.py check` also verifies the upstream artifact's sha256 matches the hash recorded at approval. If the artifact changed after approval, stop: the gate must be re-requested.
4. Phase-start bookkeeping write (state + progress), and `audit_log.py append --event phase.started`.

## Phase exit (every phase, in this order)

1. Write the phase artifact from its template in `.claude/skills/adlc/templates/`. Edit one section at a time; never emit a whole large artifact in one write.
2. Validate structure and traceability:
   ```
   python3 .claude/skills/adlc/scripts/validate_artifact.py --phase <phase id>
   ```
3. Run the phase policy pack listed in `config/project_config.json > policy_packs.<phase id>` (see `utilities/policy-enforcement.md`). Failures block step 4.
4. Request the gate:
   ```
   python3 .claude/skills/adlc/scripts/adlc_gate.py request --gate <gate id> --summary "<one line>"
   ```
   The script hashes the artifact, records the requester, and writes a pending gate file.
5. Phase-completion bookkeeping write, then a concise summary: what was produced, validation and policy results, gate id, required approver role, and the command they should run (`/approve-gate <gate id>`).
6. Stop. Do not auto-invoke the next phase.

## Rules

- Only `adlc_gate.py` writes under `adlc/.gates/`. Only `audit_log.py` writes `adlc/.audit/audit.jsonl`. The pre-tool hook blocks direct writes to both.
- Never approve a gate on a human's behalf, and never ask a human to paste an approval into chat. Approval happens through /approve-gate by the approver in their own session, under their own identity.
- Apply context precedence from CLAUDE.md principle 7.
- Delegate only to the subagents and thresholds listed in CLAUDE.md.
- Use `AskUserQuestion` for genuine in-phase decisions only (see `utilities/human-gates.md`). Before asking, set `run_status = waiting_for_user` and a specific `awaiting_user_action`.
- Restricted inputs (per `config/project_config.json > data_classification`) are referenced by pointer, never copied into artifacts or prompts.

Additional context from user invocation: $ARGUMENTS
