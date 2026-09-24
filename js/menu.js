document.addEventListener("DOMContentLoaded", () => {

    const categoryCards =
        document.querySelectorAll(".menu-category-card");

    const menuPanels =
        document.querySelectorAll(".menu-panel");

    categoryCards.forEach((card) => {

        card.addEventListener("click", () => {

            const targetId =
                card.dataset.menuTarget;

            const targetPanel =
                document.getElementById(targetId);

            categoryCards.forEach((categoryCard) => {

                categoryCard.classList.remove("active");

                categoryCard.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

            menuPanels.forEach((panel) => {

                panel.classList.remove("active");

            });

            card.classList.add("active");

            card.setAttribute(
                "aria-expanded",
                "true"
            );

            if (targetPanel) {

                targetPanel.classList.add("active");

                targetPanel.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});