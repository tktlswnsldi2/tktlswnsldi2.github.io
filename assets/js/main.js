/**
 * ==========================================================================
 * Main Application Logic (main.js) - 회계학 전공 포트폴리오
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 테마 초기화
  initTheme();

  // 2. data.js 데이터 렌더링
  if (typeof portfolioData !== 'undefined') {
    renderProfile();
    renderHighlights();
    renderStats();
    renderSkills();
    renderTimeline();
    renderContact();
  }

  // 3. 인터랙션 및 애니메이션 초기화
  initTypingEffect();
  initMobileMenu();
  initScrollEffects();
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

  const heroEnglishName = document.getElementById('hero-english-name');
  if (heroEnglishName) heroEnglishName.textContent = `(${profile.englishName})`;

  const heroBio = document.getElementById('hero-bio');
  if (heroBio) heroBio.textContent = profile.shortBio;

  const statusBadge = document.getElementById('status-badge');
  if (statusBadge && profile.status?.available) {
    statusBadge.innerHTML = `
      <span class="flex h-2.5 w-2.5 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
      </span>
      <span class="text-xs font-semibold text-blue-700 dark:text-blue-300">${profile.status.text}</span>
    `;
  }

  // Social Icons Container
  const socialContainer = document.getElementById('hero-social-links');
  if (socialContainer && socialLinks) {
    socialContainer.innerHTML = socialLinks.map(link => `
      <a href="${link.url}" 
         class="px-4 py-2 text-sm font-semibold rounded-xl glass-card text-gray-700 dark:text-gray-200 ${link.color} transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-sm"
         title="${link.name}">
        <i class="${link.icon} text-base text-blue-500"></i>
        <span>${link.name}</span>
      </a>
    `).join('');
  }
}

function renderHighlights() {
  const container = document.getElementById('about-highlights');
  if (!container || !portfolioData.highlights) return;

  container.innerHTML = portfolioData.highlights.map(item => `
    <div class="glass-card p-6 rounded-2xl reveal flex flex-col items-start gap-4">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xl">
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
      <div class="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">${stat.value}</div>
      <div class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">${stat.label}</div>
    </div>
  `).join('');
}

function renderSkills() {
  const { skills } = portfolioData;
  const renderList = (items) => items.map(skill => {
    const isFontAwesome = skill.icon && skill.icon.startsWith('fa-');
    let iconHtml = `<i class="${isFontAwesome ? skill.icon : 'fa-solid fa-check-circle'} text-base text-blue-500"></i>`;

    return `
      <div class="group relative flex items-center gap-3 p-3.5 rounded-xl glass-card transition-all duration-300 hover:border-blue-500/40">
        <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
          ${iconHtml}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-gray-900 dark:text-white truncate">${skill.name}</div>
          <div class="text-xs font-medium text-blue-600/80 dark:text-blue-400/80">${skill.level}</div>
        </div>
      </div>
    `;
  }).join('');

  const finContainer = document.getElementById('skills-financial');
  if (finContainer && skills.financial) finContainer.innerHTML = renderList(skills.financial);

  const taxContainer = document.getElementById('skills-tax');
  if (taxContainer && skills.tax) taxContainer.innerHTML = renderList(skills.tax);

  const toolsContainer = document.getElementById('skills-tools');
  if (toolsContainer && skills.tools) toolsContainer.innerHTML = renderList(skills.tools);
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
    footerCopyright.innerHTML = `&copy; ${year} ${profile.name} (${profile.englishName}) · 강원대학교 회계학과. All rights reserved.`;
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
      typeSpeed = 45;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 110;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2200; // Pause at end of word
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

// Copy Email & Toast Notification
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = portfolioData.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`이영준 님의 이메일 주소(${email})가 복사되었습니다! ✉️`);
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
