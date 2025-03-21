document.addEventListener("DOMContentLoaded", function() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && window.location.pathname !== "/login.html" && window.location.pathname !== "/register.html") {
        window.location.href = "login.html";
    }
});

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}

// Contact Form Submission
if (document.getElementById("contactForm")) {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("formMessage").innerHTML = '<div class="alert alert-success">Thank you for reaching out! We will get back to you soon.</div>';
        document.getElementById("contactForm").reset();
    });
}

// Login Form Submission
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        localStorage.setItem("isLoggedIn", "true");
        document.getElementById("loginMessage").innerHTML = '<div class="alert alert-success">Login successful! Redirecting...</div>';
        setTimeout(() => { window.location.href = "index.html"; }, 2000);
    });
}

// Register Form Submission
if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        if (password !== confirmPassword) {
            document.getElementById("registerMessage").innerHTML = '<div class="alert alert-danger">Passwords do not match!</div>';
            return;
        }
        localStorage.setItem("isLoggedIn", "true");
        document.getElementById("registerMessage").innerHTML = '<div class="alert alert-success">Registration successful! Redirecting...</div>';
        setTimeout(() => { window.location.href = "index.html"; }, 2000);
    });
}

function handleLogin() {
    localStorage.setItem("isLoggingIn", "true");
    window.location.href = "login.html";
}


// ==============================
// Dark Mode Toggle Functionality
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode is saved in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        if (darkModeToggle) darkModeToggle.checked = true;
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function () {
            if (this.checked) {
                body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});

// ==============================
// Navbar Active Link Indicator
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});

// ==============================
// Smooth Scroll Effect
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ==============================
// Form Validation (Contact Form)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            formMessage.innerHTML =
                '<div class="alert alert-success">Thank you for reaching out! We will get back to you soon.</div>';
            contactForm.reset();
        });
    }
});

// ==============================
// Course Enrollment System (Using Local Storage)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const enrollButtons = document.querySelectorAll(".enroll-btn");
    const enrolledCoursesList = document.getElementById("enrolledCourses");

    enrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            const courseName = this.getAttribute("data-course");
            let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

            if (!enrolledCourses.includes(courseName)) {
                enrolledCourses.push(courseName);
                localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
                alert(`You have successfully enrolled in ${courseName}!`);
            } else {
                alert(`You are already enrolled in ${courseName}!`);
            }

            displayEnrolledCourses();
        });
    });

    function displayEnrolledCourses() {
        if (!enrolledCoursesList) return;
        enrolledCoursesList.innerHTML = "";
        let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

        enrolledCourses.forEach(course => {
            let li = document.createElement("li");
            li.textContent = course;
            enrolledCoursesList.appendChild(li);
        });
    }

    displayEnrolledCourses();
});

// ==============================
// Gallery Lightbox Feature
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            document.body.appendChild(lightbox);

            const img = document.createElement("img");
            img.src = this.src;
            lightbox.appendChild(img);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });
});

// ==============================
// Testimonial Slider (Auto-Scroll)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const totalTestimonials = testimonials.length;

    function showTestimonial() {
        testimonials.forEach(testimonial => {
            testimonial.style.display = "none";
        });

        testimonials[index].style.display = "block";
        index = (index + 1) % totalTestimonials;
    }

    if (totalTestimonials > 0) {
        showTestimonial();
        setInterval(showTestimonial, 5000);
    }
});

// ==============================
// Theme Switching Feature
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("themeSelector");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (themeSelector) themeSelector.value = savedTheme;
    }

    // Change theme on selection
    if (themeSelector) {
        themeSelector.addEventListener("change", function () {
            body.classList.remove("light", "dark", "blue");
            body.classList.add(this.value);
            localStorage.setItem("theme", this.value);
        });
    }
});

// ==============================
// Navbar Active Link Indicator
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});

// ==============================
// Smooth Scroll Effect
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ==============================
// Form Validation (Login & Register)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const formMessage = document.getElementById("formMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "" || password === "") {
                showAlert("Please enter both email and password!", "danger");
            } else {
                showAlert("Login successful! Redirecting...", "success");
                setTimeout(() => {
                    window.location.href = "Home.html";
                }, 1500);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (!name || !email || !password || !confirmPassword) {
                showAlert("All fields are required!", "danger");
            } else if (password !== confirmPassword) {
                showAlert("Passwords do not match!", "danger");
            } else {
                showAlert("Registration successful! Redirecting to login...", "success");
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1500);
            }
        });
    }

    function showAlert(message, type) {
        if (formMessage) {
            formMessage.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
            setTimeout(() => {
                formMessage.innerHTML = "";
            }, 3000);
        }
    }
});

// ==============================
// Course Enrollment System (Using Local Storage)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const enrollButtons = document.querySelectorAll(".enroll-btn");
    const enrolledCoursesList = document.getElementById("enrolledCourses");

    enrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            const courseName = this.getAttribute("data-course");
            let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

            if (!enrolledCourses.includes(courseName)) {
                enrolledCourses.push(courseName);
                localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
                alert(`You have successfully enrolled in ${courseName}!`);
            } else {
                alert(`You are already enrolled in ${courseName}!`);
            }

            displayEnrolledCourses();
        });
    });

    function displayEnrolledCourses() {
        if (!enrolledCoursesList) return;
        enrolledCoursesList.innerHTML = "";
        let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

        enrolledCourses.forEach(course => {
            let li = document.createElement("li");
            li.textContent = course;
            enrolledCoursesList.appendChild(li);
        });
    }

    displayEnrolledCourses();
});

// ==============================
// Gallery Lightbox Feature
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            document.body.appendChild(lightbox);

            const img = document.createElement("img");
            img.src = this.src;
            lightbox.appendChild(img);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });
});

// ==============================
// Testimonial Slider (Auto-Scroll)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const totalTestimonials = testimonials.length;

    function showTestimonial() {
        testimonials.forEach(testimonial => {
            testimonial.style.display = "none";
        });

        testimonials[index].style.display = "block";
        index = (index + 1) % totalTestimonials;
    }

    if (totalTestimonials > 0) {
        showTestimonial();
        setInterval(showTestimonial, 5000);
    }
});

// ==============================
// Theme Switching Feature (Fully Working)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("themeSelector");
    const body = document.body;

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light"; // Default to light theme
    body.classList.add(savedTheme);
    
    if (themeSelector) {
        themeSelector.value = savedTheme; // Set dropdown value

        themeSelector.addEventListener("change", function () {
            body.classList.remove("light", "dark", "blue");
            body.classList.add(this.value);
            localStorage.setItem("theme", this.value);
        });
    }
});

// ==============================
// Theme Switching Feature (Works Across All Pages)
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("themeSelector");
    const body = document.body;

    // Load the saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem("theme") || "light"; // Default to light theme
    body.classList.add(savedTheme);

    if (themeSelector) {
        themeSelector.value = savedTheme; // Set dropdown value

        themeSelector.addEventListener("change", function () {
            const selectedTheme = this.value;
            body.classList.remove("light", "dark", "blue");
            body.classList.add(selectedTheme);
            localStorage.setItem("theme", selectedTheme);

            // Sync theme across all open pages
            syncThemeAcrossPages(selectedTheme);
        });
    }
});

// ==============================
// Sync Theme Across Open Pages
// ==============================
function syncThemeAcrossPages(theme) {
    localStorage.setItem("theme", theme);
    document.body.classList.remove("light", "dark", "blue");
    document.body.classList.add(theme);
}

// Apply theme on page load for all pages
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
});
