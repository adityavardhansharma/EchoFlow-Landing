# Homepage v9 — Freedom: beyond the walls

Direction: **The place carries it** (taste-skill). Type Newsreader (one family); palette black with crimson for the
one action, and five chapter grounds sampled from Friedrich's *Monk by the Sea*.

## The idea

> On this page, **the walls of a single AI company** become **walls you leave behind**, and **the open sea**
> beyond them is every provider, key and machine you choose.

EchoFlow has no backend, no account and no telemetry. You bring your own keys (OpenRouter, OpenAI, Anthropic, Gemini,
Cerebras, xAI, Sarvam), your own PC (Ollama, LM Studio, any OpenAI-compatible server) or a model on the phone, and you
switch whenever you like. The nearest competitor is itself a walled garden, so it cannot say this.

Inspired by the "beyond the walls, the sea" story of freedom (Attack on Titan among others) using only public-domain
art: no anime frames, characters or emblems.

## Chapters (grounds sampled from the hero painting, light to dark)

| Chapter | Ground | Holds |
|---|---|---|
| Hero | Friedrich, *Monk by the Sea* | "Beyond the walls", the swatch column as navigation |
| The walls | mist `#b4bcc6` | Five walls you leave, each with a picture in the margin |
| Every port | sky `#7f94b8` | Cards crossing Aivazovsky's *Ninth Wave*: the providers as ports of call |
| Your route | sand `#6e6d69` | Pinned app fragment: paste a key, pick a model, switch mid-chat |
| Set sail | shore `#3e3c3a` | Three pictures (wall, colossus, wave), then the download line |
| Footer | sea `#212128` | Columns, the name across the width, the credits |

## Copy

- h1: Beyond / the walls. Sentence: EchoFlow is a free, open-source Android AI app with no account and no lock-in: any provider on your own keys, your own PC, or a model on the phone.
- Walls heading: No walls here. Rows: One company's models → every provider · Their account → no account at all · Their subscription → your own keys · Their servers → your own PC · Their cloud → the phone itself.
- Ports heading: Every port is open.
- Route heading: Your route. Statements: Paste your own key. / Then pick any model. / Switch mid-chat, keep the thread.
- Close: No walls, no account. Download the APK and choose your own sea.

## Pictures (public domain or CC0; credits in `public/brand/v9/credits.json`)

Friedrich *Monk by the Sea* (1808–10) · Aivazovsky *The Ninth Wave* (1850) · Hokusai *The Great Wave off Kanagawa* ·
Goya (attr.) *The Colossus* · Herbert Ponting, the Great Wall (1907) · Mediterranean portolan chart (c. 1320) ·
*Winged Victory of Samothrace*, 1860s photograph (Art Institute of Chicago).

## Run report

- **Direction:** The place carries it. Hero *Swatch column beside the view*, type Newsreader, signature: colour by chapter (each chapter is one swatch sampled from the hero painting, and the swatch column links to them).
- **Palette:** the dealt black and crimson are kept (crimson only on the action and the download underline). The chapter grounds are sampled from Friedrich's painting.
- **Departures from the sheet:**
  - The ports heading sits above the held stage, not on it, so no large text is pinned over the picture.
  - The hold is just over one screen.
  - On phones the route's app piece is not pinned, so nothing covers the statements.
- **Attack on Titan:** the "walls, then the sea" story is told with public-domain art only (Goya's giant, the 1907 Great Wall, the Winged Victory, the open sea). There are no anime frames, characters or emblems.
- **Owner-supplied stills:** an optional slot. It shows nothing until the site owner adds their own images and a `credits.json` under `public/brand/v9/aot/`, and using them is the owner's call.
- **Live things:**
  - the swatch column as navigation;
  - the port cards crossing the held *Ninth Wave* as you scroll;
  - the app piece that follows the route statements.
- **Gate:** lint 0 FAIL, 0 WARN. `inspect.mjs`: 0 FAIL at 1440, 768 and 390. Two WARNs remain:
  - the travelling cards carry their names over the held painting, which is the blueprint's own device;
  - ten font sizes at 768px, because the clamped steps resolve to separate values there.

```
ROUND 2
Seen in one second: Beyond the walls over Friedrich's sea
Idea: the walls of one AI company left behind; every provider, key and machine is open sea
Live thing: the ports crossing the held Ninth Wave; the swatch column
Layout words: hero=view+swatches / walls=list / ports=held carousel / route=pinned split / stills=(optional) / close=strip+field / footer=columns+name
Scores: design 8 · usability 7.5 · creativity 8 · content 8 → overall 7.9
Top three problems:
1. The walls section leaves columns 1–4 empty by design; it reads airy at 1440.
2. App screenshots on the port cards mix the app's purple and olive themes.
3. The route's app piece is rebuilt in a system face, a second typeface beside Newsreader.
```

Pictures: all public domain or CC0, credited in the footer and in `public/brand/v9/credits.json`. The app's screenshots and recordings are the project's own.
