export const RESUME_CARDS = [
    {
        row: 1,
        cards: [
            { type: 'pic' },
            {
                type: 'single',
                flex: 1.5,
                title: 'Personal Information',
                hoverBg: '#d4fff9',
                highlight: '金思緯',
                afterHighlight: ' Kimie',
                lines: [
                    'UI/UX 設計師 × 全端工程師 × AI 整合',
                    '國立臺北商業大學 資管系',
                    '中國文化大學 廣告系',
                    '0907 - 494 - 064',
                    'kimie.log@gmail.com',
                ],
            },
            {
                type: 'work',
                flex: 4,
                title: 'Work Experience',
                hoverBg: '#e0dcff',
                cols: [
                    {
                        heading: '全端工程師',
                        lines: [
                            '二一零零科技',
                            '2026/03 ~ 2026/06',
                            '前後端架設與串接實現專案 MVP',
                            '容器化部署與測試環境建置',
                        ],
                        tags: ['React', 'Python', 'C#', 'Docker'],
                    },
                    {
                        heading: '全端工程師',
                        lines: [
                            '台灣娜珂黛肌美容事業',
                            '2025/01 ~ 2025/07',
                            '建置 API 串接與資料自動化系統',
                            'GCP 資料流程設計與雲端環境維護',
                        ],
                        tags: ['Python', 'GCP', 'Postman'],
                    },
                    {
                        heading: '網頁設計師',
                        lines: [
                            '台灣娜珂黛肌美容事業',
                            '2024/08 ~ 2024/12',
                            '獨立完成網頁設計稿規劃與視覺',
                            'RWD 前端實作，完整上線品牌官網',
                        ],
                        tags: ['HTML', 'CSS', 'JS', 'RWD'],
                    },
                    {
                        heading: '設計實習生',
                        lines: [
                            'TVBS 動畫設計組',
                            '2023/02 ~ 2024/05',
                            '新聞素材視覺設計與動畫製作',
                            '設計素材製作、資訊排版設計',
                        ],
                        tags: ['Illustration', 'Photoshop', 'AE'],
                    },
                ],
            },
        ],
    },
    {
        row: 2,
        cards: [
            {
                type: 'single',
                flex: 2,
                title: 'About Me',
                hoverBg: '#fffdcf',
                highlight: 'UI/UX × 全端 × AI',
                lines: [
                    '具備設計素養，能將需求轉化為清晰的設計稿',
                    '再由設計稿轉為符合實際開發的產品，全程負責',
                    '實作過生成式 AI 串接與影像辨識系統，理解模型應用',
                    '前後端皆能開發，熟悉效能優化與雲端部署',
                    '接案 10+ 件、5+ 專案獨立上線，持續交付實績',
                ],
            },
        ],
    },
    {
        row: 3,
        cards: [
            {
                type: 'work',
                flex: 1,
                title: 'Soft Skills',
                hoverBg: '#ffdbdb',
                cols: [
                    {
                        heading: '專業能力',
                        lines: [
                            'ITS Python 國際認證',
                            '自主研發並完整部署 AI 專案',
                            '獨立完成 5+ 專案上線',
                            '設計接案 10+ 件，持續累積實績',
                            '快速自學新技術，具備學習力與執行力',
                        ],
                    },
                    {
                        heading: '技術縱深',
                        lines: [
                            '生成式 AI 串接、影像辨識模型應用',
                            '從 UI 設計稿到 Production 全程負責',
                            '前端效能優化、Vite 打包與測試配置',
                            'Docker 容器化、GCP 雲端部署',
                            'MLOps / DevOps 實務基礎',
                        ],
                    },
                    {
                        heading: '協作溝通',
                        lines: [
                            '遠端跨國非同步協作經驗（在日同事）',
                            '跨部門需求分析 → 設計 → 實作完整流程',
                            '能將技術邏輯轉化為設計師易懂的語言',
                            'Git 版控 + 完整開發文件習慣',
                            '積極主動回饋與溝通，確保專案順利推進',
                        ],
                    },
                ],
            },
        ],
    },
    {
        row: 4,
        cards: [
            {
                type: 'work',
                flex: 1,
                title: 'Projects',
                hoverBg: '#d0ffe4',
                cols: [
                    {
                        heading: '葉片病害 AI 系統',
                        lines: [
                            '2025/11 ~ 2025/12',
                            '專案介紹：結合 AI 模型的葉片病害辨識系統，提供使用者快速診斷與治療建議',
                            '使用者輸入設計：支援上傳、相機即拍、自動裁切等多種影像輸入方式',
                            '功能：帳號管理、辨識歷史、統計分析、PDF 匯出',
                            'React 19 前端 + Flask 後端，前後端分離架構',
                            'PostgreSQL + Redis 快取，Cloudinary 圖片儲存',
                            '影像辨識兩階段：CNN + YOLO 兩階段檢測流程，先定位葉片位置再進行病害分類',
                        ],
                        tags: [
                            'MobileNetV3',
                            'YOLOv11',
                            'EDSR',
                            'React 19',
                            'TypeScript',
                            'Flask',
                            'PostgreSQL',
                            'Redis',
                            'Cloudinary',
                        ],
                        video: 'https://www.youtube.com/embed/QnfldeAKmGE',
                    },
                ],
            },
        ],
    },
];
