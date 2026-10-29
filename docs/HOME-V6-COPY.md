# Homepage v6 — Colour chapters

Direction: **Colour chapters** (taste-skill). Type General Sans, one family. Sheet: `.taste-skill/direction.json`.

## The idea

> On this page, **EchoFlow's own accent colours** become **the chapters of the page**.

The app ships seven accents (Wallpaper, Mono, Ocean, Forest, Sunset, Lavender, Rose). The dealt palette
(blue, red, black) is replaced by the subject's colours with the dealt proportions kept: each chapter is
one accent at full strength, floor to ceiling, and is named after it in the chapter index.

Live thing: the output index. Pick what you want EchoFlow to make (a research report, a data table,
an artifact, an image) and the real output lies on the stage.

## Chapters

| Chapter | Field | Holds |
|---|---|---|
| Hero | paper over Ocean `#1763c6` | "EVERY MODEL / ONE APP" across the waterline |
| Outputs | Mono `#16181d` | Output index and the live sheet |
| Inside | Sunset `#b4540b` | Five rows with unequal app screenshots in the margin |
| How long it takes | paper, bar in Forest, Ocean, Rose, Mono | The stages as one bar |
| Download | strip of three screens, then Forest `#1c6e2e` | "Download the APK" as the underlined phrase |
| Footer | Rose `#b01b49` | The name sliced at the top, then the places |

## Copy

- h1: EVERY MODEL / ONE APP. Sentence: EchoFlow is a free, open-source AI chat app for Android. Bring an OpenRouter key, your own provider keys, your PC, or run a model on the phone.
- Outputs: Research report · Data table · Artifact · Image.
- Inside heading: Built for real use. Rows: Any model · Everything under + · Talk to it · Projects · Your own PC.
- How heading: How long it takes. Stages: First, install the APK (about a minute) · Then paste one key (seconds) · Ask anything (seconds) · Deep Research runs on its own (a few minutes, screen off).
- Download: "Free and open source. Download the APK and keep every chat on your phone."

## Sample content to confirm

- Stage durations are estimates for the bar's proportions; confirm before launch.

## Run report

- **Direction:** Colour chapters. Hero *Waterline headline*, type General Sans, signature move: masked headline.
- **Palette:** the dealt blue/red/black proportions are kept, but the colours are the app's own accents (Ocean, Mono, Sunset, Forest, Rose), because the subject has unmistakable colours of its own.
- **Redraws:**
  - CTA: *A sentence with a blank* became *Three photographs, then a field*, because the action is a download, not an email.
  - Footer: *A footer of tiles* became *Name first, places under it*, so it doesn't repeat v5.
- **Departure:** the hero blueprint asks for no image. A real screen recording rises out of the Ocean field anyway, because real footage was requested for this version.
- **Live thing:** the output index, where four real outputs swap on the stage. The timing bar also fills stage by stage.
- **Gate:** lint 0 FAIL, 0 WARN. `inspect.mjs`: 0 FAIL. One WARN remains: a blank-gap at 768px, which is the deliberate rest before "What's inside".

```
ROUND 1
Seen in one second: the waterline headline
Idea: the app's seven accents become the page's chapters
Live thing: output index with four real outputs
Layout words: hero=waterline / outputs=index / inside=list / timing=band / close=strip+field / footer=name-first
Scores: design 7.5 · usability 7.5 · creativity 7.5 · content 8 → overall 7.6
Top three problems:
1. Inside leaves columns 1–4 empty by design; on a 1440 screen this reads airy rather than placed.
2. Stage durations in the timing bar are estimates (see "Sample content").
3. The hero clip shows a light-theme app on the Ocean field; a dark-theme recording would sit better.
```

Imagery: all the project's own screenshots and recordings (`public/brand/v3`, `public/brand/v5`, `public/brand/shot-*.jpg`). No stock or open-collection pictures, so nothing to credit.
