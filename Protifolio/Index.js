document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                navMenu.classList.remove('active');
            }
        });
    });

    // Render projects
    const projects = [
        {
            title: "Projeto Barbearia Dom Du Corte",
            description: "Sistema completo de agendamento e gestão para barbearias premium.",
            icon: "fas fa-cut",
            tags: ["React", "Node.js", "SQL"]
        },
        {
            title: "Projeto Carraspana",
            description: "E-commerce especializado em bebidas artesanais com interface refinada.",
            icon: "fas fa-glass-cheers",
            tags: ["Next.js", "Stripe", "Prisma"]
        },
        {
            title: "Projeto Club 7",
            description: "Plataforma exclusiva para membros com sistema de gamificação.",
            icon: "fas fa-users",
            tags: ["Vue.js", "Firebase", "Tailwind"]
        },
        {
            title: "Projeto Geometrisa",
            description: "Ferramenta interativa para cálculos e visualizações geométricas complexas.",
            icon: "fas fa-shapes",
            tags: ["TypeScript", "Canvas", "MathJS"]
        },
        {
            title: "Projeto Shalua",
            description: "Portal de bem-estar e saúde mental com recursos de meditação.",
            icon: "fas fa-leaf",
            tags: ["HTML5", "CSS3", "JavaScript"]
        },
        {
            title: "Projeto Braseiro Burguer",
            description: "Sistema de delivery otimizado para hamburguerias de alto padrão.",
            icon: "fas fa-hamburger",
            tags: ["React Native", "Express", "MongoDB"]
        },
        {
            title: "Projeto Notícias",
            description: "Portal dinâmico de notícias com atualização em tempo real e SEO otimizado.",
            icon: "fas fa-newspaper",
            tags: ["PHP", "Laravel", "MySQL"]
        }
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-img">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-info">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="#" class="project-link">Ver Detalhes <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        projectsContainer.appendChild(card);
    });

    // Render skills
    const skills = [
        { name: "Frontend", icon: "fab fa-html5" },
        { name: "Backend", icon: "fas fa-server" },
        { name: "Database", icon: "fas fa-database" },
        { name: "Sistemas", icon: "fas fa-cogs" },
        { name: "Design UI", icon: "fas fa-paint-brush" },
        { name: "React", icon: "fab fa-react" }
    ];

    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card glass';
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h4>${skill.name}</h4>
        `;
        skillsContainer.appendChild(skillCard);
    });
});
