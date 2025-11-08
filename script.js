// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Add shadow to navbar on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fetch GitHub Projects
async function fetchGitHubProjects() {
    const username = 'Samuel-T-W';
    const projectsGrid = document.getElementById('projectsGrid');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        
        // Clear loading message
        projectsGrid.innerHTML = '';
        
        if (repos.length === 0) {
            projectsGrid.innerHTML = `
                <div class="project-card">
                    <div class="project-header">
                        <h3 class="project-title">No projects yet</h3>
                    </div>
                    <p class="project-description">
                        Check back soon for exciting projects!
                    </p>
                </div>
            `;
            return;
        }
        
        // Filter out forked repositories and display only original projects
        const originalRepos = repos.filter(repo => !repo.fork);
        const displayRepos = originalRepos.length > 0 ? originalRepos.slice(0, 6) : repos.slice(0, 6);
        
        displayRepos.forEach((repo, index) => {
            const projectCard = createProjectCard(repo, index);
            projectsGrid.appendChild(projectCard);
        });
        
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        projectsGrid.innerHTML = `
            <div class="project-card">
                <div class="project-header">
                    <h3 class="project-title">Projects</h3>
                </div>
                <p class="project-description">
                    View my projects on <a href="https://github.com/${username}" target="_blank" style="color: var(--primary-color);">GitHub</a>
                </p>
            </div>
        `;
    }
}

// Create project card element
function createProjectCard(repo, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Language color mapping
    const languageColors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'Java': '#b07219',
        'TypeScript': '#2b7489',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'C++': '#f34b7d',
        'C': '#555555',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Ruby': '#701516',
        'PHP': '#4F5D95'
    };
    
    const languageColor = languageColors[repo.language] || '#cccccc';
    
    card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${repo.name}</h3>
        </div>
        ${repo.language ? `
        <div class="project-language">
            <span class="language-dot" style="background-color: ${languageColor};"></span>
            <span>${repo.language}</span>
        </div>
        ` : ''}
        <p class="project-description">
            ${repo.description || 'No description available'}
        </p>
        <div class="project-stats">
            <div class="project-stat">
                <span>⭐</span>
                <span>${repo.stargazers_count}</span>
            </div>
            <div class="project-stat">
                <span>🔀</span>
                <span>${repo.forks_count}</span>
            </div>
        </div>
        <a href="${repo.html_url}" target="_blank" class="project-link">
            View Project →
        </a>
    `;
    
    return card;
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items and cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .interest-card');
    animatedElements.forEach(el => observer.observe(el));
    
    // Load GitHub projects
    fetchGitHubProjects();
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
});
