# SAE Model Endpoint Codex

## Purpose

SAE should stay small and stable.

The translator is where endpoint-specific prompt shaping belongs.

This codex exists so an SAE task can preserve its work-shape while still adapting to the known strengths of different model families and message endpoints.

## Core Rule

- `SAE` defines the shared task shape.
- the `translator` adapts that task to the endpoint.
- the `endpoint codex` records the known prompting wins for that endpoint family.

This means dialect switching should happen in the translator layer, not by mutating SAE into vendor-specific protocol text.

## Shared Instruction Frame

The default instruction frame SAE should preserve is:

- `role`
- `goal`
- `context`
- `style`

Optional helpers:

- `one_output_at_a_time`
- `good_output_examples`

These give the translator enough structure to emit a better endpoint-native system prompt without changing the underlying task.

## Model Family Big Wins

### OpenAI Responses

- explicit success criteria
- clear structured outputs
- direct role framing
- explicit tool and execution boundaries

### Anthropic Messages

- organized long context
- explicit role and goal
- principled values and uncertainty handling
- sectioned deliverables

### Google Gemini

- grounding blocks
- explicit schema guidance
- clear modality expectations
- concise instructions

### Qwen Chat

- very explicit system prompt
- short structured instructions
- few-shot examples
- clear output format

### Local Llama / Similar Local Models

- short concrete asks
- repeated key constraints
- simple stable schema
- low ambiguity

## Translation Rule

The translator should preserve:

- objective
- constraints
- deliverable shape
- review posture
- instruction frame intent

It may adapt:

- system prompt wording
- section order
- example density
- output contract wording
- endpoint-specific guardrails

## Why This Matters

Different model families do have different prompt wins.

That does **not** mean the standard should fracture into many incompatible vendor dialects.

The right split is:

- one stable SAE task
- one translator
- many endpoint-aware renderings
