# SAE POC Result Bundle

This bundle was generated locally from the SAE benchmark harness plus an internal task-shaping demo.

- these are reproducible draft POC runs
- they are benchmark-generated, not independently judged
- they are suitable for a draft GitHub proof pack
- they are not yet enough to claim third-party validation

Pack: `sae_public_benchmark_pack_v1`
Rubric: `sae_public_scoring_rubric_v1`
Runs generated: 4

## Tasks

- **Browser adapter planning**: Design a browser-connected companion surface that can inspect pages, save routines, and return readable results safely.
- **Support resolution planning**: Plan a safe autonomous customer-support workflow that resolves simple refund and escalation cases while preserving trust.
- **Incident triage handoff**: Triage a production incident, propose the safest first response, and return a reviewable operator handoff packet.
- **Experimental adapter review**: Review a proposed experimental adapter and return the safest first implementation cut with explicit review posture.

## Lane Averages

### plain_a2a

- `delegation_clarity`: 49
- `clarification_pressure`: 62
- `artifact_specificity`: 48
- `operator_confidence`: 51
- `adoption_overhead`: 22

### sae_over_a2a

- `delegation_clarity`: 78
- `clarification_pressure`: 34
- `artifact_specificity`: 77
- `operator_confidence`: 75
- `adoption_overhead`: 39

### compiler_shaped_sae_over_a2a

- `delegation_clarity`: 86
- `clarification_pressure`: 28
- `artifact_specificity`: 86
- `operator_confidence`: 84
- `adoption_overhead`: 57

## Run Files

- `results/coding_browser_adapter.json`
- `results/support_resolution.json`
- `results/incident_triage.json`
- `results/experimental_adapter.json`

## Next step

- feed these same tasks and result traces into an external evaluator such as agentevals, OpenAI Evals, or LangSmith
