// ===============================
// Data (from your spreadsheet & logic)
// ===============================

const PACKAGES = [
  {
    id: "basic-website",
    name: "Basic Website",
    basePrice: 750,
    duration: "5–7 days",
    description:
      "A clean, functional Google Site with essential business information and a simple contact option.",
    brandingDescription:
      "Great for new or budget-conscious businesses who need a simple, clear online presence.",
    revisions:
      "Includes light revisions focused on text tweaks, image swaps, and minor layout changes.",
    support: "30 days of launch support (up to ~1 hour of small content tweaks)."
  },
  {
    id: "polished-brand-site",
    name: "Polished Brand Site",
    basePrice: 2250,
    duration: "2–3 weeks",
    description:
      "A refined, on-brand Google Site with multiple pages and stronger storytelling.",
    brandingDescription:
      "For businesses ready to look more established online with a cohesive, branded experience.",
    revisions:
      "Includes 2 rounds of consolidated revisions (layout, content tweaks, imagery).",
    support:
      "30 days of launch support (up to ~2 hours of tweaks) plus basic guidance on using the site."
  },
  {
    id: "professional-website",
    name: "Professional Website",
    basePrice: 4000,
    duration: "3–4 weeks",
    description:
      "A higher-touch, more custom build for businesses that rely on their website for operations.",
    brandingDescription:
      "For growing businesses that need bookings, inquiries, or applications to flow through the site.",
    revisions:
      "Includes up to 3 rounds of revisions total (design, content, and core functionality).",
    support:
      "45 days of launch support plus a follow-up call and basic analytics review."
  },
  {
    id: "business-systems-strategy-session",
    name: "Business Systems & Strategy Session",
    basePrice: 500,
    duration:
      "Up to 3 hours included; additional time billed separately with approval.",
    description:
      "A focused strategy intensive to untangle backend systems, workflows, and website needs.",
    brandingDescription:
      "Best for clients who need clarity and systems before investing in a full build or rebuild.",
    revisions:
      "Session fee covers strategy time; implementation or follow-up work is scoped separately.",
    support:
      "Support is typically tied to implementation services booked after the session."
  }
];

const ADDONS = [
  {
    id: "brand-kit",
    name: "Brand Kit",
    standalonePrice: 500,
    description:
      "Logo suite, brand colors & typography, and a simple brand persona.",
    notes:
      "Foundational brand kit with logos, colors, fonts, and a basic brand personality overview.",
    bundlePriceByPackage: {
      "basic-website": 425,
      "polished-brand-site": 400,
      "professional-website": 375
    },
    support:
      "Includes 1 round of minor tweaks within 14 days of delivery (colors, small logo adjustments)."
  },
  {
    id: "client-staff-portal-setup",
    name: "Client/Staff Portal Setup",
    standalonePrice: 400,
    description:
      "Strategy + planning, hidden private section(s) on the site, permissions setup, and a quick guide.",
    notes:
      "Private portal for staff, clients, or volunteers with key links, docs, and tools all in one place.",
    bundlePriceByPackage: {
      "basic-website": 400,
      "polished-brand-site": 450,
      "professional-website": 600
    },
    support:
      "Includes 1 round of consolidated revisions within 30 days (structure, access tweaks, etc.)."
  },
  {
    id: "advanced-workflow-automation",
    name: "Advanced Workflow Automation",
    standalonePrice: 600,
    description:
      "Implements or refines a workflow connecting tools (forms, email, tasks) so things happen automatically.",
    notes:
      "Great for onboarding, intake, follow-up sequences, or internal processes once a workflow map is approved.",
    bundlePriceByPackage: {
      "basic-website": 510,
      "polished-brand-site": 480,
      "professional-website": 450
    },
    support:
      "Includes 30 days of support after go-live and one round of tweaks to the automation logic."
  },
  {
    id: "inventory-product-listing-medium",
    name: "Inventory/Product Listing (Medium)",
    standalonePrice: 400,
    description:
      "Product or service listing for up to ~25 items with fields like name, price, and basic details.",
    notes:
      "Client provides product details and images. Great for menus, small shops, or service menus.",
    bundlePriceByPackage: {
      "basic-website": 340,
      "polished-brand-site": 320,
      "professional-website": 300
    },
    support:
      "Includes 1 round of consolidated revisions (copy, layout tweaks, minor styling)."
  },
  {
    id: "payment-link-integration",
    name: "Payment Link Integration",
    standalonePrice: 350,
    description:
      "Connects your payment provider and adds simple payment links or buttons into the site.",
    notes:
      "Great for deposits, simple service payments, or donation links. Requires a payment account.",
    bundlePriceByPackage: {
      "basic-website": 320,
      "polished-brand-site": 310,
      "professional-website": 300
    },
    support:
      "Includes 30 days of support for payment-link issues (link not working, wrong amount, etc.)."
  },
  {
    id: "custom-data-visualization",
    name: "Custom Data Visualization",
    standalonePrice: 550,
    description:
      "Connects a Google Sheet to your site and displays real-time charts, tables, or trackers.",
    notes:
      "One main dashboard with up to 3–4 visual elements. Additional dashboards quoted separately.",
    bundlePriceByPackage: {
      "basic-website": 475,
      "polished-brand-site": 450,
      "professional-website": 425
    },
    support:
      "Includes 30 days of support for embed/chart issues and 1 round of minor label/color/layout tweaks."
  }
];

