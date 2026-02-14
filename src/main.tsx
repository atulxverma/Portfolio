import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

import { CustomCursor } from "./components/ui/CustomCursor";
import { ParticlesBg } from "./components/ui/ParticlesBg";


// Mouse glow tracking
document.addEventListener("mousemove", (e) => {

  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);

});


createRoot(document.getElementById("root")!).render(

  <StrictMode>

    <ParticlesBg />

    <CustomCursor />

    <App />

  </StrictMode>

);
