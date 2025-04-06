// 工具数据
const toolsData = [
    {
        id: 1,
        name: "智能文本助手",
        category: "nlp",
        categoryName: "自然语言处理",
        description: "强大的AI文本生成和编辑工具，可帮助您撰写各类文章、邮件、报告等内容",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        url: "https://example.com/text-assistant",
        features: [
            "自动生成高质量文本内容",
            "智能语法和拼写纠错",
            "多种文体和风格选择",
            "支持中英文等多种语言"
        ],
        useCases: [
            "撰写文章和博客",
            "起草商业邮件和报告",
            "创建营销文案",
            "学术论文辅助写作"
        ],
        howToUse: "只需输入您的主题或关键词，选择所需的文体和长度，AI将为您生成相应的文本内容。您还可以上传现有文本进行优化和编辑。"
    },
    {
        id: 2,
        name: "AI图像生成器",
        category: "image",
        categoryName: "图像处理",
        description: "基于文本描述生成高质量图像，支持多种风格和场景",
        image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        url: "https://example.com/image-generator",
        features: [
            "文本到图像的高精度转换",
            "多种艺术风格选择",
            "自定义图像大小和比例",
            "批量生成功能"
        ],
        useCases: [
            "创建营销和社交媒体图片",
            "设计概念草图",
            "生成产品展示图",
            "制作独特的艺术作品"
        ],
        howToUse: "输入详细的文本描述，选择所需的风格和尺寸，然后等待AI生成图像。您可以调整参数获得不同的结果，也可以在生成后进行简单的编辑。"
    },
    {
        id: 3,
        name: "语音转文字工具",
        category: "audio",
        categoryName: "音频处理",
        description: "精准的语音识别技术，将语音快速转换为文字，支持多种语言和口音",
        image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        url: "https://example.com/speech-to-text",
        features: [
            "高精度语音识别",
            "实时转录功能",
            "支持多种语言和方言",
            "专业术语识别能力"
        ],
        useCases: [
            "会议记录和整理",
            "采访转录",
            "创建播客字幕",
            "语音笔记快速记录"
        ],
        howToUse: "上传音频文件或使用实时录音功能，选择语言和专业领域，AI将自动将语音内容转换为文字。支持编辑和导出多种格式。"
    },
    {
        id: 4,
        name: "数据可视化助手",
        category: "data",
        categoryName: "数据分析",
        description: "将复杂数据转换为直观的可视化图表，帮助您更好地理解和呈现数据",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        url: "https://example.com/data-visualization",
        features: [
            "自动推荐最适合的图表类型",
            "交互式数据探索",
            "多种图表和风格选择",
            "一键导出高质量图像"
        ],
        useCases: [
            "商业报告和演示",
            "科学研究数据展示",
            "市场分析和趋势可视化",
            "教育和培训材料制作"
        ],
        howToUse: "上传您的数据文件（CSV、Excel等），AI将分析数据结构并推荐合适的可视化方式。您可以调整参数和样式，然后导出或分享结果。"
    },
    {
        id: 5,
        name: "AI视频编辑器",
        category: "video",
        categoryName: "视频处理",
        description: "智能视频编辑工具，自动剪辑、添加特效、生成字幕，让视频创作变得简单",
        image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        url: "https://example.com/video-editor",
        features: [
            "AI智能剪辑",
            "自动生成和翻译字幕",
            "场景检测和分割",
            "风格化滤镜和特效"
        ],
        useCases: [
            "社交媒体短视频创作",
            "产品演示和营销视频",
            "教育和培训内容",
            "个人记录和Vlog制作"
        ],
        howToUse: "上传原始视频素材，选择自动剪辑或手动编辑模式。AI可以自动识别精彩片段，添加转场和特效，生成字幕。您可以进一步调整结果并导出不同格式和分辨率。"
    },
    {
        id: 6,
        name: "智能翻译助手",
        category: "nlp",
        categoryName: "自然语言处理",
        description: "基于先进AI的翻译工具，支持多种语言，保留原文语境和专业术语的准确性",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        url: "https://example.com/translator",
        features: [
            "支持100+种语言翻译",
            "保留原文格式和排版",
            "专业术语库支持",
            "文化语境适应能力"
        ],
        useCases: [
            "国际商务文档翻译",
            "学术论文和研究资料翻译",
            "网站和应用本地化",
            "多语言沟通和交流"
        ],
        howToUse: "上传文档或直接输入文本，选择源语言和目标语言，AI将在保留原始格式的同时进行准确翻译。支持专业领域术语的自定义和记忆功能。"
    }
];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 加载所有工具
    loadTools('all');
    
    // 分类筛选事件
    document.getElementById('category-menu').addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'A') {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            loadTools(category);
        }
    });
    
    // 搜索功能
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const filteredTools = toolsData.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) || 
                tool.description.toLowerCase().includes(searchTerm)
            );
            displayTools(filteredTools);
        } else {
            loadTools('all');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 模态框关闭事件
    const modal = document.getElementById('tool-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// 加载工具卡片
function loadTools(category) {
    let filteredTools;
    
    if (category === 'all') {
        filteredTools = toolsData;
    } else {
        filteredTools = toolsData.filter(tool => tool.category === category);
    }
    
    displayTools(filteredTools);
}

// 显示工具卡片
function displayTools(tools) {
    const toolsContainer = document.getElementById('tools-container');
    toolsContainer.innerHTML = '';
    
    if (tools.length === 0) {
        toolsContainer.innerHTML = '<p class="no-results">没有找到匹配的工具</p>';
        return;
    }
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <img src="${tool.image}" alt="${tool.name}" class="tool-image">
            <div class="tool-content">
                <h4>${tool.name}</h4>
                <p>${tool.description}</p>
                <div class="tool-links">
                    <span class="tool-category">${tool.categoryName}</span>
                    <a href="#" class="view-details" data-id="${tool.id}">查看详情</a>
                </div>
            </div>
        `;
        
        toolsContainer.appendChild(toolCard);
        
        // 为每个卡片添加详情查看事件
        const viewButton = toolCard.querySelector('.view-details');
        viewButton.addEventListener('click', function(e) {
            e.preventDefault();
            const toolId = parseInt(this.getAttribute('data-id'));
            showToolDetails(toolId);
        });
    });
}

// 显示工具详情
function showToolDetails(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;
    
    const toolDetails = document.getElementById('tool-details');
    toolDetails.innerHTML = `
        <h2>${tool.name}</h2>
        <div class="detail-section">
            <h3>功能描述</h3>
            <p>${tool.description}</p>
        </div>
        <div class="detail-section">
            <h3>主要功能</h3>
            <ul>
                ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <div class="detail-section">
            <h3>使用场景</h3>
            <ul>
                ${tool.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
            </ul>
        </div>
        <div class="detail-section">
            <h3>使用方法</h3>
            <p>${tool.howToUse}</p>
        </div>
        <a href="${tool.url}" target="_blank" class="tool-btn">访问工具</a>
    `;
    
    document.getElementById('tool-modal').style.display = 'block';
}