// Business goal dropdown options
const BUSINESS_GOALS = [
  {
    id: "look-established",
    label: "Look more established and professional online"
  },
  {
    id: "more-inquiries",
    label: "Increase qualified inquiries / bookings"
  },
  {
    id: "clarify-offer",
    label: "Clarify services so people instantly understand what they do"
  },
  {
    id: "sell-offers",
    label: "Showcase and sell offers/products more clearly"
  },
  {
    id: "streamline-intake",
    label: "Streamline client intake & systems"
  },
  {
    id: "info-hub",
    label: "Create a simple, findable information hub"
  },
  {
    id: "other",
    label: "Other – we’ll define this together"
  }
];

// Core questions (CHECKLIST_MAIN style)
const MAIN_QUESTIONS = [
  {
    category: "Business & Audience",
    question: "Who is your primary audience, and what do they usually come to you for?"
  },
  {
    category: "Business & Audience",
    question: "What feels most important to highlight on your homepage?"
  },
  {
    category: "Domain & Tech",
    question: "Do you already have a domain? If yes, where is it registered?"
  },
  {
    category: "Domain & Tech",
    question: "Do you need me to set up/connect a custom domain for you?"
  },
  {
    category: "Pages & Structure",
    question:
      "List the pages you want on the site (Home, About, Services, Contact, etc.)."
  },
  {
    category: "Forms & Interactions",
    question:
      "What forms do you need (contact, booking request, application, etc.), and where should submissions go?"
  },
  {
    category: "Business Info",
    question: "Business tagline or elevator pitch."
  },
  {
    category: "Business Info",
    question: "Core services list (top 3–5)."
  },
  {
    category: "Copy & Content",
    question:
      "For pages where you provide copy, give main headline, key paragraph, and call to action."
  },
  {
    category: "Assets",
    question: "Logo files (where are they stored?) and any existing brand guidelines."
  },
  {
    category: "Assets",
    question: "Brand colors & fonts (or do you need a Brand Kit?)."
  },
  {
    category: "Systems & Integrations",
    question: "Booking tools (Calendly, Acuity, etc.) + login info if needed."
  },
  {
    category: "Systems & Integrations",
    question: "Payment tools (Stripe, Square, PayPal, etc.)."
  },
  {
    category: "Systems & Integrations",
    question:
      "Any existing automations (Zapier/Make) or tools we must connect?"
  }
];

