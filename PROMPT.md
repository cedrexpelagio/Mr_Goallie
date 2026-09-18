## Role
 
You are a front-end developer building a static HTML/CSS website called **Mr Goallie** — a goal-tracking and planning app. Users create Goals, break them into Missions, and break Missions into Actions.
 
## Goals
 
1. Build `index.html`, `goalForm.html`, and `css/styles.css` exactly as specified below.
2. Match the Strava-inspired dark, athletic, data-forward visual style and the color palette exactly.
3. Render the Goal → Mission → Action hierarchy with decreasing card size/weight, pre-populated with the sample mock data provided.
4. Keep all markup JS-ready (clear `id`/`data-` hooks) for expand/collapse and calendar logic that will be added later — but write no JavaScript now.
5. Mark the mock data clearly so it can be deleted cleanly later.
## Style
 
**Reference:** Strava UI (dark, athletic, data-forward dashboard).
 
**Colors**
| Role | Color | Hex |
|---|---|---|
| Background | Dark Charcoal | `#121212` |
| Primary | Strava Orange | `#FC4C02` |
| Primary Accent | Red-Orange | `#E34234` |
| Text muted | Gray | `#9CA3AF` |
| Text primary | Off-white | `#F5F5F5` |
| Border | Low-contrast gray | `#333333` |
| Success | Strava Orange | `#FC4C02` |
| Warning (deadline near) | Amber | `#FFB020` |
 
