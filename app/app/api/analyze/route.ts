import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const text = body.description.toLowerCase();

  let category = "Police";
  let severity = "Low";

  if (text.includes("fire") || text.includes("smoke")) {
    category = "Fire Station";
    severity = "High";
  }

  if (text.includes("injury") || text.includes("unconscious")) {
    category = "Ambulance";
    severity = "Critical";
  }

  return NextResponse.json({
    category,
    severity,
    message: `Emergency classified as ${category}. Severity level: ${severity}.`,
    timestamp: new Date().toISOString(),
  });
}
