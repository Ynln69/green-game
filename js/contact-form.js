document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.style.display = "block";
    formMessage.textContent = "Thank you! We will contact you shortly.";

    form.reset();

    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  });
});
