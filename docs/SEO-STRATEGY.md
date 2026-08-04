# EchoFlow SEO Strategy

Last updated: August 2026  
Site: https://echoflow.app

## Positioning

**Primary:** An open-source, privacy-first AI app for Android that lets users access multiple AI models, use their own API keys, search the web, analyse files, conduct research, generate media, and optionally run supported models locally.

**Not:** An offline-only or local-LLM-only product. Local models live on `/local-models` as a secondary feature.

---

## Keyword-to-page map

| Page | URL | Primary keyword | Search intent |
|------|-----|-----------------|---------------|
| Homepage | `/` | AI app for Android | Commercial / navigational |
| Models | `/models` | multi-model AI app | Informational |
| OpenRouter | `/openrouter` | OpenRouter Android app | Commercial |
| Providers | `/providers` | bring your own API key AI app | Commercial |
| Web Search | `/web-search` | AI app with web search | Informational |
| Deep Research | `/deep-research` | AI research assistant | Informational |
| Documents | `/documents` | chat with PDF Android | Informational |
| Imagine | `/imagine` | AI image generator Android | Commercial |
| Privacy | `/privacy` | privacy-focused AI app | Informational |
| Local Models | `/local-models` | local LLM Android | Informational (secondary) |
| Custom Endpoints | `/custom-endpoints` | Ollama Android client | Informational |
| Open Source | `/open-source` | open-source AI app Android | Navigational |
| Download | `/download` | download AI app Android | Commercial |
| Alternatives hub | `/alternatives` | ChatGPT alternative for Android | Comparison |
| ChatGPT alt | `/alternatives/chatgpt` | ChatGPT alternative for Android | Comparison |
| Claude alt | `/alternatives/claude` | Claude alternative for Android | Comparison |
| Perplexity alt | `/alternatives/perplexity` | Perplexity alternative Android | Comparison |
| Poe alt | `/alternatives/poe` | Poe alternative | Comparison |
| Gemini alt | `/alternatives/gemini` | Gemini alternative app | Comparison |
| Guides hub | `/guides` | AI app guides Android | Informational |
| BYOK guide | `/guides/use-your-own-api-key` | bring your own API key AI app | Informational |
| Ollama guide | `/guides/connect-ollama` | use Ollama on Android | Informational |
| PDF guide | `/guides/chat-with-pdf` | chat with PDF Android | Informational |

---

## Primary & secondary keywords per page

Metadata lives in `src/lib/seo.ts`. Summary:

### Homepage (`/`)
- **Primary:** AI app for Android
- **Secondary:** AI chatbot app, open-source AI app, multi-model AI app, privacy-focused AI app, AI chat without account, best AI app for Android
- **Intent:** Users comparing Android AI apps; brand discovery

### Models (`/models`)
- **Primary:** multi-model AI app
- **Secondary:** switch between AI models, universal AI chat app, GPT Claude Gemini in one app
- **Intent:** Users wanting one app for many models

### OpenRouter (`/openrouter`)
- **Primary:** OpenRouter Android app
- **Secondary:** OpenRouter client, BYOK OpenRouter app, open-source OpenRouter client
- **Intent:** OpenRouter users seeking a mobile client

### Providers (`/providers`)
- **Primary:** bring your own API key AI app
- **Secondary:** BYOK AI app, pay-as-you-go AI chat app, use OpenAI/Claude/Gemini API on Android
- **Intent:** Cost-conscious power users avoiding subscriptions

### Web Search (`/web-search`)
- **Primary:** AI app with web search
- **Secondary:** AI chatbot with internet access, AI assistant with sources
- **Intent:** Users needing current information in chat

### Deep Research (`/deep-research`)
- **Primary:** AI research assistant
- **Secondary:** deep research AI app, AI search with citations
- **Intent:** Multi-step research workflows

### Documents (`/documents`)
- **Primary:** chat with PDF Android
- **Secondary:** AI PDF chat app, AI document assistant, AI chatbot with attachments
- **Intent:** Document Q&A and analysis

### Imagine (`/imagine`)
- **Primary:** AI image generator Android
- **Secondary:** text to image AI app, OpenRouter image generation app
- **Intent:** Mobile image generation with BYOK

### Privacy (`/privacy`)
- **Primary:** privacy-focused AI app
- **Secondary:** AI app without account, AI chats stored locally, private AI chat app
- **Intent:** Privacy-conscious users

### Local Models (`/local-models`)
- **Primary:** local LLM Android
- **Secondary:** offline AI chat Android, GGUF Android app, on-device AI app
- **Intent:** Offline/local inference (secondary to platform positioning)

### Custom Endpoints (`/custom-endpoints`)
- **Primary:** Ollama Android client
- **Secondary:** LM Studio Android client, self-hosted AI Android client
- **Intent:** Self-hosted / LAN inference from phone

### Open Source (`/open-source`)
- **Primary:** open-source AI app Android
- **Secondary:** FOSS AI app Android, GitHub AI chat app
- **Intent:** FOSS community, contributors

### Download (`/download`)
- **Primary:** download AI app Android
- **Secondary:** EchoFlow APK, free AI chat app Android
- **Intent:** Install-ready users

### Alternatives (hub + 5 pages)
- **Primary:** ChatGPT alternative for Android (hub); per-competitor primaries on child pages
- **Intent:** Comparison shopping; users evaluating switches

