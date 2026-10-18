Product Requirements Document (PRD): Track 1, Concept C
1. Project Overview
Challenge: "Baby's First Website" Hackathon (haX.baby)
Track: Track 1 (Pip, The Skull Baby)
Concept Strategy: Concept C — "The Interactive Nightstand"
Architecture: Single-page application (SPA), absolute positioning/Flexbox layout, zero-scroll constraint, modal-driven navigation.
Primary Objective: Deliver a flawless, zero-error frontend experience that heavily indexes on the "Early-Web Soul" and "Clean Craft" judging criteria.

2. Technical Stack
Framework: React + Vite (Fast compilation, zero backend overhead).

Styling: Tailwind CSS (Strictly utilizing the haX.baby palette: #fff8f1, #a34063, #5c4033).

State Management: React useState for modal toggles, audio states, and theme switching.

Animations: Framer Motion (Modal pop-ups, hover scaling on desk objects).

Audio/Effects: use-sound (ambient lullaby, click effects) and canvas-confetti (Easter egg).

3. UI/UX Architecture: The Zero-Scroll Nightstand
You are abandoning the traditional vertical scroll portfolio. The entire viewport is Pip's nightstand workspace.

3.1 Base Layout Constraints
Desktop: A centralized desk container holding distinct, clickable PNG elements.

Mobile (High Risk Area): A zero-scroll layout breaks easily on mobile. You must use CSS flex-col or a tight grid to stack the interactive objects neatly on small screens without requiring the user to scroll to find them. If this breaks, you lose the 15% Clean Craft score.

3.2 Interactive Elements (The Triggers)
The UI consists of specific objects sitting on the nightstand. Clicking an object dims the background and opens a Framer Motion modal centered on the screen.

Object 1: Pip's Portrait/ID Card (Identity)

Asset: pip_portrait.png or pip_avatar_cloud.png.

Modal Content: Answers "What they are." Name, Job Title (Junior Dream Engineer), and personality quirks.

Object 2: The Music Box (Project 1)

Asset: pip_lullaby_box.png.

Modal Content: "The Lullaby Lab" showcase. Details on generative soothing lullabies.

Object 3: The Glowing Lantern (Project 2)

Asset: pip_dream_lantern.png.

Modal Content: "Nightlight Collection" showcase.

Object 4: The Sketchbook/Journal (Project 3 & Story)

Asset: CSS-styled book or custom SVG.

Modal Content: "Bedtime Storybook" showcase combined with Pip's origin story (under 150 words). Uses a simple click-to-flip or fade-to-next-page interaction inside the modal.

4. Required Feature Specifications & Scoring Logic
Baseline Tier 1 Requirements (Must Have)
Mobile Responsive: The nightstand objects must scale and rearrange without overflowing the viewport 100dvh.

Day/Night Toggle: A physical switch (e.g., a desk lamp cord) on the screen. Toggles Tailwind's dark class. Night mode reveals hidden glowing CSS properties (box-shadow) on the lantern and skull eyes.

Easter Egg: A specific, unlabelled star pattern on Pip's nightcap or a crack in the desk. Clicking it triggers canvas-confetti using the brand colors.

Targeted Tier 2 & Side Quests (Max ROI)
Web Audio API & Click Sounds (+3 pts): Implement use-sound for mechanical "clicks" when opening modals. Include a global mute toggle pinned to the bottom right corner.

Custom Sparkle Cursor (+2 pts): A trailing React cursor component tied to mouse coordinates, styled as a glowing ember or star to fit the dream theme.

Responsive Chaos Mode (+5 pts): The layout intentionally and cleanly shifts into an exaggerated, chunky retro layout when constrained to mobile dimensions, rather than just shrinking.

5. Execution Logic & Risk Mitigation
Skip Complex 3D: Do not attempt to make the isometric view actual 3D (Three.js). Use flat 2D layout with z-index layering and CSS drop-shadow to fake depth. It saves 10 hours of debugging.

Pre-load Assets: The official PNGs are high-res. Optimize them or ensure they load immediately so the "desk" doesn't appear empty on first load.

Modal Trapping: Ensure that when a modal opens, background clicks close it. A stuck modal forces a hard refresh, which judges will penalize