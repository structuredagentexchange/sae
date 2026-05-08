# SAE Translation for Non-A2A Agents

## Purpose

Not every useful agent runtime will speak A2A.

SAE should still be usable with:

- plain HTTP services
- MCP-connected hosts
- CLI tools
- orchestrators
- chatbox-only agents
- internal agent runtimes

## Translation Model

### Input Side

Convert native asks into SAE:

- extract objective
- extract constraints
- define deliverable
- define review posture
- optionally add preference hints

### Output Side

Convert SAE into the target system's native format:

- HTTP request payload
- MCP tool call arguments
- CLI command contract
- prompt template
- internal job object

## What This Solves

This is the layer A2A does not fully solve by itself:

- semantic normalization for systems outside A2A
- a common work-shape between otherwise incompatible agents

## Translation Rule

The translator should preserve:

- objective
- constraints
- deliverable shape
- review posture
- instruction frame intent

It may degrade:

- richer continuity nuance
- dialect-specific internal interpretation

That is acceptable. SAE should survive graceful simplification.

## Endpoint-Aware Dialect Switching

Different target systems do benefit from different prompting tactics.

That is not a reason to fracture SAE itself.

The correct model is:

- `SAE task` stays stable
- `translator` selects an endpoint profile
- `endpoint codex` tells the translator what works best there

Examples:

- `Qwen` may benefit from a more explicit system prompt, short instructions, a few-shot example, and a firm output format.
- `Anthropic` may benefit from more organized context blocks and explicit sectioning.
- `local models` may benefit from repeated constraints and a simpler schema.

The translator may adapt:

- prompt phrasing
- ordering of role / goal / context / style
- whether examples are included
- how strongly the output contract is stated

It should not alter the underlying objective, constraints, deliverable, or review posture.
