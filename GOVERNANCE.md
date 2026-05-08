# SAE Governance

Version: `0.1.0-draft`

## Current Governance Model

SAE is currently maintained as a draft specification with an editor-led model.

In this phase, the main priorities are:

- keeping the public core small
- collecting outside implementation feedback
- improving evaluation evidence
- separating stable protocol surface from implementation-specific strategy

## Decision Principles

Changes to SAE should favor:

1. neutrality over product-specific assumptions
2. clarity over cleverness
3. smaller core over larger ambition
4. evidence over assertion
5. profiles and translators over core-field inflation

## What Belongs In The Core

Core SAE should remain focused on:

- objective
- constraints
- deliverable
- delegation hints
- review posture
- minimal instruction and preference framing

## What Usually Does Not Belong In The Core

- transport details
- discovery mechanics
- vendor-specific prompting quirks
- product-only orchestration layers
- brand-specific language that other implementers do not need

Those belong in:

- A2A profiles
- non-A2A translation notes
- endpoint codex guidance
- implementation docs

## Versioning Posture

Until `0.1.0` is stabilized:

- the draft may change
- examples may evolve quickly
- proof language should stay conservative

Once outside implementations and evaluation evidence mature, governance can
expand into a broader multi-implementer model.

## Current Success Criteria

SAE becomes stronger when:

- another implementer can understand it quickly
- another system can emit or ingest it without special coaching
- trace-based comparison shows measurable value
- the spec still feels smaller than the systems around it
