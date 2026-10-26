const translations = {
  en: {
    "nav.work": "Work", "nav.services": "Services", "nav.about": "About", "nav.contact": "Contact", "nav.cta": "Discuss a project",
    "hero.availability": "Astana · remote worldwide · taking on new projects",
    "hero.title": "I turn ideas into <span>working</span> digital products.",
    "hero.lead": "I’m Daniyar, a full-stack and AI developer. I build websites, MVPs, Telegram bots, and automation — from scoping to launch.",
    "hero.primary": "Discuss a project", "hero.secondary": "Explore my work", "hero.note": "The initial project breakdown and implementation plan are free.",
    "facts.role": "Experience", "facts.education": "Education", "facts.stack": "Core stack", "facts.languages": "Languages", "facts.format": "How I work", "facts.delivery": "Fixed scope · frequent updates · launch",
    "proof.products": "MVPs, startups, and hackathons", "proof.finalist": "finalist at major hackathons", "proof.vectors": "vectors in medical search", "proof.rooms": "TryHackMe rooms",
    "services.kicker": "what I can build", "services.title": "From a focused landing page to a complete MVP", "services.intro": "I match the solution to the problem and budget. Every project ends with a working version you can launch, test, and extend.",
    "services.web.title": "Websites & web apps", "services.web.copy": "Landing pages, corporate sites, catalogs, dashboards, and internal tools with responsive interfaces.",
    "services.automation.title": "Bots & automation", "services.automation.copy": "Telegram bots, lead and document processing, reporting, and integrations between services.",
    "services.ai.title": "AI & data", "services.ai.copy": "Document search, AI assistants, classification, structured outputs, and ML feature prototypes.",
    "services.mvp.title": "End-to-end MVP", "services.mvp.copy": "A fast first product version: architecture, interface, backend, deployment, and a clear handoff.",
    "work.kicker": "selected work", "work.title": "Real problems, measurable outcomes", "work.intro": "Projects where I owned the technical solution, implementation, or a core part of the product.",
    "work.medical.title": "Search across Kazakhstan clinical protocols", "work.medical.copy": "An AI assistant for semantic search and likely diagnosis assessment across clinical protocols. We built the pipeline from a free-text query to a ranked response.",
    "work.tender.meta": "ForteBank case", "work.tender.title": "Tender analysis agent", "work.tender.copy": "A service that processes PDF and XML documents up to 100 pages, extracts requirements, and returns structured results through five API endpoints.", "work.tender.pages": "pages per document", "work.tender.target": "target review-time reduction",
    "work.multi.title": "Multimodal AI assistant", "work.multi.copy": "A two-stage pipeline accepts a photo and text, classifies the request, calls the right LLM workflow, and validates JSON before returning it to the client.",
    "work.security.title": "Security Lab & CVE Scanner", "work.security.copy": "A home SOC lab built with ELK, Suricata, and pfSense, including custom detection rules, plus a Python tool for finding infrastructure vulnerabilities.",
    "work.view": "View code ↗", "work.private": "Private case",
    "about.kicker": "about", "about.title": "A developer with product thinking and a security background", "about.copy1": "I study at Astana IT University and work at the intersection of full-stack, AI, and cybersecurity. I worked as a Full Stack Engineer at Silence AI and contributed to commercial MVPs and hackathons.", "about.copy2": "I care about more than writing code: I clarify the problem, cut unnecessary scope, and deliver something people can actually use.", "about.cv": "Download CV ↓",
    "about.silence": "Web products, authentication flow, integrations, and collaborative development.", "about.datasaur": "Finalist among 100+ teams with a medical AI assistant.", "about.devibed": "Finalist among 70+ teams.", "about.icpc": "Algorithmic programming and collaborative problem solving.", "about.aitu": "Cybersecurity · hands-on labs, research, and projects.",
    "process.kicker": "how we work", "process.title": "Clear from the first message to launch", "process.one.title": "Break down the problem", "process.one.copy": "You send the idea, requirements, and deadline. I assess scope and risks for free.", "process.two.title": "Define the outcome", "process.two.copy": "We agree on features, price, timeline, and clear completion criteria.", "process.three.title": "Build and demonstrate", "process.three.copy": "You see frequent versions and progress instead of waiting in the dark.", "process.four.title": "Launch", "process.four.copy": "I test, deploy, and hand over the code with a clear explanation of what comes next.",
    "contact.kicker": "contact", "contact.title": "Have a problem or idea? Let’s break it down.", "contact.copy": "Send a short description and deadline. I’ll ask a few focused questions and propose a realistic scope, timeline, and price.", "contact.name": "What should I call you?", "contact.namePlaceholder": "Your name", "contact.type": "What do you need?", "contact.choose": "Choose an option", "contact.site": "Website or web app", "contact.bot": "Telegram bot / automation", "contact.ai": "AI / data", "contact.mvp": "Product MVP", "contact.other": "Something else", "contact.details": "A short project brief", "contact.detailsPlaceholder": "What should work, and by when?", "contact.send": "Copy the brief and open Telegram", "contact.success": "Copied. Paste the message into Telegram — the chat is opening.", "contact.fallback": "Telegram is opening. If copy is blocked, send the brief manually.",
    "footer.copy": "Building useful products from Astana for clients worldwide."
  }
};

const languageButtons = document.querySelectorAll("[data-language]");
const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const briefForm = document.querySelector("#brief-form");
const formStatus = document.querySelector("#form-status");
const urlLanguage = new URLSearchParams(window.location.search).get("lang");
let language = urlLanguage === "en" || urlLanguage === "ru" ? urlLanguage : (localStorage.getItem("portfolio-language") || "ru");

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  localStorage.setItem("portfolio-language", language);
  languageButtons.forEach((button) => button.classList.toggle("language-active", button.dataset.language === language));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (language === "en" && translations.en[element.dataset.i18n]) element.textContent = translations.en[element.dataset.i18n];
    else if (element.dataset.originalText) element.textContent = element.dataset.originalText;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    if (language === "en" && translations.en[element.dataset.i18nHtml]) element.innerHTML = translations.en[element.dataset.i18nHtml];
    else if (element.dataset.originalHtml) element.innerHTML = element.dataset.originalHtml;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    if (language === "en" && translations.en[element.dataset.i18nPlaceholder]) element.placeholder = translations.en[element.dataset.i18nPlaceholder];
    else if (element.dataset.originalPlaceholder) element.placeholder = element.dataset.originalPlaceholder;
  });
}

document.querySelectorAll("[data-i18n]").forEach((element) => { element.dataset.originalText = element.textContent.trim(); });
document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.dataset.originalHtml = element.innerHTML; });
document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.dataset.originalPlaceholder = element.placeholder; });

setLanguage(language);

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.classList.toggle("open", !expanded);
  document.body.classList.toggle("menu-open", !expanded);
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

briefForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(briefForm);
  const message = language === "en"
    ? `Hi Daniyar! My name is ${data.get("name")}\n\nProject type: ${data.get("type")}\n\nBrief: ${data.get("details")}`
    : `Здравствуйте, Данияр! Меня зовут ${data.get("name")}\n\nТип проекта: ${data.get("type")}\n\nЗадача: ${data.get("details")}`;
  try {
    await navigator.clipboard.writeText(message);
    formStatus.textContent = language === "en" ? translations.en["contact.success"] : "Скопировано. Вставьте сообщение в Telegram — чат уже открывается.";
  } catch {
    formStatus.textContent = language === "en" ? translations.en["contact.fallback"] : "Открываю Telegram. Если копирование заблокировано, отправьте описание вручную.";
  }
  window.open("https://t.me/dakonyalovers", "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();
