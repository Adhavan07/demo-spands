document.getElementById('about-btn').addEventListener('click', function () {
    const menu = document.getElementById('about-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Close menu when clicking outside
document.addEventListener('click', function (e) {
    const menu = document.getElementById('about-menu');
    const button = document.getElementById('about-btn');
    if (!menu.contains(e.target) && e.target !== button) {
        menu.style.display = 'none';
    }
});


// Toggle submenu on click for submenu items
submenuItems.forEach(item => {
    const link = item.querySelector('.submenu-link');
    const submenu = item.querySelector('.submenu');

    if (submenu) {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Close other open submenus
            submenuItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

            // Toggle current submenu
            item.classList.toggle('active');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('#typed', {
        strings: ['Spandson Horizon Engineering Private Limited'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.backgroundColor =
            window.scrollY > 50 ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.8)';
    });
});
