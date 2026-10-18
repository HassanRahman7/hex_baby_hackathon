Design Specification: The Interactive Nightstand (Track 1, Concept C)
1. Visual Identity & Theme
You must strictly adhere to the haX.baby aesthetic. Do not deviate into modern minimalism; the judging rubric demands "Early-Web Soul."

Background (Day): Warm Cream #fff8f1.

Background (Night): Deep Berry / Espresso #1a1014 (derived from #5c4033).

Accents: Rich Berry #a34063 (used for borders, active states, custom cursor, and retro drop shadows).

Typography:

Headers: A playful, bubbly font (e.g., Google Fonts Fredoka or Comic Neue to mimic the early-web vibe).

Body: A legible monospace or simple sans-serif to contrast the playful headers.

2. Layout Architecture: 100dvh Strict
This is a single-screen, zero-scroll interface. If the user has to scroll to find an object, your design has failed the core premise of the concept.

Container: A unified workspace acting as the "room."

CSS Strategy: h-[100dvh] w-full overflow-hidden relative flex items-center justify-center bg-[#fff8f1] dark:bg-[#1a1014] transition-colors duration-700.

The Desk Surface: A visual anchor at the bottom 40% of the screen.

CSS Strategy: absolute bottom-0 w-full h-[40%] bg-[#5c4033]/10 dark:bg-[#fff8f1]/5 border-t-4 border-[#a34063].

3. Asset Mapping & Hitboxes
The official transparent PNGs act as your interactive buttons. They must be placed organically on the desk environment, not in a rigid corporate grid.

Center Anchor: pip_portrait.png (Pip). Positioned hovering slightly above the desk center.

Action: Opens the "Who is Pip?" modal (Identity, Job, Quirks).

Hover State: Continuous CSS translate-y floating animation.

Left Desk: pip_lullaby_box.png.

Action: Opens the "Project 1: The Lullaby Lab" modal.

Hover State: Rapid CSS rotate wiggle.

Right Desk: pip_dream_lantern.png.

Action: Opens the "Project 2: Nightlight Collection" modal.

Hover State: In Night Mode, this object must emit a heavy #a34063 CSS drop-shadow to simulate glowing.

Foreground / Wall Element: A custom SVG (e.g., a sketchbook or hanging star mobile).

Action: Opens the "Project 3 & Origin Story" modal (150-word story + Dream Routes showcase).

4. Interaction Design (UX)
Custom Cursor: A 16x16px #a34063 circle with a trailing Framer Motion delay. The pointer must change scale or shape (e.g., into a sparkle) when hovering over clickable desk objects.

Audio Feedback: Every click on a desk object must trigger a mechanical, satisfying "clack" or "chime" sound via Web Audio API. The global mute toggle must be permanently visible in the bottom right.

The Modals (Content Delivery):

Animation: Framer Motion initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}.

Styling: Thick #a34063 borders and harsh, offset drop shadows (e.g., shadow-[8px_8px_0px_#a34063]) to sell the 90s retro feel. Include a highly visible, oversized [X] close button.

Backdrop: A heavy blur (backdrop-blur-sm bg-black/20) over the desk to force the user's focus onto the content and prevent accidental double-clicks.

Day/Night Switch: A literal UI element (a dangling pull-cord or a retro light switch) fixed to the top-right corner, toggling the Tailwind dark class.

5. Mobile Strategy ("Responsive Chaos Mode")
Translating an isometric desk to a vertical phone screen is where most teams fail. Do not shrink the desk until it is unclickable.

The Shift: On screens < 768px, abandon the horizontal desk illusion entirely. The layout must cleanly snap into a stylized vertical stack of polaroids or stickers.

CSS Execution: Use a responsive CSS grid (grid-cols-2 gap-4 p-4). Place the PNG assets inside square "polaroid" frames with thick white borders. It is no longer a desk; it is a scrapbook wall.

Safety Threshold: Ensure all tap targets (the polaroids) are a minimum of 64x64px. Mobile users must be able to confidently tap the Lullaby Box without accidentally hitting the Lantern.