# Structured Agent Exchange (SAE)

An open specification for sharing the shape of agent work across A2A and non-A2A systems.

> Status: Public draft. Internal POC complete. External evaluation pending. Not yet a third-party validated standard.

## What SAE is

SAE is a small, neutral task packet.

The point is simple: different agent systems should be able to agree on the work even if they do not share the same runtime, framework, or internal implementation.

SAE is meant to complement interoperability layers such as A2A, not replace them.

## Why SAE exists

A lot of systems can already exchange messages.

That is not the same thing as agreeing on the work.

In practice, agent handoff often gets fuzzy right where it matters most:

- what the actual objective is
- what constraints matter
- what kind of output is expected
- how much review or caution is needed

SAE exists to make that part more explicit.

## What SAE carries

An SAE task can describe:

- the objective
- the constraints
- the expected deliverable
- delegation hints
- review posture
- optional preference and instruction hints

That is enough to make handoff cleaner without turning SAE into a full runtime or product stack.

## How SAE fits

The cleanest way to frame SAE is:

- `A2A` handles discovery, transport, tasks, messages, and artifacts
- `SAE` handles the shape of the work
- internal systems may produce SAE directly or through richer local compilers

SAE is intentionally:

- small
- neutral
- transport-agnostic
- usable over A2A, HTTP, MCP-style hosts, CLI workflows, or internal runtimes

## What SAE is for

SAE is for situations where the work needs to stay legible as it moves between systems.

That usually means:

- turning a fuzzy ask into a stable packet
- making objectives and constraints explicit
- describing the deliverable clearly
- preserving review posture across systems
- carrying lightweight delegation or instruction hints
- allowing endpoint-aware translation without changing the public core

## What SAE is not

SAE is not:

- a transport protocol
- a replacement for A2A
- an agent runtime
- an authentication layer
- a complete interoperability stack by itself

## Relationship to A2A

The intended relationship is straightforward:

- `A2A` handles agent-to-agent discovery and transport
- `SAE` handles the shape of the work

So the usual public path should be:

- `SAE over A2A`

not:

- `SAE instead of A2A`

## Relationship to translation

SAE should not turn into a pile of vendor-specific prompt dialects.

Instead:

- SAE keeps the shared task shape stable
- the translator renders that shape for a given endpoint
- the endpoint codex records what tends to work best for each model family

That allows the same SAE task to be rendered for systems such as:

- OpenAI Responses
- Anthropic Messages
- Gemini
- Qwen
- local Llama-style models
- generic HTTP agents

## Getting started

If you are new here, use this order:

1. `OVERVIEW.md`
2. `QUICKSTART.md`
3. `TUTORIAL.md`
4. `sae-task.schema.json`
5. `SAE-OVER-A2A.md`
6. `NON-A2A-TRANSLATION.md`
7. `CONFORMANCE.md`

## Repository contents

- `sae-task.schema.json`
- `examples/`
- `SAE-OVER-A2A.md`
- `NON-A2A-TRANSLATION.md`
- `MODEL-ENDPOINT-CODEX.md`
- `OVERVIEW.md`
- `WIKI.md`
- `QUICKSTART.md`
- `TUTORIAL.md`
- `CONFORMANCE.md`
- `IMPLEMENTATIONS.md`
- `CHANGELOG.md`
- `poc/`
- `docs/`
- `LICENSE`
- `NOTICE`
- `CONTRIBUTING.md`
- `GOVERNANCE.md`

## Documentation site

The `docs/` folder contains the SAE documentation homepage and wiki for GitHub Pages.
