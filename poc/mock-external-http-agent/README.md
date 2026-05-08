# Mock External HTTP Agent

This is a tiny external-facing reference server for SAE experiments.

What it does:

- accepts a posted SAE task
- returns a tiny acknowledgement packet
- keeps the implementation shape public and neutral

What it does not do:

- perform real model inference
- prove outside adoption by itself
- replace the benchmark harness

Run it with:

```bash
node server.mjs
```

Then `POST` a valid SAE task to:

```text
http://127.0.0.1:4044/sae
```

Quick local test:

```bash
./send-sae.sh
```

Expected acknowledgment fields include:

- `id`
- `title`
- `objective`
- `deliverable`
- `reviewPosture`
- `humanReview`
- `constraintCount`
