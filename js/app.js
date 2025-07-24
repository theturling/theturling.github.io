import config from './config.js';

// 状态管理
let currentTheme = 'light';
let currentLang = 'zh';

// DOM元素
let themeToggle;
let langToggle;
let navigatorLinks;
let contentArea;

// 初始化页面
function initPage() {
    // 获取DOM元素
    themeToggle = document.getElementById('theme-toggle');
    langToggle = document.getElementById('lang-toggle');
    navigatorLinks = document.querySelectorAll('#navigator a');
    contentArea = document.getElementById('content');

    // 初始化侧边栏
    updateSidebar();
    // 初始化导航栏
    updateNavigator();
    // 初始化事件监听
    initEventListeners();
    // 检查本地存储的主题偏好
    checkThemePreference();
    // 检查完主题和语言后再加载内容，确保内容语言正确
    loadContent('home');
}

// 更新侧边栏内容
function updateSidebar() {
    const sidebarName = document.getElementById('sidebar-name');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarEmail = document.getElementById('sidebar-email');
    const sidebarUniversity = document.getElementById('sidebar-university');
    const sidebarAddress = document.getElementById('sidebar-address');
    const sidebarPhone = document.getElementById('sidebar-phone');
    sidebarPhone.textContent = config.basicInfo.phone;
    const sidebarGithub = document.getElementById('sidebar-github');
    sidebarGithub.href = config.basicInfo.github;
    sidebarGithub.textContent = 'Github'

    // 更新基本信息
    sidebarName.textContent = config.basicInfo[currentLang === 'zh' ? 'name' : 'nameEn'];
    sidebarTitle.textContent = config.basicInfo[currentLang === 'zh' ? 'title' : 'titleEn'];
    sidebarEmail.textContent = config.basicInfo.email;
    sidebarUniversity.textContent = config.basicInfo[currentLang === 'zh' ? 'university' : 'universityEn'];
    sidebarAddress.textContent = config.basicInfo[currentLang === 'zh' ? 'address' : 'addressEn'];
}

// 更新导航栏文字
function updateNavigator() {
    const navLinks = document.querySelectorAll('#navigator a[href^="#"]');
    navLinks.forEach(link => {
        const section = link.getAttribute('href').substring(1);
        if (config.navigation[section]) {
            link.textContent = config.navigation[section][currentLang];
        }
    });
}