// Extra questions by add-on (CHECKLIST_ADDONS style)
const ADDON_QUESTIONS = {
  "Client/Staff Portal Setup": [
    "Who is the portal for (staff, clients, volunteers)?",
    "What needs to live inside it (schedules, docs, links, training)?",
    "Where are these currently stored (Drive/Dropbox/etc.)?",
    "Who should have access (list emails)?"
  ],
  "Advanced Workflow Automation": [
    "What main process are we automating (example: new client intake)?",
    "What form/tool starts the process (name + link)?",
    "What should happen after a new submission (emails, tasks, events)?",
    "What tools do you already use for tasks and communication?"
  ],
  "Inventory/Product Listing (Medium)": [
    "Do you have a list of up to ~25 products/services ready? Where is it stored?",
    "Do you have product photos ready? Where are they?",
    "What fields should show on each product (name, scent, size, price, etc.)?"
  ],
  "Payment Link Integration": [
    "Which payment provider will you use (Stripe/Square/PayPal)?",
    "Do you already have an account (email)?",
    "What exact payment amounts and descriptions do you need (services, deposits, etc.)?"
  ],
  "Custom Data Visualization": [
    "What data do you want publicly shown (fundraiser progress, signups, etc.)?",
    "Where does that data live now (sheet name/link)?",
    "How often is this data updated and who is responsible?"
  ],
  "Brand Kit": [
    "Do you have any existing logo/sketches or inspiration you’d like me to see?",
    "Are there colors you’re drawn to or colors you absolutely do not want?",
    "If your brand was a person, how would you describe their personality?"
  ]
};

// ===============================
// Helpers
// ===============================

function formatCurrency(value) {
  if (isNaN(value)) return "$0";
  const rounded = Math.round(value);
  return `$${rounded.toLocaleString()}`;
}

function getSelectedPackageId() {
  const select = document.getElementById("package-select");
  return select ? select.value || null : null;
}

function findPackageById(id) {
  return PACKAGES.find(p => p.id === id) || null;
}

function findAddonById(id) {
  return ADDONS.find(a => a.id === id) || null;
}

function getSelectedAddons() {
  const container = document.getElementById("addon-checkboxes");
  if (!container) return [];
  const checks = container.querySelectorAll("input[type='checkbox']:checked");
  const ids = Array.from(checks).map(c => c.value);
  return ids
    .map(id => findAddonById(id))
    .filter(Boolean);
}

function getAddonUnitPrice(addon, packageId) {
  if (packageId && addon.bundlePriceByPackage[packageId] != null) {
    return addon.bundlePriceByPackage[packageId];
  }
  return addon.standalonePrice;
}

let currentInvoice = null;

// ===============================
// UI Initialization
// ===============================

function initPackagesSelect() {
  const select = document.getElementById("package-select");
  if (!select) return;

  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a package…";
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  PACKAGES.forEach(pkg => {
    const opt = document.createElement("option");
    opt.value = pkg.id;
    opt.textContent = `${pkg.name} (${formatCurrency(pkg.basePrice)})`;
    select.appendChild(opt);
  });
}

function initAddonsCheckboxes() {
  const container = document.getElementById("addon-checkboxes");
  if (!container) return;
  container.innerHTML = "";

  ADDONS.forEach(addon => {
    const row = document.createElement("label");
    row.className = "checkbox-row";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = addon.id;

    const labelWrap = document.createElement("div");
    labelWrap.className = "checkbox-label";

    const nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = addon.name;

    const metaSpan = document.createElement("span");
    metaSpan.className = "meta";
    metaSpan.textContent = addon.description;

    labelWrap.appendChild(nameSpan);
    labelWrap.appendChild(metaSpan);

    row.appendChild(input);
    row.appendChild(labelWrap);
    container.appendChild(row);
  });
}

function initBusinessGoalSelect() {
  const select = document.getElementById("business-goal");
  if (!select) return;

  select.innerHTML = "";
  BUSINESS_GOALS.forEach((goal, index) => {
    const opt = document.createElement("option");
    opt.value = goal.id;
    opt.textContent = goal.label;
    if (index === 0) opt.selected = true;
    select.appendChild(opt);
  });
}

function initDefaultDate() {
  const input = document.getElementById("start-date");
  if (!input) return;
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  input.value = `${y}-${m}-${d}`;
}

// ===============================
// Navigation
// ===============================

function setActivePage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => {
    if (p.id === pageId) p.classList.add("active");
    else p.classList.remove("active");
  });

  const navButtons = document.querySelectorAll(".nav-link");
  navButtons.forEach(btn => {
    const target = btn.getAttribute("data-page");
    if (target === pageId) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

function initNav() {
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-page]");
    if (!btn) return;
    const pageId = btn.getAttribute("data-page");
    if (!pageId) return;
    setActivePage(pageId);
  });
}

// ===============================
// Dynamic Summary & Questions
// ===============================

