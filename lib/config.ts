import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
  {
    label: "I am planning to take PTO from Dec 25 till Jan 5th. Please block off my calendar and notify my team.",
    prompt: "Please block off my calendar for Dec 25 till Jan 5th PTO and notify my team",
    icon: "globe",
  },
  {
    label: "What is our sick leave policy?",
    prompt: "What is our sick leave policy?",
    icon: "book-clock",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "Ignition HR Copilot ✨";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
