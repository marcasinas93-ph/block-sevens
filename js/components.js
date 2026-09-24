async function loadComponent(containerId, componentPath) {

    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    try {

        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(
                `Unable to load ${componentPath}: ${response.status}`
            );
        }

        container.innerHTML = await response.text();

    }

    catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="container py-3 text-danger">
                Unable to load this section.
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    await Promise.all([

        loadComponent(
            "navbar-container",
            "./components/navbar.html"
        ),


        loadComponent(
            "footer-container",
            "./components/footer.html"
        )

    ]);

});

console.log("COMPONENTS LOADED");