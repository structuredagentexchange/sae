# SAE Tutorial

Version: `0.1.0-draft`

This tutorial walks through one simple use case:

`Take a fuzzy ask and turn it into a reviewable shared task packet.`

## Step 1. Start With The Fuzzy Ask

Example:

`Review this new browser-hand adapter and tell me the safest first version to ship.`

This is useful, but still loose.

Questions are implied:

- what counts as success?
- how constrained is the first cut?
- does it need review?
- what shape should the answer come back in?

## Step 2. Normalize Into SAE

```json
{
  "sae_version": "0.1.0",
  "id": "sae-tutorial-001",
  "title": "Browser-hand adapter review",
  "objective": "Review this new browser-hand adapter and tell me the safest first version to ship.",
  "constraints": [
    "keep the first cut reversible",
    "return operator-readable review notes"
  ],
  "deliverable": {
    "artifact_type": "review_packet",
    "success_definition": "A downstream implementer can act on the packet without guessing the ask.",
    "format_hint": "markdown+json"
  },
  "delegation_hints": {
    "roles": ["planner", "reviewer", "implementer"],
    "steps": [
      "normalize the ask",
      "produce a safe first-cut recommendation",
      "attach review notes"
    ],
    "clarification_budget": "low"
  },
  "review_posture": {
    "risk_level": "medium",
    "human_review": true,
    "notes": "Do not widen scope into live deployment."
  },
  "provenance": {
    "origin_system": "tutorial",
    "compiled_from": "fuzzy_ask"
  }
}
```

## Step 3. Validate It

Use:

- `sae-task.schema.json`

If the packet passes validation, another system can inspect it with less guesswork.

## Step 4. Carry It Somewhere

You now have options:

### A2A system

Wrap it as metadata or an attachment alongside the normal A2A task/message flow.

### Plain HTTP service

Forward the packet to an endpoint that expects reviewable task objects.

### CLI or orchestrator

Turn it into job arguments or a prompt contract while preserving:

- objective
- constraints
- deliverable
- review posture

## Step 5. Evaluate The Result

The packet helped if:

- the receiver asked fewer clarifying questions
- the result came back in the expected artifact shape
- the operator could review it quickly

## Why This Matters

This is the core promise of SAE:

`less renegotiation of what the work means`
