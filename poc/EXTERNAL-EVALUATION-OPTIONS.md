# External Evaluation Options For SAE

This note separates two different kinds of outside validation:

1. external **grader frameworks**
2. external **agent benchmarks**

Both matter, but they prove different things.

## 1. External Grader Framework: Google ADK / Vertex AI Evaluation

Best for:

- response quality
- multi-turn task success
- rubric-based grading
- judge-based evaluation

Why it matters:

- it is an official external evaluation stack
- it gives SAE a reproducible scoring path outside this repository
- it supports both reference-based and rubric-based evaluation

Common metrics:

- `response_match_score`
- `rubric_based_final_response_quality_v1`
- `multi_turn_task_success_v1`

What it proves:

- whether SAE-shaped outputs are clearer and more reviewable
- whether the system actually completes the task across multiple turns

Limits:

- requires live credentials
- some metrics require Google judge APIs
- some metrics require Vertex AI project setup

## 2. External Grader Framework: OpenAI Evals / Graders

Best for:

- public eval definitions
- reference-based grading
- score-model grading
- reproducible grading configs other teams can run

Why it matters:

- it is another official external evaluation surface
- it lets SAE publish grader definitions without tying the entire proof story to one vendor
- it is well-suited to scoring:
  - clarity
  - deliverable completeness
  - reviewability
  - transport-agnostic response quality

What it proves:

- whether SAE-shaped outputs outperform plain baseline outputs under a published grader config

Limits:

- it is a grader framework, not a real-world agent benchmark by itself
- task packs still need to be designed carefully

## 3. External Benchmark: τ-bench / τ³-bench

Best for:

- customer-support agents
- tool-agent-user interaction
- multi-turn real-world domain tasks

Why it matters:

- it is a public benchmark built specifically for tool-using conversational agents
- it is much closer to a real customer-service proving ground than a generic internal task pack

What it proves:

- whether SAE actually helps a tool-using customer-service agent complete realistic conversations and policies better

Limits:

- it evaluates an entire agent stack, not just the SAE layer
- it is best once the public chat / customer-service surface is more mature

## 4. External Benchmark: AgentBench

Best for:

- broad agent capability
- multi-environment evaluation
- interactive tasks across OS, DB, web, shopping, and other domains

Why it matters:

- it is a recognized public benchmark for LLM-as-agent behavior
- it tests end-to-end agent competence beyond just response wording

What it proves:

- whether SAE improves performance in broader agent settings, not just support-style workflows

Limits:

- heavier to run
- less targeted than τ-bench for customer-service flows

## Suggested evaluation order

For public SAE evaluation, a practical order is:

1. Google ADK / Vertex evaluation criteria
2. OpenAI Evals / Graders
3. τ-bench or τ³-bench for customer-service proof
4. AgentBench later for broader general-agent claims

This provides:

- one official Google evaluation lane
- one official OpenAI evaluation lane
- one public task benchmark lane
- one broader agent benchmark lane
