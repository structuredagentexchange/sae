import http from "node:http";

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, service: "mock-external-http-agent" }));
    return;
  }

  if (req.method !== "POST" || req.url !== "/sae") {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: "not found" }));
    return;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  let body = null;
  try {
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    res.writeHead(400, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: "body must be valid JSON" }));
    return;
  }

  const task = body?.task ?? body;
  if (!task || typeof task !== "object" || typeof task.objective !== "string") {
    res.writeHead(400, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: "task.objective is required" }));
    return;
  }

  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      ok: true,
      accepted: true,
      externalAgent: "mock-external-http-agent",
      acknowledgment: {
        id: task.id ?? null,
        title: task.title ?? "Unnamed SAE task",
        objective: task.objective,
        deliverable: task.deliverable?.artifact_type ?? "unknown",
        reviewPosture: task.review_posture?.risk_level ?? "unknown",
        humanReview: task.review_posture?.human_review ?? null,
        constraintCount: Array.isArray(task.constraints) ? task.constraints.length : 0,
      },
    }),
  );
});

server.listen(4044, "127.0.0.1", () => {
  process.stdout.write("mock external SAE agent listening on http://127.0.0.1:4044\n");
});
