export const SITE_URL = 'https://echoflow.app';
export const SITE_NAME = 'EchoFlow';
export const DEFAULT_OG_IMAGE = '/brand/shot-home-ocean.jpg';
export const GITHUB_REPO = 'https://github.com/adityavardhansharma/EchoFlow';

export const TAGLINE =
  'An open-source, privacy-first AI workspace for Android: chat with any model using your own API keys or fully on-device, search the web free with no key, dictate messages, organise chats into Projects, keep generated Artifacts, run Deep Research, and stream from Ollama on your own network.';

export interface PageSEO {
  path: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: 'informational' | 'commercial' | 'navigational' | 'comparison';
  ogImage?: string;
}

export const pages: Record<string, PageSEO> = {
  home: {
    path: '/',
    title: 'EchoFlow — Open-Source AI App for Android | Multi-Model AI Chatbot',
    description:
      'EchoFlow is a free, open-source AI app for Android. Chat with GPT, Claude, Gemini or on-device models, search the web free with no API key, dictate messages, organise chats into Projects, and keep everything on your phone — no account required.',
    primaryKeyword: 'AI app for Android',
    secondaryKeywords: [
      'AI chatbot app',
      'open-source AI app',
      'multi-model AI app',
      'privacy-focused AI app',
      'AI chat without account',
      'best AI app for Android',
    ],
    intent: 'commercial',
  },
  models: {
    path: '/models',
    title: 'Multi-Model AI App for Android — Switch Between GPT, Claude & Gemini | EchoFlow',
    description:
      'Use multiple AI models in one Android app. Switch between GPT, Claude, Gemini, DeepSeek and more mid-conversation without changing apps. Bring your own API key or use OpenRouter.',
    primaryKeyword: 'multi-model AI app',
    secondaryKeywords: [
      'AI app with multiple models',
      'switch between AI models',
      'universal AI chat app',
      'GPT Claude Gemini in one app',
      'compare AI models in one app',
    ],
    intent: 'informational',
    ogImage: '/brand/shot-cloud-models.jpg',
  },
  openrouter: {
    path: '/openrouter',
    title: 'OpenRouter Android App — Open-Source Client with BYOK | EchoFlow',
    description:
      'EchoFlow is an open-source OpenRouter client for Android. Bring your own API key, chat with any OpenRouter model, generate images, and keep conversations on your device. Not affiliated with OpenRouter.',
    primaryKeyword: 'OpenRouter Android app',
    secondaryKeywords: [
      'OpenRouter client',
      'best OpenRouter client for Android',
      'OpenRouter chat app',
      'BYOK OpenRouter app',
      'open-source OpenRouter client',
      'use OpenRouter on Android',
    ],
    intent: 'commercial',
    ogImage: '/brand/shot-cloud-models.jpg',
  },
  providers: {
    path: '/providers',
    title: 'Use Your Own API Key — OpenAI, Claude, Gemini & DeepSeek on Android | EchoFlow',
    description:
      'Bring your own API key (BYOK) to EchoFlow on Android. Connect OpenAI, Anthropic Claude, Google Gemini, DeepSeek and custom OpenAI-compatible endpoints — pay-as-you-go, no monthly subscription.',
    primaryKeyword: 'bring your own API key AI app',
    secondaryKeywords: [
      'BYOK AI app',
      'AI chat app with API key',
      'use OpenAI API on Android',
      'use Claude API on Android',
      'pay-as-you-go AI chat app',
      'OpenAI-compatible Android app',
    ],
    intent: 'commercial',
    ogImage: '/brand/shot-settings.jpg',
  },
  webSearch: {
    path: '/web-search',
    title: 'AI Search App for Android — Chat with Live Web Search | EchoFlow',
    description:
      'Give any AI model live internet access on Android. EchoFlow connects chat to web search via Exa, Parallel, Firecrawl or OpenRouter — for up-to-date answers with source links when providers return them.',
    primaryKeyword: 'AI app with web search',
    secondaryKeywords: [
      'AI search app',
      'AI chatbot with internet access',
      'AI chat with live web search',
      'AI assistant with sources',
      'AI app that searches the web',
    ],
    intent: 'informational',
    ogImage: '/brand/shot-web-search.jpg',
  },
  deepResearch: {
    path: '/deep-research',
    title: 'AI Research Assistant for Android — Deep Research with Citations | EchoFlow',
    description:
      'Run multi-step AI research on Android. EchoFlow investigates the web across several steps and writes structured reports with citations from supported providers — in the background while you use your phone.',
    primaryKeyword: 'AI research assistant',
    secondaryKeywords: [
      'deep research AI app',
      'AI research app for Android',
      'AI search with citations',
      'AI app for online research',
      'multi-model AI search app',
    ],
    intent: 'informational',
    ogImage: '/brand/shot-deep-research.jpg',
  },
  documents: {
    path: '/documents',
    title: 'Chat with PDF & Documents on Android — AI Document Analysis | EchoFlow',
    description:
      'Upload PDFs, Word files, CSVs and more to EchoFlow on Android. Ask questions, summarise content, extract data and compare documents with your choice of AI model.',
    primaryKeyword: 'chat with PDF Android',
    secondaryKeywords: [
      'AI PDF chat app',
      'AI document assistant',
      'chat with documents',
      'PDF summariser Android',
      'AI chatbot with attachments',
      'AI spreadsheet analysis',
    ],
    intent: 'informational',
    ogImage: '/brand/shot-plus-menu.jpg',
  },
  imagine: {
    path: '/imagine',
    title: 'AI Image Generator for Android — Multi-Model Text-to-Image | EchoFlow',
    description:
      'Generate AI images on Android with EchoFlow Imagine. Use your OpenRouter API key to access multiple image models in a dedicated creative workspace — separate from chat, same app.',
    primaryKeyword: 'AI image generator Android',
    secondaryKeywords: [
      'AI image generation app',
      'text to image AI app',
      'multi-model AI image generator',
      'OpenRouter image generation app',
      'AI image generator using API key',
    ],
    intent: 'commercial',
    ogImage: '/brand/shot-home-lavender.jpg',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy-First AI Chat — Local Storage, No Account | EchoFlow',
    description:
      'EchoFlow stores chats locally on your Android device. No account, no sign-up, open-source code you can inspect. Cloud models still process prompts you send — we explain the data flow clearly.',
    primaryKeyword: 'privacy-focused AI app',
    secondaryKeywords: [
      'private AI chat app',
      'AI app without account',
      'AI chats stored locally',
      'open-source private AI app',
      'AI chat without sign-up',
      'local-first AI chat app',
    ],
    intent: 'informational',
    ogImage: '/brand/shot-sidebar.jpg',
  },
  localModels: {
    path: '/local-models',
    title: 'Local LLM on Android — Offline On-Device AI Chat | EchoFlow',
    description:
      'Run supported GGUF models locally on Android with EchoFlow. Chat offline with Gemma, Qwen, DeepSeek and more — one feature in a broader multi-model AI app, not the whole product.',
    primaryKeyword: 'local LLM Android',
    secondaryKeywords: [
      'offline AI chat Android',
      'on-device AI app',
      'run LLM on Android',
      'GGUF Android app',
      'llama.cpp Android',
      'local AI assistant',
    ],
    intent: 'informational',
    ogImage: '/brand/shot-local-models.jpg',
  },
  customEndpoints: {
    path: '/custom-endpoints',
    title: 'Ollama & LM Studio on Android — Custom AI Endpoints | EchoFlow',
    description:
      'Connect EchoFlow on Android to Ollama, LM Studio or any OpenAI-compatible endpoint on your network. Chat with self-hosted models from your phone with clear setup and security guidance.',
    primaryKeyword: 'Ollama Android client',
    secondaryKeywords: [
      'LM Studio Android client',
      'self-hosted AI Android client',
      'custom LLM endpoint Android',
      'OpenAI-compatible Android client',
      'home server AI client Android',
    ],
    intent: 'informational',
    ogImage: '/brand/shot-settings.jpg',
  },
  openSource: {
    path: '/open-source',
    title: 'Open-Source AI Chatbot for Android — FOSS on GitHub | EchoFlow',
    description:
      'EchoFlow is free, open-source software on GitHub. Inspect the code, contribute features, track releases and build a privacy-friendly AI assistant you control.',
    primaryKeyword: 'open-source AI app Android',
    secondaryKeywords: [
      'open-source AI chatbot Android',
      'FOSS AI app Android',
      'GitHub AI chat app',
      'open-source multi-model AI chat',
      'customisable AI chat app',
    ],
    intent: 'navigational',
    ogImage: '/brand/echoflow-mark.png',
  },
  download: {
    path: '/download',
    title: 'Download EchoFlow for Android — Free APK | Open-Source AI App',
    description:
      'Download EchoFlow free for Android. Install the latest APK from GitHub releases. Requires Android 8+; sideload or use your preferred installer. No Google Play account needed.',
    primaryKeyword: 'download AI app Android',
    secondaryKeywords: [
      'EchoFlow APK',
      'free AI chat app Android',
      'open-source AI app download',
      'AI app without login',
    ],
    intent: 'commercial',
  },
  alternatives: {
    path: '/alternatives',
    title: 'AI App Alternatives — Honest Comparisons for Android | EchoFlow',
    description:
      'Compare EchoFlow with ChatGPT, Claude, Gemini, Perplexity, Poe and other AI apps. Fair, factual differences in model access, privacy, API keys, research tools and pricing.',
    primaryKeyword: 'ChatGPT alternative for Android',
    secondaryKeywords: [
      'open-source ChatGPT alternative',
      'private ChatGPT alternative',
      'Perplexity alternative',
      'Poe alternative',
      'multi-model alternative',
    ],
    intent: 'comparison',
  },
  altChatgpt: {
    path: '/alternatives/chatgpt',
    title: 'ChatGPT Alternative for Android — Open-Source, Multi-Model, BYOK | EchoFlow',
    description:
      'Looking for a ChatGPT alternative on Android? EchoFlow offers multiple models, your own API keys, local chat storage and no account — an open-source option for users who want more control.',
    primaryKeyword: 'ChatGPT alternative for Android',
    secondaryKeywords: [
      'open-source ChatGPT alternative',
      'private ChatGPT alternative',
      'ChatGPT alternative without login',
      'ChatGPT alternative with multiple models',
      'ChatGPT alternative with API key',
    ],
    intent: 'comparison',
  },
  altClaude: {
    path: '/alternatives/claude',
    title: 'Claude Alternative for Android — Multi-Model AI with BYOK | EchoFlow',
    description:
      'EchoFlow lets you use Claude alongside GPT, Gemini and other models on Android with your own Anthropic or OpenRouter API key. Compare features, privacy and pricing fairly.',
    primaryKeyword: 'Claude alternative for Android',
    secondaryKeywords: [
      'use Claude API on Android',
      'multi-model alternative to Claude',
      'BYOK Claude Android',
    ],
    intent: 'comparison',
  },
  altPerplexity: {
    path: '/alternatives/perplexity',
    title: 'Perplexity Alternative for Android — AI Search & Research | EchoFlow',
    description:
      'EchoFlow combines web search, Deep Research and multi-model chat on Android. A Perplexity alternative for users who want bring-your-own-key pricing and local chat history.',
    primaryKeyword: 'Perplexity alternative Android',
    secondaryKeywords: [
      'AI search engine app',
      'AI answer engine Android',
      'open-source AI search app',
      'AI research assistant',
    ],
    intent: 'comparison',
    ogImage: '/brand/shot-deep-research.jpg',
  },
  altPoe: {
    path: '/alternatives/poe',
    title: 'Poe Alternative — Open-Source Multi-Model AI Chat for Android | EchoFlow',
    description:
      'EchoFlow is an open-source alternative to Poe for Android. Access multiple AI models with your own API keys, no Poe subscription, and chats stored on your device.',
    primaryKeyword: 'Poe alternative',
    secondaryKeywords: [
      'open-source Poe alternative',
      'multi-model alternative to Poe',
      'chat with different AI models',
    ],
    intent: 'comparison',
  },
  altGemini: {
    path: '/alternatives/gemini',
    title: 'Gemini Alternative App for Android — Multi-Model AI Client | EchoFlow',
    description:
      'Use Gemini alongside other models on Android with EchoFlow. Bring your Google AI or OpenRouter key, switch models per task, and keep conversations locally.',
    primaryKeyword: 'Gemini alternative app',
    secondaryKeywords: [
      'use Gemini API on Android',
      'multi-model AI app',
      'Google AI alternative Android',
    ],
    intent: 'comparison',
  },
  guides: {
    path: '/guides',
    title: 'EchoFlow Guides — Setup, API Keys & AI Workflows on Android',
    description:
      'Step-by-step guides for EchoFlow on Android: bring your own API key, connect Ollama, chat with PDFs, use OpenRouter, and get more from multi-model AI.',
    primaryKeyword: 'AI app guides Android',
    secondaryKeywords: [
      'how to use API key AI app',
      'Ollama Android setup',
      'chat with PDF guide',
    ],
    intent: 'informational',
  },
  guideApiKey: {
    path: '/guides/use-your-own-api-key',
    title: 'How to Use Your Own API Key in EchoFlow on Android',
    description:
      'Set up bring your own API key (BYOK) in EchoFlow: OpenRouter, OpenAI, Anthropic Claude, Google Gemini and custom endpoints. Pay only for what you use.',
    primaryKeyword: 'bring your own API key AI app',
    secondaryKeywords: [
      'BYOK AI app setup',
      'OpenRouter key Android',
      'AI app without monthly subscription',
    ],
    intent: 'informational',
  },
  guideOllama: {
    path: '/guides/connect-ollama',
    title: 'How to Connect Ollama to EchoFlow on Android',
    description:
      'Use Ollama from your Android phone with EchoFlow. Network setup, security considerations and how to chat with self-hosted models on your home server or LAN.',
    primaryKeyword: 'use Ollama on Android',
    secondaryKeywords: [
      'Ollama Android client',
      'connect Android to Ollama',
      'self-hosted AI Android',
    ],
    intent: 'informational',
  },
  guidePdf: {
    path: '/guides/chat-with-pdf',
    title: 'How to Chat with PDFs on Android Using EchoFlow',
    description:
      'Upload a PDF to EchoFlow, pick a model, and ask questions. Summarise chapters, extract facts, compare documents and study with AI on your Android device.',
    primaryKeyword: 'chat with PDF Android',
    secondaryKeywords: [
      'ask questions about a PDF',
      'AI PDF reader Android',
      'AI document analysis app',
    ],
    intent: 'informational',
  },
};

export function absoluteUrl(path: string): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

export function absoluteImage(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function softwareAppJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Android',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: TAGLINE,
    downloadUrl: `${GITHUB_REPO}/releases`,
    softwareHelp: absoluteUrl('/guides'),
    url: SITE_URL,
    image: absoluteImage(DEFAULT_OG_IMAGE),
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    isAccessibleForFree: true,
    license: 'https://opensource.org/licenses/MIT',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: TAGLINE,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}
