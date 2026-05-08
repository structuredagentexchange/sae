# SAE Quickstart

Version: `0.1.0-draft`

This is the fastest way to understand and try SAE.

If you want the short non-technical overview first, read `OVERVIEW.md` and then come back here.

## 1. Learn the packet

An SAE task has a small, stable set of fields:

- `objective`
- `constraints`
- `deliverable`
- `review_posture`
- optional `delegation_hints`
- optional `preference_hints`
- optional `provenance`

## 2. Read the schema

Read:

- `sae-task.schema.json`

## 3. Read one example

Start with:

- `examples/research-brief.json`

Then read:

- `examples/plain-http-client.md`

## 4. Validate a task

Validate the task against `sae-task.schema.json`.

Example payload:

```json
{
  "sae_version": "0.1.0-draft",
  "id": "sae-quickstart-001",
  "objective": "Review a proposed browser adapter and return a safe first implementation cut.",
  "constraints": [
    "keep the first cut reversible"
  ],
  "deliverable": {
    "artifact_type": "review_packet",
    "success_definition": "A downstream implementer can act on the packet without guessing the ask."
  },
  "review_posture": {
    "risk_level": "medium",
    "human_review": true
  }
}
```

## 5. Decide how you want to use it

### If you already speak A2A

Read:

- `SAE-OVER-A2A.md`

### If you do not speak A2A

Read:

- `NON-A2A-TRANSLATION.md`

### If you need endpoint-specific prompt shaping

Read:

- `MODEL-ENDPOINT-CODEX.md`

## 6. Check conformance

Before you call your implementation SAE-compatible, read:

- `CONFORMANCE.md`
