(function() {
    function initSwitcher() {
        const logoSwitches = document.querySelector('.logo-switches');
        if (!logoSwitches) {
            console.log("Searching for logo-switches...");
            return setTimeout(initSwitcher, 100); // Retry if not loaded
        }

        // Prevent duplicate buttons
        if (document.getElementById('theme-toggle-green')) return;

        const toggleBtn = document.createElement('button');
        toggleBtn.id = "theme-toggle-green";
        toggleBtn.innerHTML = "🌿";
        toggleBtn.style.cssText = "background:none;border:none;padding:0;margin:0 10px;font-size:1.5em;cursor:pointer;outline:none;";
        
        // Initial state
        if (localStorage.getItem("color-theme") === "teal") {
            document.body.classList.add("theme-teal");
        }

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("theme-teal");
            const isTeal = document.body.classList.contains("theme-teal");
            localStorage.setItem("color-theme", isTeal ? "teal" : "olive");
            console.log("Color theme switched to:", isTeal ? "teal" : "olive");
        });

        // Add it to the switches container
        logoSwitches.appendChild(toggleBtn);
        console.log("Theme switcher initialized.");
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSwitcher);
    } else {
        initSwitcher();
    }
})();
