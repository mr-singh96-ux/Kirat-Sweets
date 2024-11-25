        // Get the elements
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const menu = document.getElementById('menu');
        const closeBtn = document.getElementById('closeBtn');

        // Toggle the menu visibility when the hamburger icon is clicked
        hamburgerMenu.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click event from propagating to the window
            menu.classList.toggle('show'); // Toggle the menu visibility
            hamburgerMenu.classList.toggle('active'); // Toggle the 'X' icon state
        });

        // Close the menu when the close button (X) is clicked
        closeBtn.addEventListener('click', function(event) {
            menu.classList.remove('show');
            hamburgerMenu.classList.remove('active');
        });

        // Close the menu if clicked outside of the menu or hamburger
        window.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                menu.classList.remove('show');
                hamburgerMenu.classList.remove('active');
            }
        });

        // Prevent clicks inside the menu from closing it
        menu.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the event from propagating to the window click event
        });
        