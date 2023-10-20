 document.getElementById('responsive').addEventListener('click', function() {
            var menu = document.getElementById('menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none'; // Hide the menu
            } else {
                menu.style.display = 'block'; // Show the menu
            }
        });
