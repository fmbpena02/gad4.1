document.addEventListener("DOMContentLoaded", function (event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener("click", () => {
                // show navbar
                nav.classList.toggle("show_nav");
                // change icon
                toggle.classList.toggle("bx-x");
                // add padding to body
                bodypd.classList.toggle("body-pd");
                // add padding to header
                headerpd.classList.toggle("body-pd");

                // Save state to localStorage
                localStorage.setItem(
                    "navbar",
                    nav.classList.contains("show_nav") ? "shown" : "hidden"
                );
            });

            // On page load, check localStorage and set navbar state
            const navbarState = localStorage.getItem("navbar");
            if (navbarState === "shown") {
                nav.classList.add("show_nav");
                toggle.classList.add("bx-x");
                bodypd.classList.add("body-pd");
                headerpd.classList.add("body-pd");
            }
        }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header");

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
        if (linkColor) {
            linkColor.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
        }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
});
