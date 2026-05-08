# Contributing to SAE

Thank you for helping improve Structured Agent Exchange.

SAE is trying to stay small, neutral, and easy to implement. Contributions
should strengthen that posture rather than widen the core unnecessarily.

## What Good Contributions Look Like

- clarify the public task shape
- improve schema precision
- add realistic examples
- improve validation or conformance guidance
- document translation patterns for real systems
- bring evaluation evidence from outside implementations

## What To Avoid

- expanding SAE into a transport protocol
- baking one product's internal mythology into the public core
- adding fields that only matter to one runtime
- making broad adoption claims without evidence

## Before You Propose A New Field

Please ask:

1. does this preserve task meaning across systems?
2. does this belong in the public core rather than a profile or translator?
3. can another implementer understand and use it quickly?
4. is there a smaller way to express the same value?

If the answer to those questions is weak, the change probably belongs in:

- a profile
- an example
- a translator codex
- an implementation note

## Suggested Workflow

1. open an issue or discussion with the problem statement
2. describe the user or implementer pain clearly
3. propose the smallest viable change
4. include example payloads when possible
5. include conformance or benchmark impact if relevant

## Proof Posture

SAE is still a public draft.

That means the most valuable contributions right now are:

- outside implementation trials
- clearer examples
- trace-based evaluation results
- evidence that a smaller core is enough

## Tone

Keep public-facing language:

- neutral
- specific
- implementation-friendly
- low on hype

The goal is to make SAE easy to adopt and easy to evaluate.
