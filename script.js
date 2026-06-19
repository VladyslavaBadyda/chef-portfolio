const galleryItems = document.querySelectorAll(".gallery-item");
const galleryImages = document.querySelectorAll(".gallery-item img");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");

if (lightbox && lightboxImage && lightboxClose) {
    galleryItems.forEach((item) => {
        const image = item.querySelector("img");

        item.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("is-open");
            document.body.classList.add("no-scroll");
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");

        galleryItems.forEach((item) => {
            if (category === "all" || item.dataset.category === category) {
                item.classList.remove("is-hidden");
            } else {
                item.classList.add("is-hidden");
            }
        });
    });
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const item = question.closest(".faq-item");
        item.classList.toggle("is-open");
    });
});

const telegramForm = document.querySelector(".telegram-form");

if (telegramForm) {
    telegramForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(telegramForm);

        const name = formData.get("name") || "Не вказано";
        const place = formData.get("place") || "Не вказано";
        const city = formData.get("city") || "Не вказано";
        const service = formData.get("service") || "Не вказано";
        const details = formData.get("details") || "Не вказано";

        const message = `
Вітаю! Хочу обговорити співпрацю.

Ім’я: ${name}
Заклад: ${place}
Місто: ${city}
Послуга: ${service}
Деталі: ${details}
`;

        const telegramLink = `https://t.me/vasyliy_chef?text=${encodeURIComponent(message)}`;

        window.open(telegramLink, "_blank");
    });
}