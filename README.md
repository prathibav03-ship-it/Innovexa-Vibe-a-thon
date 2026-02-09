# Innovexa-Vibe-a-thon
Competition to design precise and effective prompts to guide AI systems towards accurate, optimized outputs.
You are a senior full-stack engineer, AI prompt engineer, and UX designer.

Your task is to DESIGN AND BUILD a complete AI-powered emergency reporting web application that can be demonstrated to judges as a realistic emergency response system.

This is NOT a concept mockup. Build a fully functional, demo-ready web app with realistic behavior.

────────────────────────
CORE OBJECTIVE
────────────────────────
Create a website where the public can report emergencies quickly and the system automatically:
• understands the situation using AI
• classifies the emergency
• determines severity
• generates dispatch-ready alerts
• routes them to the correct emergency teams
• shows real-time response status to the user

────────────────────────
TECH STACK REQUIREMENTS
────────────────────────
• Frontend: React or Next.js
• Backend: API routes / server functions (mock external services)
• AI: Prompt-driven logic (NO hard-coded classification rules)
• Styling: Modern, calm, emergency-friendly UI
• Data handling: Structured JSON
• App must work without paid APIs

────────────────────────
FEATURES (ALL MANDATORY)
────────────────────────

1️⃣ USER EMERGENCY INPUT
• Large text box for emergency description
• Image upload (camera-first)
• Video upload
• Optional voice input (speech-to-text if supported)
• Optional live location sharing (GPS/manual)
• Multi-language input support (at least structure for it)

2️⃣ AI EMERGENCY ANALYSIS
Use AI to automatically:
• Analyze text, images, and videos
• Classify emergency into ONE OR MORE:
  - Police
  - Ambulance
  - Fire Station
• Detect severity:
  - Low
  - Medium
  - High
  - Critical
• Identify key details:
  - Incident type
  - People affected
  - Visible risks
  - Location clues
• Assign confidence score (0–100)
• Generate timestamp (ISO 8601)

ALL AI OUTPUT MUST BE STRUCTURED JSON.

3️⃣ AI DISPATCH MESSAGE GENERATION
• Generate clear, professional, department-specific dispatch messages
• Each department receives its own tailored alert
• Messages must be concise and operational
• Show message preview to user before sending

4️⃣ AUTOMATED ROUTING
• Automatically select relevant departments
• Support multi-department routing
• Simulate instant forwarding to departments

5️⃣ REAL-TIME STATUS TRACKING
After dispatch, show live status updates:
• Request Received
• Preparing
• Team Dispatched
• On the Way
• Action in Progress
• Resolved

Rules:
• Status must update in correct order
• Critical incidents progress faster
• Status visible clearly to user via timeline or stepper UI

6️⃣ USER EXPERIENCE (HIGH PRIORITY)
• Panic-friendly design
• Minimal steps
• Large buttons
• High contrast severity colors:
  - Green → Low
  - Yellow → Medium
  - Orange → High
  - Red → Critical
• Reassuring micro-copy (e.g. “Help is being coordinated”)
• No clutter, no ads, no distractions

7️⃣ OPTIONAL INNOVATION (IMPLEMENT AT LEAST 2)
• Live location tracking on map
• Chatbot assistant for guidance
• Priority-based alerts
• Responder dashboard (separate view)
• Emergency contact auto-notification

────────────────────────
AI PROMPT (MUST BE EMBEDDED)
────────────────────────
Use the following system prompt exactly for emergency analysis:

"You are an AI Emergency Dispatch Intelligence System used in real-world crisis reporting.

Rules:
1. Never guess missing information.
2. One incident may involve multiple departments.
3. Prioritize human life over property.
4. Output valid JSON only.

Return:
• emergency categories
• severity
• confidence score
• structured dispatch messages
• timestamp
• missing information list

If input is not an emergency, return an error JSON."

────────────────────────
STATUS ENGINE LOGIC
────────────────────────
Build a status simulation engine that:
• Advances status automatically
• Uses severity to control timing
• Feels real-time during demo

────────────────────────
DELIVERABLE REQUIREMENTS
────────────────────────
• Fully working website
• Demo-ready emergency flow
• Clean folder structure
• Clear separation of:
  - UI
  - AI logic
  - State management
• GitHub-ready project

────────────────────────
QUALITY BAR
────────────────────────
Build this as if it will be evaluated by:
• emergency responders
• government officials
• AI engineers

No shortcuts. No placeholders like “TODO”.
This app must look serious, intelligent, and trustworthy
