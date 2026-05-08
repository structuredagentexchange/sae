# SAE over A2A

Version: `0.1.0-draft`

## Purpose

This document defines the recommended way to carry `SAE` through A2A interactions.

## Boundary

Use A2A for:

- discovery
- Agent Cards
- tasks
- messages
- artifacts
- streaming
- push

Use SAE for:

- objective
- constraints
- deliverable shape
- delegation hints
- review posture
- preference hints

## Agent Card Signaling

An A2A agent that supports SAE should declare:

- a skill or capability describing `SAE` support
- optional extension declarations
- a metadata flag indicating `supportsSaeOverA2A`

## Draft Extension Identifiers

- `https://structuredagentexchange.org/extensions/task/v0.1`
- `https://structuredagentexchange.org/extensions/preferences/v0.1`

## Usage Model

1. Client discovers agent through A2A Agent Card
2. Client sees `SAE` support
3. Client sends normal A2A task/message plus SAE attachment
4. Remote agent parses SAE fields
5. Agent returns normal A2A response while preserving SAE-aware metadata

## Value Claim

`A2A lets agents connect and exchange work. SAE helps them share the same shape of the work.`
