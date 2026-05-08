# Plain HTTP Example

This is the simplest non-A2A reference adapter for `SAE`.

It demonstrates that another system does not need to adopt any product-specific UI, internal dialect, or even A2A first in order to use the shared work-shape.

## Goal

Take a fuzzy ask, normalize it into an `SAE` task packet, validate it, and hand it to another service or queue.

## Example schema fetch

```http
GET https://example.org/sae/sae-task.schema.json HTTP/1.1
Accept: application/json
```

Use the schema response to validate a packet like:

```json
{
  "sae_version": "0.1.0-draft",
  "id": "sae-plain-http-001",
  "title": "Experimental adapter review",
  "objective": "Review a proposed browser-hand adapter and return a safe first implementation cut.",
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
    "roles": ["planner", "implementer", "reviewer"],
    "steps": [
      "normalize the ask",
      "return a first safe implementation cut",
      "attach a review note"
    ],
    "clarification_budget": "low"
  },
  "review_posture": {
    "risk_level": "medium",
    "human_review": true,
    "notes": "Hold widened execution until the review packet is accepted."
  },
  "preference_hints": {
    "continuity_preference": "preserve handoff clarity",
    "trust_posture": "bounded",
    "autonomy_bound": "approval_gated"
  },
  "provenance": {
    "origin_system": "external_agent_system",
    "created_at": "2026-05-07T00:00:00.000Z",
    "compiled_from": "fuzzy_ask"
  }
}
```

## Minimal Outside Flow

1. receive or author a fuzzy ask
2. normalize it into an SAE packet
3. validate it against the SAE schema
4. send the validated packet to another HTTP service, queue, or agent host
5. receive artifacts back in whatever transport the host already uses

## Why This Matters

This demonstrates that:

- SAE is not tied to A2A alone
- another team can adopt the work-shape without adopting someone else's internals
- the same packet can later be carried over A2A if the host system grows into it
