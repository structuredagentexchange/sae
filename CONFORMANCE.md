# SAE Conformance

Version: `0.1.0-draft`

## Required For A Minimal Conforming Implementation

An implementation may call itself `SAE-compatible` when it can:

1. ingest a valid SAE task payload
2. preserve:
   - `objective`
   - `constraints`
   - `deliverable`
   - `review_posture`
3. emit or forward a result without losing required fields
4. validate packets against the public schema

## Stronger Conformance

A stronger implementation should also:

- preserve `delegation_hints`
- preserve `preference_hints`
- preserve `provenance`
- declare SAE support explicitly in an Agent Card or service profile

## Translation Rule

Non-A2A translators may degrade richer nuance, but they should not silently erase:

- the bounded objective
- the requested deliverable shape
- the review posture

## What Does Not Count

These do not count as SAE support on their own:

- vague prompt wrappers with no stable packet shape
- product-specific internal payloads with no SAE export
- claiming compatibility without schema validation
