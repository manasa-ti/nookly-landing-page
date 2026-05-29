import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  captureAttributionFromCurrentPage,
  startScrollDepthTracking,
  startTimeOnPageTracking,
  trackPageView,
} from "./lib/analytics";

captureAttributionFromCurrentPage();
trackPageView();
startScrollDepthTracking({ thresholds: [25, 50, 75, 90] });
startTimeOnPageTracking();

createRoot(document.getElementById("root")!).render(<App />);
