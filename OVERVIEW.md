# SAE Overview

Version: `0.1.0-draft`

## The simple version

SAE stands for `Structured Agent Exchange`.

It is a small technical standard for making agent work easier to hand off between systems.

The easiest way to say it is:

> SAE helps agents agree on the work before they try to do the work.

## Why that matters

A lot of agent systems can already send messages back and forth.

That does not mean they interpret a task the same way.

Things usually get fuzzy around:

- what the actual ask is
- what constraints matter
- what kind of result is expected
- how much caution or review is needed

SAE is meant to make those parts clearer.

## What SAE does

SAE gives systems a compact packet for describing work.

At the core, that packet describes:

- objective
- constraints
- deliverable
- review posture
- optional delegation hints
- optional preference or instruction hints

That is enough to make handoff cleaner without trying to replace the rest of the stack.

## How it fits with A2A

The clean mental model is:

- `A2A` helps agents connect and exchange tasks
- `SAE` helps them mean the same thing by the work

So SAE is not trying to replace A2A.

It sits above that layer.

## What SAE is not

SAE is not:

- a transport protocol
- a runtime
- a full agent framework
- a replacement for A2A

## Current draft contents

This draft already includes:

- a schema
- examples
- conformance notes
- translation guidance
- a draft proof-of-concept bundle
- a path to external evaluation

## One line to remember

`SAE is an open specification for sharing the shape of agent work across A2A and non-A2A systems.`
