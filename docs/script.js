// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'scaleIn 0.5s ease-out forwards';
            }
        }
    });
}, observerOptions);

// Animate project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Animate skill categories
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(20px)';
    category.style.transition = 'all 0.5s ease';
    category.style.animationDelay = `${index * 0.1}s`;
    observer.observe(category);
});

// Add hover effect to tech stack tags
const techStackTags = document.querySelectorAll('.tech-stack span');
techStackTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-2px)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add typing effect to hero text
const heroTitle = document.querySelector('.hero-content h1');
const heroSubtitle = document.querySelector('.hero-content h2');
const heroText = heroTitle.textContent;
const subtitleText = heroSubtitle.textContent;

heroTitle.textContent = '';
heroSubtitle.textContent = '';

let i = 0;
let j = 0;

function typeWriterTitle() {
    if (i < heroText.length) {
        heroTitle.textContent += heroText.charAt(i);
        i++;
        setTimeout(typeWriterTitle, 100);
    } else {
        setTimeout(typeWriterSubtitle, 500);
    }
}

function typeWriterSubtitle() {
    if (j < subtitleText.length) {
        heroSubtitle.textContent += subtitleText.charAt(j);
        j++;
        setTimeout(typeWriterSubtitle, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriterTitle, 500);
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
}); 