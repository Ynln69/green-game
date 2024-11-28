document.addEventListener("DOMContentLoaded", () => {
  const initializeMenu = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const overlay = document.querySelector(".mobile-menu-overlay");
    const menuLinks = document.querySelectorAll(".mobile-menu a"); 

    if (burgerMenu && mobileMenu && closeMenu && overlay) {
      // Відкриття меню
      burgerMenu.addEventListener("click", () => {
        mobileMenu.style.left = "0";
        overlay.classList.add("active");
      });

      // Закриття меню через кнопку "Закрити"
      closeMenu.addEventListener("click", () => {
        mobileMenu.style.left = "100%";
        overlay.classList.remove("active");
      });

      // Закриття меню через overlay
      overlay.addEventListener("click", () => {
        mobileMenu.style.left = "100%";
        overlay.classList.remove("active");
      });

      // Закриття меню при натисканні на посилання
      menuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          const targetId = link.getAttribute("href"); // Отримуємо ID секції
          if (targetId.startsWith("#")) {
            e.preventDefault(); // Запобігаємо стандартному переходу
            document
              .querySelector(targetId)
              ?.scrollIntoView({ behavior: "smooth" }); // Плавний скрол до секції
          }
          mobileMenu.style.left = "100%";
          overlay.classList.remove("active");
        });
      });
    }
  };

  initializeMenu();

  const observer = new MutationObserver(() => {
    if (
      document.querySelector(".burger-menu") &&
      document.querySelector(".mobile-menu-overlay")
    ) {
      initializeMenu();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
