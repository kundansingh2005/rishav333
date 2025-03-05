document.addEventListener("DOMContentLoaded", function () {
    // Sidebar navigation functionality
    const menuItems = document.querySelectorAll(".sidebar ul li a");
    const pages = document.querySelectorAll(".page");

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Remove active class from all sections
            pages.forEach(page => page.classList.remove("active"));

            // Get the target page ID from the onclick function
            const targetPage = this.getAttribute("onclick").match(/'([^']+)'/)[1];

            // Show the selected page with a fade-in effect
            const selectedPage = document.getElementById(targetPage);
            selectedPage.classList.add("active");
            selectedPage.style.opacity = 0;
            setTimeout(() => {
                selectedPage.style.opacity = 1;
            }, 100);
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Show the default active page
    document.getElementById("parkVehicle").classList.add("active");
});
