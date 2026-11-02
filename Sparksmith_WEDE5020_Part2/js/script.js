"use strict";

document.documentElement.classList.add("js");

const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuButton && navigation) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    navigation.classList.toggle("is-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
}

const revealTargets = document.querySelectorAll(
  "main section, main .card, main .product-card, main .gallery-card"
);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((target) => {
    target.dataset.reveal = "";
    revealObserver.observe(target);
  });
}

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm instanceof HTMLFormElement) {
  const status = document.querySelector("#form-status");
  const emergencyCheckbox = enquiryForm.querySelector('input[name="emergency"]');
  const urgencyNote = document.querySelector("#urgency-note");
  const preferredDate = enquiryForm.querySelector('input[name="date"]');
  const photoInput = enquiryForm.querySelector('input[name="photo"]');

  if (preferredDate instanceof HTMLInputElement) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
      .toISOString()
      .slice(0, 10);
    preferredDate.min = localToday;
  }

  if (
    emergencyCheckbox instanceof HTMLInputElement &&
    urgencyNote instanceof HTMLElement
  ) {
    emergencyCheckbox.addEventListener("change", () => {
      urgencyNote.textContent = emergencyCheckbox.checked
        ? "Marked urgent. This demo does not send enquiries; contact the business directly for urgent help."
        : "Standard request selected. This demo does not send enquiries.";
    });
  }

  enquiryForm.addEventListener("input", () => {
    if (status instanceof HTMLElement) {
      status.textContent = "";
      status.classList.remove("form-status-success", "form-status-error");
    }
  });

  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      photoInput instanceof HTMLInputElement &&
      photoInput.files &&
      photoInput.files.length > 0 &&
      photoInput.files[0].size > 5 * 1024 * 1024
    ) {
      photoInput.setCustomValidity("Choose an image smaller than 5 MB.");
    } else if (photoInput instanceof HTMLInputElement) {
      photoInput.setCustomValidity("");
    }

    if (!enquiryForm.reportValidity()) {
      if (status instanceof HTMLElement) {
        status.textContent = "Please correct the highlighted fields and try again.";
        status.classList.add("form-status-error");
      }
      return;
    }

    if (status instanceof HTMLElement) {
      status.textContent =
        "Your details passed the browser checks. This academic demo does not send or store enquiries; please use the phone or email details to contact the business.";
      status.classList.remove("form-status-error");
      status.classList.add("form-status-success");
      status.focus();
    }

    enquiryForm.reset();
    if (urgencyNote instanceof HTMLElement) {
      urgencyNote.textContent = "Standard request selected. This demo does not send enquiries.";
    }
  });
}