function updatePackageDescription() {
  const pkgId = getSelectedPackageId();
  const descEl = document.getElementById("package-description");
  if (!descEl) return;

  if (!pkgId) {
    descEl.textContent = "Select a package to see details and pricing.";
    return;
  }

  const pkg = findPackageById(pkgId);
  if (!pkg) return;

  descEl.innerHTML = `
    <strong>${pkg.name}</strong> · ${formatCurrency(pkg.basePrice)}<br />
    <span>${pkg.description}</span><br />
    <span><strong>Timeline:</strong> ${pkg.duration}</span><br />
    <span><strong>Support:</strong> ${pkg.support}</span>
  `;
}

function updatePriceSummary() {
  const container = document.getElementById("price-lines");
  const subtotalEl = document.getElementById("subtotal-amount");
  const discountEl = document.getElementById("discount-amount");
  const totalEl = document.getElementById("total-amount");
  const depositEl = document.getElementById("summary-deposit");

  if (!container || !subtotalEl || !discountEl || !totalEl || !depositEl)
    return;

  const pkgId = getSelectedPackageId();
  const pkg = pkgId ? findPackageById(pkgId) : null;
  const selectedAddons = getSelectedAddons();
  const discountInput = document.getElementById("discount");
  const discountValue = discountInput ? Number(discountInput.value) || 0 : 0;

  container.innerHTML = "";

  let subtotal = 0;

  if (pkg) {
    const line = document.createElement("div");
    line.className = "price-line";
    line.innerHTML = `
      <span class="price-line-label">${pkg.name}</span>
      <span class="price-line-amount">${formatCurrency(pkg.basePrice)}</span>
    `;
    container.appendChild(line);
    subtotal += pkg.basePrice;
  }

  selectedAddons.forEach(addon => {
    const unitPrice = getAddonUnitPrice(addon, pkgId);
    const line = document.createElement("div");
    line.className = "price-line";
    line.innerHTML = `
      <span class="price-line-label">${addon.name}</span>
      <span class="price-line-amount">${formatCurrency(unitPrice)}</span>
    `;
    container.appendChild(line);
    subtotal += unitPrice;
  });

  if (!pkg && selectedAddons.length === 0) {
    container.textContent =
      "Select a package and add-ons to see an itemized quote.";
  }

  const total = Math.max(subtotal - discountValue, 0);
  const deposit = Math.round(total * 0.5);

  subtotalEl.textContent = formatCurrency(subtotal);
  discountEl.textContent = `-${formatCurrency(discountValue)}`;
  totalEl.textContent = formatCurrency(total);
  depositEl.textContent = formatCurrency(deposit);
}

