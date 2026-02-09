 Specification

## Summary
**Goal:** Deliver a demo-ready AI-powered emergency reporting and dispatch experience with multimodal intake, prompt-driven JSON analysis, dispatch preview/confirmation, simulated routing, real-time status progression, and a responder dashboard.

**Planned changes:**
- Build a single-page public emergency intake flow with: large text input, camera-first image upload, video upload, optional voice input (speech-to-text when supported with graceful fallback), optional location sharing (GPS with manual fallback), and a language selector that persists a language code with the report.
- Implement Motoko backend APIs to create/store reports, fetch by ID, and list recent reports; persist structured JSON-compatible report data (including media metadata/payloads as needed for demo, location, language code, timestamps).
- Add an AI emergency analysis module that embeds the provided system prompt verbatim and returns JSON-only results (or error JSON for non-emergencies); store analysis results with the report.
- Create an analysis preview + confirmation step showing categories, severity (Green/Yellow/Orange/Red), confidence, missing info, and department-specific dispatch message previews; allow edit-and-rerun before confirming dispatch.
- Implement automated routing on confirmation to all identified departments, store per-department dispatch records, and show forwarding confirmations in the UI.
- Add a real-time status simulation engine with ordered progression (Request Received → Preparing → Team Dispatched → On the Way → Action in Progress → Resolved), severity-based timing, and a timeline/stepper UI; persist status history and reload it on revisit.
- Build a responder dashboard view (with optional simple in-app demo gate) listing dispatched incidents sorted/filtered by severity and time, with incident details (analysis + dispatch messages + current status) and live updates via polling.
- Implement at least one additional innovation feature: priority-based alerts for Critical/High incidents and/or emergency contact auto-notification simulation that records and displays a “contact notified” event after dispatch.
- Apply a calm, emergency-friendly theme across the app (no blue/purple primary palette), with large touch targets, reassuring micro-copy, consistent severity tokens, and clear loading/error states; keep modules separated and use React Query for server state.
- Add generated static visual assets (logo + department icons) under `frontend/public/assets/generated` and use them in the header and department UI elements.

**User-visible outcome:** A user can submit an emergency report with optional media, voice, and location, see AI-generated JSON-based analysis and dispatch previews, confirm dispatch to relevant departments, and watch a simulated real-time response timeline; responders can view and track dispatched incidents in a dedicated dashboard with severity prominence and at least one extra demo innovation feature.
