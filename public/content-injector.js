console.log("🧠 AI CRO Injector Loaded");

// 1. LANDING PAGE INJECTION — Only runs on specific path (e.g., /ai-lander-1)
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("/automation-test")) {
    const landerTarget = document.getElementById("ai-lander-slot");
    if (landerTarget) {
      landerTarget.innerHTML = `
        <section style="padding:2rem;">
          <h1>🧠 AI Generated Offer</h1>
          <p>This page was dynamically injected with AI-powered landing content.</p>
          <a href="#" style="padding:10px 20px;background:#111;color:#fff;display:inline-block;margin-top:10px;">Start Now</a>
        </section>
      `;
    } else {
      console.warn("Landing page div with ID 'ai-lander-slot' not found.");
    }
  }

  // 2. CTA BLOCK INJECTION — On any other page
  const ctaSlot = document.getElementById("ai-cta-slot");
  if (ctaSlot) {
    const landerURL = "https://go.acceldata.io/automation-test"; // 👈 EDIT THIS URL
    ctaSlot.innerHTML = `
      <div style="padding:1rem;border:2px dashed #aaa;margin:2rem 0;">
        <h3>Try Our Smart AI Tool</h3>
        <p>Discover your personalized experience.</p>
        <a href="${landerURL}" style="padding:8px 16px;background:#000;color:#fff;text-decoration:none;">Discover Smarter Solutions</a>
      </div>
    `;
  } else {
    console.warn("CTA div with ID 'ai-cta-slot' not found.");
  }
});