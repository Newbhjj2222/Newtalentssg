$(document).ready(function() {
  $('.menu-toggle').on('click', function () {
    $('.nav').toggleClass('showing');
    $('.theme').toggle(); // Toggle visibility of the theme class
  });
});

// JavaScript for sliding advertisements
const theme = document.querySelector(".theme");
const themeModal = document.querySelector(".customize-theme");

const toggleThemeModal = () => {
  themeModal.style.display = (themeModal.style.display === 'grid') ? 'none' : 'grid';
}

theme.addEventListener('click', toggleThemeModal);

window.addEventListener('click', (e) => {
  if (e.target === themeModal) {
    themeModal.style.display = 'none';
  }
});

const fontSizes = document.querySelectorAll('.choose-size span');
const colors = document.querySelectorAll('.choose-color span');
const backgrounds = document.querySelectorAll('.choose-bg div');
const messageContainer = document.createElement("div");
const postsContainer = document.querySelector(".main-content");
const searchInput = document.querySelector(".text-input");
const showAllButton = document.getElementById("show-all");
const notificationBox = document.getElementById("notificationBox");
const notificationCount = document.getElementById("notificationCount");
const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.toggle-sidebar');
const mobileMenu = document.querySelector('.mobile-menu');

// Function to apply font size
function applyFontSize(sizeClass) {
  const fontSizes = {
    'font-size-1': '10px',
    'font-size-2': '13px',
    'font-size-3': '16px',
    'font-size-4': '18px',
    'font-size-5': '19px'
  };
  document.documentElement.style.fontSize = fontSizes[sizeClass] || '16px';
}

// Load saved font size
document.addEventListener('DOMContentLoaded', () => {
  const savedFontSize = localStorage.getItem('selectedFontSize');
  if (savedFontSize) {
    document.querySelector(`.${savedFontSize}`).classList.add('active');
    applyFontSize(savedFontSize);
  }
});

// Handle font size change
fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    fontSizes.forEach(s => s.classList.remove('active'));
    size.classList.add('active');
    const selectedFontSizeClass = size.classList[0];
    applyFontSize(selectedFontSizeClass);
    localStorage.setItem('selectedFontSize', selectedFontSizeClass);
  });
});

// Function to apply color
function applyColor(colorClass) {
  const colors = {
    'color-1': '#008489',
    'color-2': 'hsl(52, 75%, 60%)',
    'color-3': 'hsl(352, 75%, 60%)',
    'color-4': 'hsl(152, 75%, 60%)',
    'color-5': 'hsl(202, 75%, 60%)'
  };
  const primaryColor = colors[colorClass] || '#000';
  document.querySelectorAll('.btn').forEach(button => {
    button.style.backgroundColor = primaryColor;
  });
  document.querySelector('.slider').style.backgroundColor = primaryColor;
  document.querySelector('header').style.backgroundColor = primaryColor;
  document.querySelector('footer').style.backgroundColor = primaryColor;
  document.querySelector('.theme').style.backgroundColor = primaryColor;
  document.querySelector('.quick').style.backgroundColor = primaryColor;
document.querySelector('.screen').style.backgroundColor = primaryColor;
}

// Load saved color
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('selectedColor');
  if (savedColor) {
    document.querySelector(`.${savedColor}`).classList.add('active');
    applyColor(savedColor);
  }
});

// Handle color change
colors.forEach(color => {
  color.addEventListener('click', () => {
    colors.forEach(c => c.classList.remove('active'));
    color.classList.add('active');
    const selectedColorClass = color.classList[0];
    applyColor(selectedColorClass);
    localStorage.setItem('selectedColor', selectedColorClass);
  });
});

// Function to apply background
function applyBackground(bgClass) {
  const backgrounds = {
    'bg-1': 'floralwhite',
    'bg-2': 'linear-gradient(to left, black, #333, black)',
    'bg-3': 'linear-gradient(to right, #333, #777, #333)'
  };
  const primaryBgColor = backgrounds[bgClass] || 'white';
  document.querySelectorAll('.page-wrapper, .post-wrapper, .post, .main-content, .section-topic, .sidebar *').forEach(element => {
    element.style.background = primaryBgColor;
  });
  const textColor = (bgClass === 'bg-2' || bgClass === 'bg-3') ? 'white' : '';
  document.querySelectorAll('body *:not(.logo)').forEach(element => {
    element.style.color = textColor;
  });
}