**Typography**
- System sans-serif stack only: `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- Headings: bold, condensed feel. Section labels: uppercase + letter-spacing (e.g. "GOAL COLLECTION").
- Base size 16px. Scale: 12 / 14 / 16 / 20 / 24 / 32px.
**Spacing & Radius**
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32px.
- Card radius: 12px. Pills/tags: 999px. Rectangular buttons: 8px.
- Card shadow: `0 2px 8px rgba(0,0,0,0.4)`.
## Vibe
 
Productivity and energy — bold orange on dark, generous card whitespace, strong hierarchy so progress is scannable at a glance.
 
## Page: `index.html`
 
**1. Nav bar**
- Left: "Mr Goallie" wordmark (text logo, orange gradient on "Goallie").
- Right: links for `Goals` (default/active) and `Activity`, plus a profile icon on the far right.
- Sticky, dark charcoal, subtle bottom border, ~64px tall.
**2. Goal Collection**
 
Filter row (flex, space-between):
- Left: heading "Goal".
- Right: category `<select>` (Health, Career, Finance, Learning, Personal) + primary orange "Add Goal" button linking to `goalForm.html`.
Goals render as a responsive grid of Goal Cards.
 
**Goal Card** (largest card)
- Top: Title (bold, large), category pill, edit pencil icon (top-right).
- Middle: Description (muted gray, 2-line clamp), circular progress ring with % centered inside.
- Bottom: Deadline (calendar icon + date), Days Remaining badge (amber if <7 days, else gray), and an "N Missions" expand toggle.
- The toggle (or clicking the right column) reveals nested Mission Cards, indented with a left connecting border.
**Mission Card** (nested, medium size)
- Title, linear progress bar with % label, Deadline, Days Remaining, "N Actions" expand toggle.
- Toggle reveals nested Action Cards, same indentation pattern.
**Action Card** (nested, smallest/most compact)
- Title, Duration (clock icon + hours), small pill-shaped orange "Start" button.
- Completing a Start action is what later creates an entry in the Action Collection log.
Visual weight decreases Goal → Mission → Action. Progress bars use the orange→red-orange gradient.
 
**3. Action Collection**
- Heading: "Completed Actions" (or "Activity Log").
- Vertical list, most recent first.
- Each row: orange check icon, Action title, Duration, Date Completed (right-aligned, muted gray).
**4. Consistency Calendar**
- Heading: "Consistency".
- GitHub-style grid: columns = months, rows = weeks/days.
- Cell fill intensity = actions completed that day (0 = empty charcoal, 1 = light orange, 2–3 = medium orange, 4+ = full orange).
- Include a "Less → More" legend using the same scale.
- Cell `title` tooltip (date + count) — no need to populate it yet.
**Build this section as an empty placeholder only:** outer container, heading, and month/column frame, with no day cells, marks, or fill. Leave it visually blank (dashed border or "Calendar coming soon" text). Day cells and marking logic come later.
 
**Expand/collapse markup:** no JavaScript in this build, but make the markup ready for it — no `<details>/<summary>`. Give each toggle a `data-toggle="goal-1-missions"`-style attribute, give the matching container `id="goal-1-missions"` plus class `.expandable` (JS will later toggle `.expanded`). For the one mock Goal, render it already expanded (Missions and their Actions all visible) so the hierarchy shows without JS.
 
## Page: `goalForm.html`
 
**Reference:** Google Forms — centered single column, card-style question blocks, generous vertical spacing, one primary "Submit" at the end.
 
- Dark theme background; form card uses a slightly lighter surface panel with an orange top accent bar.
- One form with three stacked sections, nested to mirror Goal → Mission → Action (Mission block sits inside Goal, Action block sits inside Mission):
  1. **Goal Details:** Title (text), Category (select, same options as index filter), Description (textarea), Deadline (date).
  2. **Mission Details:** Title (text), Deadline (date). Repeatable via "+ Add another Mission".
  3. **Action Details:** Title (text), Duration in hours (number). Repeatable via "+ Add another Action".
- Inputs: boxed/underlined fields on dark background, orange `:focus` outline.
- Footer: "Cancel" (gray, links to `index.html`) and "Save Goal" (primary orange, submit).
## Mock Data
 
Pre-populate `index.html` with exactly one mock Goal, 2 Missions, 3 Actions each.
 
**Goal: "Earn 10K This Month"**
- Category: Finance
- Description: "Hit ₱10,000 in extra income this month through freelance work and side sales."
- Deadline: last day of the current month
- Days Remaining: calculate from today (static value is fine)
- Progress: 50%, shown in the ring
- Missions: 2
**Mission 1: "Freelance Gigs — ₱6,000"**
- Deadline: 2 weeks from today
- Progress: ~66% (2 of 3 Actions completed)
- Actions:
  1. "Pitch 5 potential clients" — 3 hrs — Completed
  2. "Deliver logo design project" — 6 hrs — Completed
  3. "Follow up on pending invoices" — 1 hr — Not started (show "Start" button)
**Mission 2: "Sell Unused Items — ₱4,000"**
- Deadline: 3 weeks from today
- Progress: ~33% (1 of 3 Actions completed)
- Actions:
  1. "List items on Facebook Marketplace" — 2 hrs — Completed
  2. "Sell old gadgets on Shopee" — 2 hrs — Not started
  3. "Meet up for buyer pickup/COD" — 1 hr — Not started
**Action Collection** — populate with the 3 completed Actions above (check icon, title, duration, a completed date within the current month), most recent first:
1. Deliver logo design project — 6 hrs
2. Pitch 5 potential clients — 3 hrs
3. List items on Facebook Marketplace — 2 hrs
This gives real variation: a partial ring, two Mission bars at different levels, a mix of completed/startable Actions, and a populated Action log.
 
## Removable Mockup Section
 
Mark the mock content so it can be deleted cleanly later.
 
**In `index.html`:** wrap the mock Goal Card (with its nested Mission/Action cards) in comments and give it an extra class:
```html
<!-- MOCKUP DATA START — remove this block when real goal data is wired up -->
<div class="goal-card mock-data" ...> ... </div>
<!-- MOCKUP DATA END -->
```
 
**In `css/styles.css`:** add a fenced section near the bottom for any mockup-only styles:
```css
/* ===================================================
   MOCKUP-ONLY STYLES — remove this block along with
   the mock Goal Card in index.html when no longer needed
   =================================================== */
.mock-data { }
/* =================================================== */
```
Keep all real, reusable component styles (`.goal-card`, `.mission-card`, `.action-card`, nav, calendar placeholder, etc.) outside this block so deleting the mockup never breaks the real site.
 
## Tech Constraints
 
- HTML and CSS only. No JavaScript, no frameworks, no build tools, no CSS/JS libraries.
- Markup must be JS-ready per the expand/collapse and mockup notes above.
## File Structure
 
```
/
├── index.html
├── goalForm.html
└── css/
    └── styles.css   (shared stylesheet — color/spacing variables at the top)
```
 
## Responsive Behavior
 
- Desktop ≥1024px: multi-column goal grid.
- Tablet 640–1023px: single/double column.
- Mobile <640px: single column, nav collapses to icon-only or a simple bottom bar.
- Goal Cards stack full-width on mobile; ring shrinks but stays legible; calendar scrolls horizontally instead of shrinking.
## Accessibility
 
- Every icon has `aria-label` or visually-hidden text.
- Never use color alone for state — pair progress color with the numeric %/label, and calendar intensity with a `title` tooltip.
- Form inputs use associated `<label>` elements, not placeholder text alone.
## Rules
 
1. Follow the color palette and style exactly.
2. HTML and CSS only — no JS, frameworks, build tools, or libraries.
3. Plain files only — keep it simple.
4. No unnecessary hover effects on non-interactive elements.