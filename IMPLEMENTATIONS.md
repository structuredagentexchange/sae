# SAE Implementations

## Current contents

This repository currently includes:

- the core schema
- example SAE packets
- an example A2A Agent Card
- a plain HTTP adapter example
- a benchmark harness
- a reproducible benchmark export script

## What Counts As A Real External Implementation

An external implementation should:

- not rely on any product-specific UI
- ingest or emit at least one conforming SAE task
- validate the task against the public schema
- survive one real round trip without losing required fields

## Candidate external implementations

1. plain HTTP service
2. A2A-compatible agent declaring SAE support
3. MCP/tool-host translation layer
4. CLI or orchestrator adapter

## Benchmark materials

- `poc/README.md`
- `poc/mock-external-a2a/agent-card.json`
- `poc/mock-external-http-agent/server.mjs`
- `poc/results/`

These materials represent:

- reproducible benchmark-generated proof
- mock external participant artifacts
- not yet third-party validated adoption

## Framing

`SAE` is the adoptable public layer.

Other systems may generate SAE directly, or through their own richer internal shaping layers.
