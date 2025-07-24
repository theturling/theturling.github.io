// 个人信息配置
const config = {
    // 基础信息
    basicInfo: {
        name: "涂峻绫",
        nameEn: "TU JUNLING",
        title: "南方科技大学 智能科学与技术专业本科生",
        titleEn: "UG at Southern University of Science and Technology (SUSTech), China. Major in Intelligent Science and Technology. Interested in Computer Vision, Machine Learning, and Artificial Intelligence.",
        email: "junling.tu@qq.com",
        university: "南方科技大学",
        universityEn: "Southern University of Science and Technology",
        address: "中国 广东省 深圳市",
        addressEn: "Guangdong Province, Shenzhen, China",
        phone: "+86 15196985161",
        avatar: "assets/avatar.jpg",
        github: "https://github.com/theturling"
    },

    // 页面内容配置
    content: {
        home: {
            title: "关于我",
            titleEn: "About Me",
            content: `
                <p>我是一名对计算机科学充满热情的毕业生，专注于软件开发和人工智能领域。具有扎实的编程基础和解决问题的能力，热衷于学习新技术并将其应用到实际项目中。</p>
                <p>在大学期间，我参与了多个科研项目和实习，积累了丰富的实践经验。我擅长团队协作，能够快速适应新环境并高效完成任务。</p>
            `,
            contentEn: `
                <p>I am a passionate graduate in Computer Science, focusing on software development and artificial intelligence. With a solid programming foundation and problem-solving skills, I am enthusiastic about learning new technologies and applying them to practical projects.</p>
                <p>During my university years, I participated in multiple research projects and internships, accumulating rich practical experience. I excel at team collaboration and can quickly adapt to new environments while completing tasks efficiently.</p>
            `
        },

        projects: {
            title: "项目经历",
            titleEn: "Projects",
            items: [
                {
                    name: "智能推荐系统",
                    nameEn: "Intelligent Recommendation System",
                    description: "基于协同过滤算法实现的电影推荐系统，使用Python和TensorFlow构建，准确率达到85%。",
                    descriptionEn: "Movie recommendation system based on collaborative filtering algorithm, built with Python and TensorFlow, achieving 85% accuracy.",
                    tags: ["Python", "机器学习", "TensorFlow"],
                    tagsEn: ["Python", "Machine Learning", "TensorFlow"]
                },
                {
                    name: "个人博客网站",
                    nameEn: "Personal Blog Website",
                    description: "使用React和Node.js开发的全栈博客系统，支持Markdown编辑和用户评论功能。",
                    descriptionEn: "Full-stack blog system developed with React and Node.js, supporting Markdown editing and user comment functions.",
                    tags: ["React", "Node.js", "MongoDB"],
                    tagsEn: ["React", "Node.js", "MongoDB"]
                }
            ]
        },

        research: {
            title: "研究经历",
            titleEn: "Research Experience",
            items: [
                {
                    name: "自然语言处理研究",
                    nameEn: "Natural Language Processing Research",
                    description: "参与基于BERT模型的文本分类研究，发表论文1篇。",
                    descriptionEn: "Participated in text classification research based on BERT model, published 1 paper.",
                    period: "2022.03 - 2022.12",
                    institution: "北京大学人工智能实验室"
                }
            ]
        },

        internships: {
            title: "实习经历",
            titleEn: "Internships",
            items: [
                {
                    company: "科技有限公司",
                    companyEn: "Technology Co., Ltd.",
                    position: "前端开发实习生",
                    positionEn: "Frontend Development Intern",
                    period: "2023.06 - 2023.09",
                    description: "负责公司官网重构，使用Vue.js和Element UI实现响应式设计，提升页面加载速度30%。",
                    descriptionEn: "Responsible for company website reconstruction, implementing responsive design using Vue.js and Element UI, improving page loading speed by 30%."
                }
            ]
        },

        cv: {
            title: "个人简历",
            titleEn: "CV",
            downloadLink: "assets/resume.pdf",
            downloadText: "下载PDF简历",
            downloadTextEn: "Download PDF Resume"
        },

        publications: {
            title: "发表论文",
            titleEn: "Publications",
            items: [
                {
                    title: "基于深度学习的文本分类研究",
                    titleEn: "Research on Text Classification Based on Deep Learning",
                    authors: "张三, 李四, 王五",
                    journal: "计算机学报",
                    journalEn: "Journal of Computer Science",
                    year: 2023
                }
            ]
        }
    }
};

export default config;