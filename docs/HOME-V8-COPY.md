# Homepage v8 — The dark room, after Echo

Direction: **The dark room** (taste-skill). Type Bodoni Moda (display) and Jost (text); palette charcoal and sage.
Treatment: public-domain paintings and engravings, two-tone Bayer-dithered into the page's charcoal and sage,
hung like exhibits in a dim gallery.

## The idea

> On this page, **Echo, the nymph who could only repeat other people's words**, becomes **a dark gallery
> where EchoFlow answers in the voice of any model you choose**.

The app's own features carry her name (Echo Adviser, Echo Fusion, Echo Agents, EchoOCR, EchoCrawl), and in the
myth Hermes is the messenger: here, a message goes straight from the phone to the provider you configured, with no
EchoFlow server in between.

Live thing: the pinned answer card. Choose where the model runs, which search engine it uses, whether Echo Adviser
is consulted and the theme, and the answer on the left changes as you go.

## Sections

| # | Claim | Proof |
|---|---|---|
| Hero | EchoFlow answers, in any model's voice | Waterhouse's *Echo and Narcissus* (1903), dithered, full-bleed |
| The row | Every tool is a real piece of the app | A dark row of lit panels: model picker, Echo Fusion, Echo Adviser, Deep Research, Browser Flow, voice |
| The myth | Echo could only repeat; EchoFlow answers | Poussin's *Echo and Narcissus*, lit |
| Configure | You decide where it runs and what it uses | Pinned answer card with live controls |
| How it works | Three exchanges: what you give, what comes back | Install, point it at your PC, ask for a report |
| Download | The first step is already open | Install dialog over Lauwers' engraving of Mercury (Hermes) at the table |
| Footer | Where to go next, and the credits | Columns, then the name across the width |

## Copy

- h1: EchoFlow / answers.
- Sentence: An open-source Android app that answers in the voice of any AI model: in the cloud, on your own PC, or on the phone itself.
- Myth statement: Echo could only give back the last words she heard. EchoFlow answers in whichever voice you choose.

## Pictures (all public domain or CC0; credits in `public/brand/v8/credits.json`)

- *Echo and Narcissus*, John William Waterhouse, 1903 (Wikimedia Commons)
- *Echo and Narcissus*, Nicolas Poussin, c. 1630 (Wikimedia Commons)
- Engraving of Echo, photo-reproduction, Rijksmuseum RP-F-2000-236, CC0 (Wikimedia Commons)
- *Jupiter and Mercury with Philemon and Baucis*, Nicolaes Lauwers, c. 1650 (Art Institute of Chicago, CC0)

Added at the owner's request: Cabanel's *Echo* (1874, public domain) and Carracci's *Mercury and the Graces* (1589, CC0): classical nudes from the myth, kept as art.

## Run report

- **Direction:** The dark room. Hero *Title from the top edge to the bottom edge*, type Bodoni Moda and Jost, palette charcoal and sage. Signature move: masked headline.
- **Treatment:** six public-domain or CC0 artworks, two-tone Bayer-dithered into the page's charcoal and sage, in the style of Nous Research's Hermes pages. No Nous assets or branding are used.
- **Redraws:**
  - Showcase: *Input half, output half* became *Lit panel, dark row*, so it doesn't repeat v5 and suits a dark room.
  - Close: the dealt *First step, already open* is kept, but its dialog is the app's real first choice (on the phone, cloud, or your network) over the Hermes engraving.
- **Idea:** Echo could only repeat; EchoFlow keeps her name and answers in any voice. Hermes, the messenger, carries your message straight to the provider.
- **Live things:**
  - the draggable row of lit app panels;
  - the pinned answer card, which changes with where the model runs, the search engine, Echo Adviser and the theme, and remembers the choices;
  - the install dialog's choice.
- **Gate:** lint 0 FAIL, 0 WARN. `inspect.mjs` 0 FAIL at 1440, 768 and 390. Two WARNs are deliberate: the row scrolls sideways and bleeds to the right edge.

```
ROUND 1
Seen in one second: EchoFlow / answers over Echo and Narcissus
Idea: the myth of Echo as a dark gallery; EchoFlow answers in any voice
Live thing: pinned answer card with four real controls
Layout words: hero=full-bleed / row=carousel / myth=exhibit+text / configure=pinned split / how=call-and-response column / close=field+dialog / footer=columns+name
Scores: design 8 · usability 7.5 · creativity 8.5 · content 8 → overall 8.0
Top three problems:
1. The page is long (11 screens); the Configure blocks sit 50vh apart by design and feel slow on a phone.
2. The light app panels are much brighter than the dithered art; one dark-theme panel would sit better in the room.
3. The Ollama model names in How it works are samples.
```

**Sample content to confirm:** the Ollama models (llama3.1:8b, qwen2.5:7b, gemma3:4b) and the IP address 192.168.1.20 are examples.

**Pictures:** the credits are in the footer and in `public/brand/v8/credits.json`. The app footage (voice call, web search recording) is the project's own.
