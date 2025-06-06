import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: import.meta.env.MODE === "production" ? 0.1 : 1.0, // In Entwicklung auf 1.0 setzen", // In Produktion auf 0.1 oder niedriger setzen
  // Session Replay
  replaysSessionSampleRate: 0.1, // 10% der Sessions aufzeichnen
  replaysOnErrorSampleRate: 1.0, // 100% der Sessions mit Fehlern aufzeichnen
  environment: import.meta.env.MODE, // 'development' oder 'production'
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
