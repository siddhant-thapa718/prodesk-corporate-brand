// Step 1: Wait for the HTML page to load completely before running Javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. Mobile Hamburger Menu
    // ==========================================
    var hamburgerBtn = document.getElementById('hamburgerBtn'); 
    var navbar = document.getElementById('navbar');       

    // Ye block delete ho gaya tha!
    if (hamburgerBtn && navbar) {
        hamburgerBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }

    // ==========================================
    // 2. Dark / Light Theme Switcher
    // ==========================================
    var themeToggle = document.getElementById('themeToggle'); 
    var body = document.body; 
    
    if (themeToggle) {
        var savedTheme = localStorage.getItem('userTheme');
        if (savedTheme === 'dark-mode') {
            body.classList.add('dark-mode');
        }

        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('userTheme', 'dark-mode');
            } else {
                localStorage.setItem('userTheme', 'light-mode');
            }
        });
    }

    // ==========================================
    // 3. Search Modal Open/Close
    // ==========================================
    var searchBtn = document.getElementById('searchBtn');       
    var searchModal = document.getElementById('searchModal');   
    var closeSearch = document.getElementById('closeSearch');   
    var searchInput = document.getElementById('searchInput');   
    
    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            searchModal.classList.add('active'); 
            if(searchInput) {
                setTimeout(function() { searchInput.focus(); }, 100);
            }
        });
    }

    if (closeSearch && searchModal) {
        closeSearch.addEventListener('click', function() {
            searchModal.classList.remove('active'); 
        });
    }

    if (searchModal) {
        window.addEventListener('click', function(event) {
            if (event.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    // ==========================================
    // 4. Highlight Active Nav Link on Scroll
    // ==========================================
    var allNavLinks = document.querySelectorAll('.nav-link');
    var allSections = document.querySelectorAll('section'); 

    window.addEventListener('scroll', function() {
        var currentScroll = window.scrollY; 

        allSections.forEach(function(section) {
            var sectionTop = section.offsetTop - 150; 
            var sectionHeight = section.offsetHeight; 
            var sectionId = section.getAttribute('id'); 

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                allNavLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                var activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
});