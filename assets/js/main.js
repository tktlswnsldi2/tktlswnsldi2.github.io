/**
 * ==========================================================================
 * Main Application Logic (main.js)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 테마 초기화 및 이벤트 리스너
  initTheme();

  // 2. data.js 데이터를 이용한 렌더링
  if (typeof portfolioData !== 'undefined') {
    renderProfile();
    renderHighlights();
    renderStats();
    renderSkills();
    renderProjects('all');
    renderTimeline();
    renderContact();
  }

  // 3. 인터랙션 및 애니메이션 초기화
  initTypingEffect();
  initMobileMenu();
  initScrollEffects();
  initProjectFilters();
  initModal();
  initCopyEmail();
  initBackToTop();
});

/* ==========================================================================
   1. Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  const userTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
    });
  });
}

function updateThemeIcons(isDark) {
  document.querySelectorAll('.theme-icon-sun').forEach(el => {
    el.style.display = isDark ? 'block' : 'none';
  });
  document.querySelectorAll('.theme-icon-moon').forEach(el => {
    el.style.display = isDark ? 'none' : 'block';
  });
}

/* ==========================================================================
   2. DOM Rendering with Data
   ========================================================================== */
function renderProfile() {
  const { profile, socialLinks } = portfolioData;

  // Header Logo & Nav Title
  const navName = document.getElementById('nav-name');
  if (navName) navName.textContent = profile.name;

  // Hero Section
  const heroGreeting = document.getElementById('hero-greeting');
  if (heroGreeting) heroGreeting.textContent = profile.greeting;

  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = profile.name;

  const heroBio = document.getElementById('hero-bio');
  if (heroBio) heroBio.textContent = profile.shortBio;

  const heroAvatar = document.getElementById('hero-avatar');
  if (heroAvatar) {
    heroAvatar.src = profile.avatar;
    heroAvatar.alt = profile.name;
  }

  const statusBadge = document.getElementById('status-badge');
  if (statusBadge && profile.status?.available) {
    statusBadge.innerHTML = `
      <span class="flex h-2.5 w-2.5 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400">${profile.status.text}</span>
    `;
  }

  // Social Icons Container
  const socialContainer = document.getElementById('hero-social-links');
  if (socialContainer) {
    socialContainer.innerHTML = socialLinks.map(link => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
         class="p-3 text-lg rounded-xl glass-card text-gray-600 dark:text-gray-300 ${link.color} transition-all duration-300 hover:scale-110"
         title="${link.name}" aria-label="${link.name}">
        <i class="${link.icon}"></i>
      </a>
    `).join('');
  }

  // Resume link
  const resumeBtn = document.getElementById('btn-resume');
  if (resumeBtn) {
    resumeBtn.href = profile.resumeUrl || '#';
  }
}

function renderHighlights() {
  const container = document.getElementById('about-highlights');
  if (!container || !portfolioData.highlights) return;

  container.innerHTML = portfolioData.highlights.map(item => `
    <div class="glass-card p-6 rounded-2xl reveal flex flex-col items-start gap-4">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-500 text-xl">
        <i class="${item.icon}"></i>
      </div>
      <div>
        <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">${item.title}</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">${item.description}</p>
      </div>
    </div>
  `).join('');
}

function renderStats() {
  const container = document.getElementById('about-stats');
  if (!container || !portfolioData.stats) return;

  container.innerHTML = portfolioData.stats.map(stat => `
    <div class="text-center p-4 glass-card rounded-xl">
      <div class="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">${stat.value}</div>
      <div class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">${stat.label}</div>
    </div>
  `).join('');
}

function renderSkills() {
  const { skills } = portfolioData;
  const renderList = (items) => items.map(skill => `
    <div class="group relative flex items-center gap-3 p-3.5 rounded-xl glass-card transition-all duration-300 hover:border-blue-500/40">
      <img src="${skill.icon}" alt="${skill.name}" class="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300" 
           onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" />
      <i class="fa-solid fa-code text-xl text-blue-500 hidden"></i>
      <div class="flex-1 min-w-0">
        <div class="text-sm font-semibold text-gray-900 dark:text-white truncate">${skill.name}</div>
        <div class="text-xs text-blue-600/80 dark:text-blue-400/80">${skill.level}</div>
      </div>
    </div>
  `).join('');

  const feContainer = document.getElementById('skills-frontend');
  if (feContainer && skills.frontend) feContainer.innerHTML = renderList(skills.frontend);

  const beContainer = document.getElementById('skills-backend');
  if (beContainer && skills.backend) beContainer.innerHTML = renderList(skills.backend);

  const toolsContainer = document.getElementById('skills-tools');
  if (toolsContainer && skills.devops_tools) toolsContainer.innerHTML = renderList(skills.devops_tools);
}

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !portfolioData.projects) return;

  const filtered = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-gray-500 dark:text-gray-400">
        해당 카테고리의 프로젝트가 없습니다.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="glass-card rounded-2xl overflow-hidden flex flex-col group reveal transition-all duration-300">
      <!-- Thumbnail -->
      <div class="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
        <img src="${p.thumbnail}" alt="${p.title}" 
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div class="flex gap-2">
            ${p.demoUrl && p.demoUrl !== '#' ? `
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" 
                 class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-lg flex items-center gap-1.5">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
              </a>
            ` : ''}
            ${p.githubUrl && p.githubUrl !== '#' ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" 
                 class="px-3 py-1.5 bg-gray-900/90 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-lg flex items-center gap-1.5">
                <i class="fa-brands fa-github"></i> Code
              </a>
            ` : ''}
          </div>
          <button onclick="openProjectModal('${p.id}')" 
                  class="px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold rounded-lg">
            자세히 보기
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              ${p.category}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-mono">${p.period}</span>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            ${p.title}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
            ${p.description}
          </p>
        </div>

        <div>
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${p.tags.map(tag => `
              <span class="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50">
                ${tag}
              </span>
            `).join('')}
          </div>

          <!-- Bottom Action -->
          <div class="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <button onclick="openProjectModal('${p.id}')" class="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1">
              상세 설명 보기 <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
            <div class="flex items-center gap-3">
              ${p.githubUrl && p.githubUrl !== '#' ? `
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white" title="GitHub">
                  <i class="fa-brands fa-github text-sm"></i>
                </a>
              ` : ''}
              ${p.demoUrl && p.demoUrl !== '#' ? `
                <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 dark:hover:text-blue-400" title="Live Demo">
                  <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe revealed items
  observeReveals();
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || !portfolioData.timeline) return;

  container.innerHTML = portfolioData.timeline.map(item => `
    <div class="relative pl-8 pb-10 timeline-item last:pb-0 reveal">
      <div class="glass-card p-6 rounded-2xl">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            ${item.period}
          </span>
          <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">
            ${item.organization}
          </span>
        </div>
        <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
          ${item.role}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
          ${item.description}
        </p>
        <div class="flex flex-wrap gap-1.5">
          ${item.badges.map(b => `
            <span class="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              #${b}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderContact() {
  const { contact, profile } = portfolioData;
  
  const titleEl = document.getElementById('contact-title');
  if (titleEl) titleEl.textContent = contact.title;

  const descEl = document.getElementById('contact-desc');
  if (descEl) descEl.textContent = contact.description;

  const emailTextEl = document.getElementById('contact-email-text');
  if (emailTextEl) emailTextEl.textContent = profile.email;

  const availEl = document.getElementById('contact-availability');
  if (availEl) availEl.textContent = contact.availabilityText;

  const footerCopyright = document.getElementById('footer-copyright');
  if (footerCopyright) {
    const year = new Date().getFullYear();
    footerCopyright.innerHTML = `&copy; ${year} ${profile.englishName || profile.name}. All rights reserved.`;
  }
}

/* ==========================================================================
   3. Interactive Features & Animations
   ========================================================================== */

// Typing Animation
function initTypingEffect() {
  const target = document.getElementById('typing-text');
  if (!target || !portfolioData.profile.typingTitles) return;

  const words = portfolioData.profile.typingTitles;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 120;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// Mobile Hamburger Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', !isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Scroll Reveals & Navbar Blur
function initScrollEffects() {
  const nav = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  });

  observeReveals();
}

function observeReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// Project Category Filters
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        b.classList.add('text-gray-600', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-800');
      });

      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
      btn.classList.remove('text-gray-600', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-800');

      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// Project Modal Details
window.openProjectModal = function(projectId) {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content');
  if (!modal || !modalBody || !portfolioData.projects) return;

  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  modalBody.innerHTML = `
    <div class="relative aspect-video rounded-xl overflow-hidden mb-6 bg-gray-950">
      <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover" />
    </div>

    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 uppercase">
          ${project.category}
        </span>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-2">${project.title}</h3>
      </div>
      <span class="text-sm font-mono text-gray-500 dark:text-gray-400">${project.period}</span>
    </div>

    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-line">
      ${project.longDescription || project.description}
    </p>

    ${project.highlights && project.highlights.length > 0 ? `
      <div class="mb-6">
        <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-2">💡 주요 구현 및 성과</h4>
        <ul class="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
          ${project.highlights.map(h => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-blue-500 mt-1"></i> <span>${h}</span></li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div class="mb-6">
      <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-2">🛠️ 사용 기술</h4>
      <div class="flex flex-wrap gap-2">
        ${project.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">${t}</span>`).join('')}
      </div>
    </div>

    <div class="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
      ${project.demoUrl && project.demoUrl !== '#' ? `
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" 
           class="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> 라이브 데모 방문
        </a>
      ` : ''}
      ${project.githubUrl && project.githubUrl !== '#' ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
           class="flex-1 py-2.5 px-4 bg-gray-900 hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold rounded-xl text-center text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <i class="fa-brands fa-github"></i> GitHub 소스코드
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (!modal) return;

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// Copy Email & Toast Notification
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = portfolioData.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`이메일 주소(${email})가 복사되었습니다! 🎉`);
      }).catch(() => {
        showToast(`이메일: ${email}`);
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Back To Top Button
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
