document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = "none";
            });

            // Show the corresponding tab content
            const tabId = this.getAttribute("href").replace("#", "");
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.style.display = "block";
            }

            // Remove active class from all tabs
            tabs.forEach(tab => {
                tab.classList.remove("active");
            });

            // Add active class to clicked tab
            this.classList.add("active");
        });
    });

    // Show the first tab content by default
    if (tabContents.length > 0) {
        tabContents[0].style.display = "block";
    }
});