// 加载内容区域
function loadContent(section) {
    if (!config.content[section]) return;

    const sectionConfig = config.content[section];
    contentArea.innerHTML = '';


    // 创建标题和右上角时间容器
    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'flex justify-between items-center mb-6 border-b pb-2';
    const titleElement = document.createElement('h2');
    titleElement.className = 'text-3xl font-bold';
    titleElement.textContent = sectionConfig[currentLang === 'zh' ? 'title' : 'titleEn'];
    titleWrapper.appendChild(titleElement);

    // 右上角时间（仅部分页面有）
    let periodText = '';
    if (section === 'projects' || section === 'research' || section === 'internships' || section === 'publications') {
        // 留空，具体每个item渲染时处理
    } else if (section === 'cv') {
        // 简历页面无时间
    } else if (section === 'home') {
        // 首页无时间
    }
    // 添加标题容器
    contentArea.appendChild(titleWrapper);

    // 根据不同部分加载内容
    switch (section) {
        case 'home': {
            const homeContent = document.createElement('div');
            homeContent.className = 'prose dark:prose-invert max-w-none';
            homeContent.innerHTML = sectionConfig[currentLang === 'zh' ? 'content' : 'contentEn'];
            contentArea.appendChild(homeContent);
            break;
        }
        case 'projects': {
            const projectsContainer = document.createElement('div');
            projectsContainer.className = 'grid grid-cols-1 gap-6';
            sectionConfig.items.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow';
                projectCard.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-semibold">${project[currentLang === 'zh' ? 'name' : 'nameEn']}</h3>
                        <span class="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${project[currentLang === 'zh' ? 'period' : 'periodEn']}</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-2">${project[currentLang === 'zh' ? 'description' : 'descriptionEn']}</p>
                    <div class="flex flex-wrap gap-2 mb-2">
                        ${project[currentLang === 'zh' ? 'tags' : 'tagsEn'].map(tag => `
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">${tag}</span>
                        `).join('')}
                    </div>
                `;
                projectsContainer.appendChild(projectCard);
            });
            contentArea.appendChild(projectsContainer);
            break;
        }
        case 'research':
        case 'internships':
        case 'publications': {
            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'space-y-8';
            sectionConfig.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md';
                if (section === 'research') {
                    itemElement.innerHTML = `
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="text-xl font-semibold">${item[currentLang === 'zh' ? 'name' : 'nameEn']}</h3>
                            <span class="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${item[currentLang === 'zh' ? 'period' : 'periodEn']}</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-2">${item[currentLang === 'zh' ? 'description' : 'descriptionEn']}</p>
                        <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span>${item[currentLang === 'zh' ? 'institution' : 'institutionEn']}</span>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            ${(item[currentLang === 'zh' ? 'tags' : 'tagsEn'] || []).map(tag => `
                                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">${tag}</span>
                            `).join('')}
                        </div>
                    `;
                } else if (section === 'internships') {
                    itemElement.innerHTML = `
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="text-xl font-semibold">${item[currentLang === 'zh' ? 'institution' : 'institutionEn']}</h3>
                            <span class="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${item[currentLang === 'zh' ? 'period' : 'periodEn']}</span>
                        </div>
                        <h4 class="text-lg text-primary mb-3">${item[currentLang === 'zh' ? 'name' : 'nameEn']}</h4>
                        <p class="text-gray-600 dark:text-gray-300 mb-2">${item[currentLang === 'zh' ? 'description' : 'descriptionEn']}</p>
                    `;
                } else if (section === 'publications') {
                    itemElement.innerHTML = `
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="text-xl font-semibold">${item[currentLang === 'zh' ? 'title' : 'titleEn']}</h3>
                            <span class="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${item.year || ''}</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-2">${item.authors || ''}</p>
                        <p class="text-gray-600 dark:text-gray-300">${item[currentLang === 'zh' ? 'journal' : 'journalEn'] || ''}</p>
                    `;
                }
                itemsContainer.appendChild(itemElement);
            });
            contentArea.appendChild(itemsContainer);
            break;
        }
        case 'cv': {
            const cvContainer = document.createElement('div');
            cvContainer.className = 'text-center py-10';
            cvContainer.innerHTML = `
                <div class="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow mb-8">
                    <a href="${sectionConfig.downloadLink}" class="flex items-center justify-center">
                        <i class="fa fa-download mr-2"></i>
                        <span>${sectionConfig[currentLang === 'zh' ? 'downloadText' : 'downloadTextEn']}</span>
                    </a>
                </div>
                <div class="prose dark:prose-invert max-w-3xl mx-auto">
                    <p>${currentLang === 'zh' ? '点击上方按钮下载我的完整简历PDF版本' : 'Click the button above to download my complete CV in PDF format'}</p>
                </div>
            `;
            contentArea.appendChild(cvContainer);
            break;
        }
    }
}

// 切换主题
function toggleTheme() {
    if (currentTheme === 'light') {
        document.documentElement.classList.add('dark');
        themeToggle.innerHTML = '<i class="fa fa-sun-o"></i>';
        currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggle.innerHTML = '<i class="fa fa-moon-o"></i>';
        currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
}

// 切换语言
function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    updateSidebar();
    updateNavigator();
    // 重新加载当前内容
    const activeLink = document.querySelector('#navigator a.active');
    if (activeLink) {
        const section = activeLink.getAttribute('href').substring(1);
        loadContent(section);
    } else {
        loadContent('home');
    }
}

// 检查主题偏好
function checkThemePreference() {
    if (localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggle.innerHTML = '<i class="fa fa-sun-o"></i>';
        currentTheme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        themeToggle.innerHTML = '<i class="fa fa-moon-o"></i>';
        currentTheme = 'light';
    }

    // 检查语言偏好
    if (localStorage.getItem('lang')) {
        currentLang = localStorage.getItem('lang');
        updateSidebar();
        updateNavigator();
    }
}

// 初始化事件监听
function initEventListeners() {
    // 主题切换
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // 语言切换
    if (langToggle) {
        langToggle.addEventListener('click', toggleLang);
    }

    // 导航链接
    navigatorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // 移除所有active类
            navigatorLinks.forEach(l => l.classList.remove('active', 'text-primary'));
            // 添加active类到当前链接
            link.classList.add('active', 'text-primary');
            // 获取section名称
            const section = link.getAttribute('href').substring(1);
            // 加载内容
            loadContent(section);
            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}