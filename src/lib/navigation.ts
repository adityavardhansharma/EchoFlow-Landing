export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const featureLinks: NavLink[] = [
  { label: 'Models', href: '/models', description: 'Multi-model AI in one app' },
  { label: 'OpenRouter', href: '/openrouter', description: 'OpenRouter Android client' },
  { label: 'Providers & BYOK', href: '/providers', description: 'Bring your own API key' },
  { label: 'Web Search', href: '/web-search', description: 'AI chat with internet access' },
  { label: 'Deep Research', href: '/deep-research', description: 'Multi-step AI research' },
  { label: 'Documents', href: '/documents', description: 'Chat with PDFs and files' },
  { label: 'Imagine', href: '/imagine', description: 'AI image generation' },
  { label: 'Privacy', href: '/privacy', description: 'Local storage, no account' },
  { label: 'Local Models', href: '/local-models', description: 'On-device LLMs' },
  { label: 'Custom Endpoints', href: '/custom-endpoints', description: 'Ollama, LM Studio & more' },
  { label: 'Open Source', href: '/open-source', description: 'GitHub & contributions' },
];

export const resourceLinks: NavLink[] = [
  { label: 'Download', href: '/download' },
  { label: 'Guides', href: '/guides' },
  { label: 'Alternatives', href: '/alternatives' },
];

export const alternativeLinks: NavLink[] = [
  { label: 'ChatGPT alternative', href: '/alternatives/chatgpt' },
  { label: 'Claude alternative', href: '/alternatives/claude' },
  { label: 'Perplexity alternative', href: '/alternatives/perplexity' },
  { label: 'Poe alternative', href: '/alternatives/poe' },
  { label: 'Gemini alternative', href: '/alternatives/gemini' },
];

export const guideLinks: NavLink[] = [
  { label: 'Use your own API key', href: '/guides/use-your-own-api-key' },
  { label: 'Connect Ollama', href: '/guides/connect-ollama' },
  { label: 'Chat with PDFs', href: '/guides/chat-with-pdf' },
];
