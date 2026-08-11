// Step 1: Wait for the HTML page to load completely before running Javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. Mobile Hamburger Menu
    // ==========================================
    // HTML mein diye gaye IDs aur classes ke hisaab se elements ko select karna
   var hamburgerBtn = document.getElementById('hamburgerBtn');
   var navbar = document.getElementById('navbar');

    // ==========================================
    // 2. Dark / Light Theme Switcher
    // ==========================================
    var themeToggle = document.getElementById('themeToggle'); // id="themeToggle"
    var body = document.body; // Pura <body> element
    
    if (themeToggle) {
        // Check karna ki user ne pehle kaunsa theme save kiya tha (localStorage mein)
        var savedTheme = localStorage.getItem('userTheme');
        
        // Agar pehle se 'dark-mode' save hai, toh body me ye class laga do
        if (savedTheme === 'dark-mode') {
            body.classList.add('dark-mode');
        }

        // Jab user theme toggle button par click kare...
        themeToggle.addEventListener('click', function() {
            // Body me 'dark-mode' class toggle karo (laga hai toh hatao, nahi hai toh lagao)
            body.classList.toggle('dark-mode');
            
            // Ab check karo ki click hone ke baad dark mode laga ya nahi
            if (body.classList.contains('dark-mode')) {
                // Agar laga hai, toh browser memory me save kar lo
                localStorage.setItem('userTheme', 'dark-mode');
            } else {
                // Warna light mode save kar lo
                localStorage.setItem('userTheme', 'light-mode');
            }
        });
    }

    // ==========================================
    // 3. Search Modal Open/Close
    // ==========================================
    var searchBtn = document.getElementById('searchBtn');       // id="searchBtn"
    var searchModal = document.getElementById('searchModal');   // id="searchModal"
    var closeSearch = document.getElementById('closeSearch');   // id="closeSearch"
    var searchInput = document.getElementById('searchInput');   // id="searchInput"
    
    // A. Modal Open Karna
    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Default click action rokna
            searchModal.classList.add('active'); // CSS mein .active class se modal display: flex ban jayega
            
            // Search box me cursor apne aap aa jaye uske liye (optional UX)
            if(searchInput) {
                setTimeout(function() { searchInput.focus(); }, 100);
            }
        });
    }

    // B. Modal Close Karna (X button par click karne par)
    if (closeSearch && searchModal) {
        closeSearch.addEventListener('click', function() {
            searchModal.classList.remove('active'); // .active class hatane se modal hide ho jayega
        });
    }

    // C. Modal Close Karna (Modal ke bahar dark background par click karne par)
    if (searchModal) {
        window.addEventListener('click', function(event) {
            // Agar jaha click kiya wo exact searchModal div hai (na ki uske andar ka safed dabba)
            if (event.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    // ==========================================
    // 4. Highlight Active Nav Link on Scroll
    // ==========================================
    var allNavLinks = document.querySelectorAll('.nav-link');
    var allSections = document.querySelectorAll('section'); // <section> tag waale elements

    // Jab bhi user scroll kare...
    window.addEventListener('scroll', function() {
        var currentScroll = window.scrollY; // Kitna niche scroll hua hai uski value

        // Har section (home, about, services, contact) ko check karo
        allSections.forEach(function(section) {
            // Section screen par kaha se shuru hota hai (-150 px pehle hi highlight start karne ke liye)
            var sectionTop = section.offsetTop - 150; 
            var sectionHeight = section.offsetHeight; // Section kitna lamba (height) hai
            var sectionId = section.getAttribute('id'); // ID kya hai (jaise "home" ya "about")

            // Agar user is waqt is section ke andar scroll kar raha hai
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                
                // Saare links se 'active' class hata do (taaki purana highlight hat jaye)
                allNavLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Jo nav link ka href is section ki id se match karta ho, usko find karo
                var activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
                if (activeLink) {
                    // Us link par 'active' class laga do highlight karne ke liye
                    activeLink.classList.add('active');
                }
            }
        });
    });

});