// Load saved background
document.addEventListener('DOMContentLoaded', () => {
  const savedBg = localStorage.getItem('selectedBackground');
  if (savedBg) {
    document.querySelector(`.${savedBg}`).classList.add('active');
    applyBackground(savedBg);
  }
});

// Handle background change
backgrounds.forEach(bg => {
  bg.addEventListener('click', () => {
    backgrounds.forEach(b => b.classList.remove('active'));
    bg.classList.add('active');
    const selectedBgClass = bg.classList[0];
    applyBackground(selectedBgClass);
    localStorage.setItem('selectedBackground', selectedBgClass);
  });
});

// Toggle sidebar display
toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// Toggle mobile menu display
mobileMenu.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('show');
});



// Toggle notifications
 // Fungura cyangwa uhishe notifications
    function toggleNotifications(event) {
        event.stopPropagation(); // Bituma idahita ifunga ako kanya

        var notificationBox = document.getElementById("notificationBox");
        var notificationCount = document.getElementById("notificationCount");

        // Fungura cyangwa uhishe notification box
        if (notificationBox.style.display === "none" || notificationBox.style.display === "") {
            notificationBox.style.display = "block";

            // Siba badge ya notifications igihe ifunguwe kandi ubike muri localStorage
            notificationCount.style.display = "none";
            localStorage.setItem("notificationCleared", "true");
        } else {
            notificationBox.style.display = "none";
        }
    }

    // Gusubiza agaciro ka badge iyo paji yongeye gufungurwa
    window.onload = function() {
        var notificationCount = document.getElementById("notificationCount");
        // Reba niba notifications zaramaze gusibwa muri localStorage
        if (localStorage.getItem("notificationCleared") === "true") {
            notificationCount.style.display = "none";
        }
    };

    // Ifunga notification box igihe ukanda ahandi hatariho
    document.addEventListener("click", function() {
        document.getElementById("notificationBox").style.display = "none";
    });
// Fata ibintu byose biri muri class ya 'quick'
const quickElements = document.querySelectorAll('.quick');

// Fungura footer
const footer = document.querySelector('footer');

// Fungura observer ikurikirana igihe footer igeze cyangwa ivuye mu ishusho
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Igihe footer igeze mu ishusho, hisha ibintu bya 'quick'
            quickElements.forEach(element => element.style.display = 'none');
        } else {
            // Igihe footer ivuye mu ishusho, garura ibintu bya 'quick'
            quickElements.forEach(element => element.style.display = '');
        }
    });
});

// Tangira gukurikirana footer
observer.observe(footer);


function searchPosts() {
    // Retrieve search term and convert to lowercase
    let searchTerm = document.querySelector('input[name="search-term"]').value.toLowerCase();
    // Get all posts in main-content
    let posts = document.querySelectorAll('.main-content .post');

    posts.forEach(post => {
        // Check if post text includes search term
        if (post.textContent.toLowerCase().includes(searchTerm)) {
            post.style.display = ""; // Show post if match found
        } else {
            post.style.display = "none"; // Hide post if no match
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    video.muted = true; // Gushyiraho "muted" kugira ngo ikine automatic
    video.play();
  });
  
  
  
  // Simulated user role
        function togglePostForm(event) {
    event.stopPropagation(); // Bituma idahita ifunga ako kanya

    var formContainer = document.getElementById("form-container");

    // Fungura cyangwa uhishe form container
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}

// Fungura igihe ukanda kuri button
document.getElementById("create-post").addEventListener("click", togglePostForm);

// Funga igihe ukanda ahandi hose
document.addEventListener("click", function () {
    var formContainer = document.getElementById("form-container");
    formContainer.style.display = "none";
});

// Igihe ukanda kuri container idafunga
document.getElementById("form-container").addEventListener("click", function (event) {
    event.stopPropagation();
});