function updateQuestions() {
  const listEl = document.getElementById("question-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  let currentCategory = null;
  MAIN_QUESTIONS.forEach(q => {
    if (q.category !== currentCategory) {
      currentCategory = q.category;
      const title = document.createElement("div");
      title.className = "question-group-title";
      title.textContent = currentCategory;
      listEl.appendChild(title);
    }

    const item = document.createElement("div");
    item.className = "question-item";
    item.innerHTML = `
      <div class="question-text">${q.question}</div>
      <textarea rows="2" placeholder="Notes / client answer"></textarea>
    `;
    listEl.appendChild(item);
  });

  const selectedAddons = getSelectedAddons();
  selectedAddons.forEach(addon => {
    const qs = ADDON_QUESTIONS[addon.name];
    if (!qs || !qs.length) return;

    const title = document.createElement("div");
    title.className = "question-group-title";
    title.textContent = `${addon.name} – Additional questions`;
    listEl.appendChild(title);

    qs.forEach(question => {
      const item = document.createElement("div");
      item.className = "question-item";
      item.innerHTML = `
        <div class="question-text">${question}</div>
        <textarea rows="2" placeholder="Notes / client answer"></textarea>
      `;
      listEl.appendChild(item);
    });
  });
}

// ===============================
// Invoice Generation
// ===============================

function buildInvoiceDataFromForm() {
  const clientName = document.getElementById("client-name").value.trim();
  const clientEmail = document.getElementById("client-email").value.trim();
  const businessName = document.getElementById("business-name").value.trim();
  const businessIndustry =
    document.getElementById("business-industry").value.trim();
  const businessLocation =
    document.getElementById("business-location").value.trim();
  const currentWebsite =
    document.getElementById("current-website").value.trim();
  const businessSummary =
    document.getElementById("business-summary").value.trim();

  const businessGoalId = document.getElementById("business-goal").value;
  const goalDef = BUSINESS_GOALS.find(g => g.id === businessGoalId);
  const businessGoalLabel = goalDef ? goalDef.label : "";
  const businessGoalNotes =
    document.getElementById("business-goal-notes").value.trim();

  const projectName = document.getElementById("project-name").value.trim();
  const dateVal = document.getElementById("start-date").value;
  const notes = document.getElementById("notes").value.trim();
  const pkgId = getSelectedPackageId();
  const pkg = pkgId ? findPackageById(pkgId) : null;
  const addons = getSelectedAddons();
  const discountValue = Number(
    document.getElementById("discount").value || "0"
  );

  if (!clientName || !clientEmail || !pkg) {
    alert(
      "Please make sure you have entered Client name, Client email, and selected a package."
    );
    return null;
  }

  const lineItems = [];
  let subtotal = 0;

  lineItems.push({
    label: pkg.name,
    amount: pkg.basePrice
  });
  subtotal += pkg.basePrice;

  addons.forEach(addon => {
    const amount = getAddonUnitPrice(addon, pkgId);
    lineItems.push({
      label: addon.name,
      amount
    });
    subtotal += amount;
  });

  const discount = Math.max(discountValue, 0);
  const total = Math.max(subtotal - discount, 0);
  const deposit = Math.round(total * 0.5);
  const remaining = total - deposit;

  let prettyDate = "";
  if (dateVal) {
    const d = new Date(dateVal);
    if (!isNaN(d)) {
      prettyDate = d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
  } else {
    const d = new Date();
    prettyDate = d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  return {
    clientName,
    clientEmail,
    businessName,
    businessIndustry,
    businessLocation,
    currentWebsite,
    businessSummary,
    businessGoalLabel,
    businessGoalNotes,
    projectName,
    invoiceDate: prettyDate,
    notes,
    package: pkg,
    addons,
    lineItems,
    subtotal,
    discount,
    total,
    deposit,
    remaining
  };
}

function renderInvoice(invoice) {
  if (!invoice) return;

  const emptyCard = document.getElementById("invoice-empty");
  const contentWrap = document.getElementById("invoice-content");

  emptyCard.classList.add("hidden");
  contentWrap.classList.remove("hidden");

  document.getElementById("inv-client-name").textContent =
    invoice.clientName;
  document.getElementById("inv-business-name").textContent =
    invoice.businessName || "—";
  document.getElementById("inv-email").textContent = invoice.clientEmail;
  document.getElementById("inv-project-name").textContent =
    invoice.projectName || invoice.package.name;
  document.getElementById("inv-goal").textContent =
    invoice.businessGoalLabel || "—";
  document.getElementById("inv-date").textContent = invoice.invoiceDate;

  const tbody = document.getElementById("invoice-line-items");
  tbody.innerHTML = "";
  invoice.lineItems.forEach(item => {
    const tr = document.createElement("tr");
    const tdLabel = document.createElement("td");
    const tdAmount = document.createElement("td");
    tdLabel.textContent = item.label;
    tdAmount.textContent = formatCurrency(item.amount);
    tdAmount.className = "num";
    tr.appendChild(tdLabel);
    tr.appendChild(tdAmount);
    tbody.appendChild(tr);
  });

  document.getElementById("inv-subtotal").textContent = formatCurrency(
    invoice.subtotal
  );
  document.getElementById("inv-discount").textContent =
    "-" + formatCurrency(invoice.discount);
  document.getElementById("inv-total").textContent = formatCurrency(
    invoice.total
  );
  document.getElementById("inv-deposit").textContent = formatCurrency(
    invoice.deposit
  );
  document.getElementById("inv-remaining").textContent = formatCurrency(
    invoice.remaining
  );

  const emailToInput = document.getElementById("invoice-email-to");
  if (emailToInput && !emailToInput.value) {
    emailToInput.value = invoice.clientEmail;
  }
}

// ===============================
// Email body
// ===============================

function buildInvoiceEmailBody(invoice) {
  const lines = [];

  lines.push(`Hi ${invoice.clientName},`);
  lines.push("");
  lines.push("Here’s the summary of your project and website investment:");
  lines.push("");

  if (invoice.businessName || invoice.businessGoalLabel) {
    lines.push("Business context:");
    if (invoice.businessName) {
      lines.push(`• Business: ${invoice.businessName}`);
    }
    if (invoice.businessGoalLabel) {
      lines.push(`• Main objective: ${invoice.businessGoalLabel}`);
    }
    if (invoice.businessLocation) {
      lines.push(`• Location: ${invoice.businessLocation}`);
    }
    lines.push("");
  }

  lines.push("Scope & pricing:");
  invoice.lineItems.forEach(item => {
    lines.push(`• ${item.label}: ${formatCurrency(item.amount)}`);
  });
  lines.push("");
  lines.push(`Subtotal: ${formatCurrency(invoice.subtotal)}`);
  lines.push(`Discount: -${formatCurrency(invoice.discount)}`);
  lines.push(`Total: ${formatCurrency(invoice.total)}`);
  lines.push("");
  lines.push(`50% deposit due: ${formatCurrency(invoice.deposit)}`);
  lines.push(
    `Remaining 50%: ${formatCurrency(
      invoice.remaining
    )} (typically due after launch or as agreed).`
  );
  lines.push("");

  if (invoice.businessGoalNotes || invoice.businessSummary) {
    lines.push("Notes from our call:");
    if (invoice.businessSummary) {
      lines.push(`• About the business: ${invoice.businessSummary}`);
    }
    if (invoice.businessGoalNotes) {
      lines.push(`• What success looks like: ${invoice.businessGoalNotes}`);
    }
    lines.push("");
  }

  if (invoice.notes) {
    lines.push("Project-specific notes:");
    lines.push(invoice.notes);
    lines.push("");
  }

  lines.push(
    "If everything looks good, I’ll send over the next steps and timeline."
  );
  lines.push("");
  lines.push("Thank you!");
  return lines.join("\n");
}

function initSendInvoiceButton() {
  const btn = document.getElementById("send-invoice-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (!currentInvoice) {
      alert("Please generate an invoice on the On-Boarding page first.");
      setActivePage("onboarding");
      return;
    }

    const toInput = document.getElementById("invoice-email-to");
    const bccInput = document.getElementById("invoice-email-bcc");
    const to = toInput.value.trim();
    const bcc = bccInput.value.trim();

    if (!to) {
      alert('Please enter the client email in the "To" field.');
      return;
    }

    const subjectParts = ["Invoice"];
    if (currentInvoice.projectName) subjectParts.push(currentInvoice.projectName);
    else subjectParts.push(currentInvoice.package.name);
    const subject = subjectParts.join(" – ");

    const body = buildInvoiceEmailBody(currentInvoice);

    let href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    if (bcc) {
      href += `&bcc=${encodeURIComponent(bcc)}`;
    }

    window.location.href = href;
  });
}

// ===============================
// Event wiring
// ===============================

function initOnboardingEvents() {
  const pkgSelect = document.getElementById("package-select");
  const addonsContainer = document.getElementById("addon-checkboxes");
  const discountInput = document.getElementById("discount");
  const resetBtn = document.getElementById("reset-form");
  const generateBtn = document.getElementById("generate-invoice");

  if (pkgSelect) {
    pkgSelect.addEventListener("change", () => {
      updatePackageDescription();
      updatePriceSummary();
      updateQuestions();
    });
  }

  if (addonsContainer) {
    addonsContainer.addEventListener("change", () => {
      updatePriceSummary();
      updateQuestions();
    });
  }

  if (discountInput) {
    discountInput.addEventListener("input", () => {
      updatePriceSummary();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const form = document.getElementById("onboarding-form");
      if (form) form.reset();
      initDefaultDate();
      initBusinessGoalSelect();
      updatePackageDescription();
      updatePriceSummary();
      updateQuestions();
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      const invoiceData = buildInvoiceDataFromForm();
      if (!invoiceData) return;
      currentInvoice = invoiceData;
      renderInvoice(invoiceData);
      setActivePage("invoice");
    });
  }
}

// ===============================
// Boot
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initPackagesSelect();
  initAddonsCheckboxes();
  initBusinessGoalSelect();
  initDefaultDate();
  updatePackageDescription();
  updatePriceSummary();
  updateQuestions();
  initOnboardingEvents();
  initSendInvoiceButton();
});
