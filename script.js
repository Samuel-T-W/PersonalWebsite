// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Project Icons Mapping - Using Font Awesome icons
const projectIcons = {
    'weather': 'fa-cloud-sun',
    'todo': 'fa-list-check',
    'chat': 'fa-comments',
    'blog': 'fa-blog',
    'portfolio': 'fa-briefcase',
    'ecommerce': 'fa-shopping-cart',
    'game': 'fa-gamepad',
    'music': 'fa-music',
    'video': 'fa-video',
    'social': 'fa-users',
    'calculator': 'fa-calculator',
    'notes': 'fa-note-sticky',
    'calendar': 'fa-calendar',
    'timer': 'fa-stopwatch',
    'quiz': 'fa-question-circle',
    'dashboard': 'fa-chart-line',
    'api': 'fa-server',
    'bot': 'fa-robot',
    'cli': 'fa-terminal',
    'library': 'fa-book',
    'default': 'fa-code'
};

// Language colors for project badges
const languageColors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'Python': '#3572A5',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'C#': '#178600',
    'C': '#555555',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'Swift': '#ffac45',
    'Kotlin': '#F18E33',
    'Dart': '#00B4AB',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#4FC08D',
    'React': '#61DAFB'
};

// Get icon for project based on name or description
function getProjectIcon(name, description) {
    const text = (name + ' ' + (description || '')).toLowerCase();
    
    for (const [keyword, icon] of Object.entries(projectIcons)) {
        if (keyword !== 'default' && text.includes(keyword)) {
            return icon;
        }
    }
    return projectIcons.default;
}

// Fetch GitHub pinned repositories
async function fetchPinnedProjects() {
    const username = 'Samuel-T-W';
    const projectsGrid = document.getElementById('projectsGrid');
    
    try {
        // Fetch user's repositories
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        
        // Filter to get original (non-fork) repositories and sort by stars
        const originalRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);  // Get top 6 projects
        
        if (originalRepos.length === 0) {
            showDefaultProjects(projectsGrid, username);
            return;
        }
        
        // Clear loading message
        projectsGrid.innerHTML = '';
        
        // Create project cards
        originalRepos.forEach((repo, index) => {
            const projectCard = createProjectCard(repo, index);
            projectsGrid.appendChild(projectCard);
        });
        
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        showDefaultProjects(projectsGrid, username);
    }
}

// Create project card element with icons
function createProjectCard(repo, index) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.setAttribute('data-aos', 'fade-up');
    col.setAttribute('data-aos-delay', (index * 100).toString());
    
    const icon = getProjectIcon(repo.name, repo.description);
    const languageColor = languageColors[repo.language] || '#cccccc';
    
    col.innerHTML = `
        <div class="project-card card h-100">
            <div class="card-body p-4">
                <div class="project-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <h3 class="h5 mb-2 fw-bold">${repo.name}</h3>
                ${repo.language ? `
                <div class="language-badge mb-3">
                    <span class="language-dot" style="background-color: ${languageColor};"></span>
                    <span>${repo.language}</span>
                </div>
                ` : ''}
                <p class="card-text mb-3">
                    ${repo.description || 'A personal project showcasing my development skills and creativity.'}
                </p>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex gap-3 text-muted">
                        <span><i class="far fa-star me-1"></i>${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-branch me-1"></i>${repo.forks_count}</span>
                    </div>
                </div>
                <a href="${repo.html_url}" target="_blank" class="btn btn-sm btn-outline-light w-100">
                    <i class="fab fa-github me-2"></i>View Project
                </a>
            </div>
        </div>
    `;
    
    return col;
}

// Show default message if no projects found
function showDefaultProjects(projectsGrid, username) {
    projectsGrid.innerHTML = `
        <div class="col-12">
            <div class="card project-card">
                <div class="card-body p-4 text-center">
                    <i class="fas fa-code fa-3x text-warning mb-3"></i>
                    <h3 class="h4 mb-3">Projects</h3>
                    <p class="card-text mb-3">
                        Check out my projects on GitHub to see what I'm working on!
                    </p>
                    <a href="https://github.com/${username}" target="_blank" class="btn btn-warning">
                        <i class="fab fa-github me-2"></i>Visit GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.6)';
    } else {
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchPinnedProjects();
});
