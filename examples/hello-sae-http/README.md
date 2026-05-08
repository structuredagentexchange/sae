# Hello SAE HTTP

This is the smallest example implementation shape.

It shows how a non-A2A service could accept and return SAE-friendly task data.

## Files

- `request.json`
- `response.json`

## Flow

1. receive a fuzzy ask already normalized into SAE
2. inspect the bounded objective and review posture
3. return a reviewable result packet

## Why This Exists

This is the answer to:

`what is the smallest useful external implementation someone could build this week?`
