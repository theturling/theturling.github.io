// 个人信息配置
const config = {
    // 基础信息
    basicInfo: {
        name: "涂峻绫",
        nameEn: "TU JUNLING",
        title: "南方科技大学 智能科学与技术专业本科生",
        titleEn: "UG at Southern University of Science and Technology (SUSTech), China. Major in Intelligent Science and Technology.",
        email: "junling.tu@qq.com",
        university: "南方科技大学",
        universityEn: "Southern University of Science and Technology",
        address: "中国 广东省 深圳市",
        addressEn: "Guangdong Province, Shenzhen, China",
        phone: "+86 15196985161",
        avatar: "assets/avatar-real.jpg",
        github: "https://github.com/theturling"
    },

    // 导航栏配置
    navigation: {
        home: { zh: "主页", en: "Home" },
        projects: { zh: "项目", en: "Projects" },
        research: { zh: "研究", en: "Research" },
        internships: { zh: "实习", en: "Internships" },
        cv: { zh: "简历", en: "CV" },
        publications: { zh: "发表", en: "Publications" }
    },

    // 页面内容配置
    content: {
        home: {
            title: "关于我",
            titleEn: "About Me",
            content: `
                <p>我是南方科技大学智能科学与技术专业的本科生，对计算机科学和人工智能领域充满热情。具有扎实的编程基础和解决问题的能力，热衷于学习新技术并将其应用到实际项目中。</p>
                <p>在大学期间，我专注于智能科学与技术相关的学习和研究，积累了丰富的理论知识和实践经验。我擅长团队协作，能够快速适应新环境并高效完成任务。</p>
            `,
            contentEn: `
                <p>I am an undergraduate student majoring in Intelligent Science and Technology at Southern University of Science and Technology (SUSTech). I am passionate about computer science and artificial intelligence, with solid programming foundations and problem-solving skills. I am enthusiastic about learning new technologies and applying them to practical projects.</p>
                <p>During my university years, I have focused on learning and research in intelligent science and technology, accumulating rich theoretical knowledge and practical experience. I excel at team collaboration and can quickly adapt to new environments while completing tasks efficiently.</p>
            `
        },

        projects: {
            title: "项目经历",
            titleEn: "Projects",
            items: [
                { name: "机器人大赛视觉项目 - Robomaster机器人大赛", nameEn: "Robotics Competition Vision Project - Robomaster Robotics Competition", description: "基于团队CAF框架，集成深度学习网络，提升系统鲁棒性和精度。优化EKF滤波算法，增强目标跟踪稳定性。搭建ROS框架解决前端崩溃和数据同步问题。负责项目管理、新人培训及多组联调，确保视觉功能可靠。", descriptionEn: "Optimized Deep Learning network in CAF framework, boosting robustness/accuracy. Enhanced EKF filtering for stable tracking. Built ROS framework to fix crashes/data sync. Led project management, training, and cross-team debugging for reliable robot vision.", tags: ["深度学习", "计算机视觉", "C++", "Python"], tagsEn: ["Deep Learning", "Computer Vision", "C++", "Python"], period: "2024.03 - 2024.08", periodEn: "Mar 2024 - Aug 2024" },
                { name: "人脸风格转换程序 - 深度学习项目", nameEn: "Efficient Face Style Changing Program - Deep Learning", description: "修改StyleGAN2输出以生成可控风格的人脸图像。通过调整模型结构和充分利用Jetson Nano的CPU与GPU资源，优化性能。在高性能PC中引入VGG16特征距离最小化方法以提取实时图像的潜在向量。", descriptionEn: "Modified StyleGAN2 to generate face images with controllable styles. Optimized performance on Jetson Nano by adjusting model structure and maximizing CPU/GPU usage. Introduced a method on high-performance PC to extract latent vectors by minimizing VGG16 feature distance of real-time images.", tags: ["StyleGAN2", "Jetson Nano", "图像风格转换", "Python"], tagsEn: ["StyleGAN2", "Jetson Nano", "Image Style Transfer", "Python"], period: "2024.01 - 2024.03", periodEn: "Jan 2024 - Mar 2024" },
                { name: "视频会议软件 - 计算机网络项目", nameEn: "Video Conferencing Software - Computer Networks", description: "使用Python的socket库实现TCP与UDP连接：TCP用于文本与控制通信，UDP用于音视频传输。监控视频帧率与延迟并动态调整分辨率与码率以保证流畅性。通过动态分配端口隔离不同会话，支持P2P与客户端-服务器双模式。", descriptionEn: "Implemented TCP and UDP using Python’s socket library: TCP for control/text communication, UDP for audio/video streaming. Monitored frame rate and latency to adjust resolution and bitrate dynamically. Used dynamic port assignment to isolate sessions, supporting both P2P and client-server modes.", tags: ["Python", "计算机网络", "Socket编程", "视频传输"], tagsEn: ["Python", "Computer Networks", "Socket Programming", "Video Streaming"], period: "2023.09 - 2023.12", periodEn: "Sep 2023 - Dec 2023" },
                { name: "SUSTech VSCode 插件 - 软件工程项目", nameEn: "SUSTech VSCode Extension - Software Engineering", description: "使用TypeScript开发后端，支持SSO登录后从Blackboard抓取并管理课程文件URL。基于VSCode Editor API与Yjs实现局域网协同编辑，支持实时聊天与自动服务器发现。统一团队Git工作流并管理修复流程。", descriptionEn: "Developed backend with TypeScript to crawl and manage course file URLs from Blackboard after SSO login. Implemented LAN-based collaborative editing using VSCode Editor API and Yjs, with real-time chat and automatic server discovery. Standardized Git workflow for bug-fixing team.", tags: ["TypeScript", "VSCode插件", "协同编辑", "Yjs"], tagsEn: ["TypeScript", "VSCode Extension", "Collaborative Editing", "Yjs"], period: "2023.03 - 2023.06", periodEn: "Mar 2023 - Jun 2023" }
            ]
        },


        research: {
            title: "研究经历",
            titleEn: "Research Experience",
            items: [
                {
                    name: "智能科学与技术相关研究",
                    nameEn: "Research in Intelligent Science and Technology",
                    description: "参与智能科学与技术专业相关的课程研究项目，关注人工智能和机器学习领域。",
                    descriptionEn: "Participated in research projects related to Intelligent Science and Technology major, focusing on artificial intelligence and machine learning fields.",
                    period: "2022.09 - 现在",
                    periodEn: "Sep 2022 - Present",
                    institution: "南方科技大学",
                    institutionEn: "Southern University of Science and Technology"
                }
            ]
        },

        internships: {
            title: "实习经历",
            titleEn: "Internships",
            items: [
                {
                    name: "OBAR执行技术实习生",
                    nameEn: "OBAR Execution Technology Intern",
                    description: "在深圳大疆实习期间，负责Robomaster比赛中AR系统的开发、维护与执行工作。",
                    descriptionEn: "Interned at DJI in Shenzhen, responsible for development, maintenance, and execution of the AR system for the Robomaster competition.",
                    period: "2025.04 - 2025.06",
                    periodEn: "Apr 2025 - Jun 2025",
                    institution: "深圳大疆创新科技有限公司",
                    institutionEn: "DJI Innovations",
                }
            ]
        },

        cv: {
            title: "个人简历",
            titleEn: "CV",
            downloadLink: "assets/cv-en.pdf",
            downloadText: "下载PDF简历",
            downloadTextEn: "Download PDF Resume"
        },

        publications: {
            title: "发表论文",
            titleEn: "Publications",
            items: [
                // 根据实际情况添加发表论文
            ]
        }
    }
};

export default config;