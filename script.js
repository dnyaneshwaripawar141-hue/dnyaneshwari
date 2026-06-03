document.addEventListener("DOMContentLoaded", () => {

    const learnMoreBtn = document.getElementById("learnMoreBtn");

    learnMoreBtn.addEventListener("click", () => {
        document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" });
    });

    console.log("Heritage International School Website Loaded");
});