### Guides (hub + 3 pages)
- **Primary:** Task-specific long-tail (BYOK setup, Ollama, PDF)
- **Intent:** How-to / problem-solving

---

## Competing pages (observed SERP landscape — strategic hypotheses)

*Volume claims require Search Console or a keyword tool. These are qualitative SERP observations, not verified volumes.*

| Query cluster | Typical rankers | EchoFlow angle |
|---------------|-----------------|----------------|
| AI app for Android | ChatGPT, Gemini, Microsoft Copilot, Perplexity apps | Open-source, BYOK, multi-model, no account |
| OpenRouter Android | Web clients, niche GitHub projects | Native Android, full feature set |
| ChatGPT alternative Android | Other chat apps, “best of” listicles | Fair comparison pages, BYOK + local storage |
| local LLM Android | LM Studio mobile, MLC, dedicated offline apps | Broader platform; local as one feature |
| Perplexity alternative | Perplexity, Arc Search, listicles | Multi-model + BYOK + open source |
| chat with PDF Android | Adobe, ChatGPT, dedicated PDF apps | Multi-model + local history + open source |

---

## New pages created (23 total routes)

1. `/` (improved)
2. `/models`
3. `/openrouter`
4. `/providers`
5. `/web-search`
6. `/deep-research`
7. `/documents`
8. `/imagine`
9. `/privacy`
10. `/local-models`
11. `/custom-endpoints`
12. `/open-source`
13. `/download`
14. `/alternatives`
15. `/alternatives/chatgpt`
16. `/alternatives/claude`
17. `/alternatives/perplexity`
18. `/alternatives/poe`
19. `/alternatives/gemini`
20. `/guides`
21. `/guides/use-your-own-api-key`
22. `/guides/connect-ollama`
23. `/guides/chat-with-pdf`

---

## Existing pages improved

- **Homepage:** Repositioned as broad Android AI platform; feature link grid; demo video section; updated title/meta
- **Hero:** Multi-model + open-source messaging (not OpenRouter-only)
- **Models section:** Links to feature pages
- **Nav/Footer:** Full internal link architecture

---

## Technical SEO implemented

| Item | Status |
|------|--------|
| Unique `<title>` per page | ✅ `src/lib/seo.ts` |
| Meta descriptions | ✅ |
| Canonical URLs | ✅ `Base.astro` |
| Open Graph (absolute URLs) | ✅ |
| Twitter Cards | ✅ |
| `robots.txt` | ✅ `public/robots.txt` |
| `sitemap.xml` | ✅ `public/sitemap.xml` |
| JSON-LD SoftwareApplication | ✅ sitewide |
| JSON-LD WebSite | ✅ sitewide |
| JSON-LD BreadcrumbList | ✅ content pages |
| JSON-LD FAQPage | ✅ pages with FAQs |
| Internal linking | ✅ nav, footer, related links, in-content links |
| App demo video | ✅ homepage + content pages (`VideoShowcase`) |

---

## Search Console opportunities

*No GSC data was available in this environment.* Recommended after deploy:

1. Submit `https://echoflow.app/sitemap.xml`
2. Inspect homepage + `/openrouter`, `/models`, `/alternatives/chatgpt` for indexing
3. Monitor queries containing “android”, “openrouter”, “alternative”, “BYOK”
4. Track impressions for branded “EchoFlow” vs non-branded feature terms

---

## Keywords requiring validation

Use GSC + keyword tool before prioritising content expansion:

- Exact volume for “best AI app for Android” (high competition)
- “OpenRouter Android app” (niche but high intent)
- “BYOK AI app” vs “bring your own API key AI app”
- Long-tail: “AI app without monthly subscription”
- Local LLM terms (keep on `/local-models` only)

---

## Recommended future content

### Comparisons (only if differentiation is clear)
- vs. mainstream: Copilot Android, Gemini app (deeper dive)
- vs. open-source: other FOSS Android AI clients (factual only)
- vs. local-LLM apps: when users search “offline AI” but need cloud too

### Guides
- Firecrawl / Exa search setup
- Deep Research walkthrough with screenshots
- Imagine model selection
- Material You / themes tutorial
- Migrating chat history (if export exists)

### Listicles (off-site or blog if added later)
- “Best OpenRouter clients for Android” (include EchoFlow honestly among others)

---

## Differentiation summary

| Segment | Mainstream apps (ChatGPT, Gemini) | OpenRouter web clients | Local-LLM apps | EchoFlow |
|---------|-----------------------------------|------------------------|----------------|----------|
| Model choice | Single vendor | Many models | On-device only | Many cloud + optional local |
| Pricing | Subscription | API/BYOK | Free offline | Free app + BYOK |
| Privacy story | Cloud account | Varies | Strong offline | Local chats; clear cloud caveat |
| Android UX | Official apps | Browser | Often technical | Native Material 3 |
| Research/docs/images | Partial | Rare in clients | Rare | Integrated platform |
| Open source | No | Sometimes | Often | Yes |

EchoFlow competes as a **broad, capable Android AI platform**—not as “the offline LLM app” or “the OpenRouter webpage.”

---

## Video assets

- `/brand/app-demo.webm` and `.mp4` — embedded in homepage and content pages via `VideoShowcase`
- Hero autoplays muted demo on homepage
- Feature screenshots used as `og:image` per page where relevant
