"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);
  const [status, setStatus] = useState("Idle");

  async function analyzeEmergency() {
    setStatus("Request Received");

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: text }),
    });

    const data = await res.json();
    setResult(data);

    setTimeout(() => setStatus("Team Dispatched"), 2000);
    setTimeout(() => setStatus("On the Way"), 4000);
    setTimeout(() => setStatus("Resolved"), 6000);
  }

  return (
    <main style={{ padding: 30 }}>
      <h1>AI Emergency Response System</h1>

      <textarea
        placeholder="Describe the emergency..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: 120 }}
      />

      <button onClick={analyzeEmergency} style={{ marginTop: 10 }}>
        Send Emergency
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Detected Emergency</h3>
          <p>Type: {result.category}</p>
          <p>Severity: {result.severity}</p>
          <p>Message: {result.message}</p>
        </div>
      )}

      <h3>Status: {status}</h3>
    </main>
  );
}
