# Human Gates and In-Phase Questions

## Two kinds of human touchpoint

1. **Gates (G1–G6)** end every phase. They are decided by a named role through `/approve-gate`, recorded by `adlc_gate.py`, bound to the artifact's sha256, and enforced at the start of the next phase. A chat message saying "approved" is not an approval.
2. **In-phase questions** (clarifications, blocker resolution) use `AskUserQuestion` and are recorded in the phase artifact with who answered.

## Why gates are not "run the next command"

Single-user skill packs treat invoking the next command as approval. That is fine for a solo engineer and fails an enterprise audit: it does not prove *who* approved, whether they had authority, whether they were independent of the author, or *what exact version* they approved. ADLC gates answer all four.

## Asking well

- One decision per question, 2–4 options, a recommended default, and the consequence of each option.
- Show the same options as plain text beside the picker, so the user can type an answer if the picker does not render.
- Before asking, `state.py wait --phase <id> --action <clarification|blocker_resolution>`.
- Only the orchestrator asks. Subagents return questions to the orchestrator.
- Link to evidence; never paste artifact bodies.

## Allowed in-phase questions

| Phase | Question | Options |
|---|---|---|
| 01 | Clarifying questions on intent | per question |
| 02 | Unlisted MCP server or model needed | RAISE WITH PLATFORM TEAM · DESIGN WITHOUT IT |
| 03 | Unit acceptance tests cannot pass as specified | ROUTE BACK TO 02 · ADJUST TESTS (needs architect) |
| 04 | Missing threshold in AIPRS | ROUTE BACK TO 01 · SKIP METRIC (recorded as gap) |
| 05 | Risk level disagreement | ACCEPT HIGHER LEVEL · ESCALATE |
| any | Blocker | RESOLVE · PROCEED WITH DOCUMENTED RISK (needs waiver at gate) |
