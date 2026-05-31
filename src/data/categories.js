import B from '../utils/assetUrl';

export const CATEGORIES = [
    {
        id: 'visual',
        label: 'Visual Planning',
        labelZh: '視覺規劃',
        accentBg: '#3ec795',
        accentText: '#1c2525',
        hoverColor: '#4df2b6',
        img1: `${B}/images/homepage/1-1.png`,
        img2: `${B}/images/homepage/1-2.png`,
        projects: [
            {
                title: '視覺規劃',
                rows: [
                    { key: '1', value: '依照客戶類別統整視覺規劃流程' },
                    { key: '2', value: '產品及網頁風格分析、製作設計企劃' },
                    { key: '3', value: '製作Wireframes' },
                    { key: '4', value: '設計稿製作及原型產出' },
                ],
                images: [`${B}/images/plan/01.png`],
            },
            {
                title: '網頁規劃',
                rows: [
                    {
                        key: '1',
                        value: '依照行銷企劃內容分類資料層級、商品內容',
                    },
                    {
                        key: '2',
                        value: '製作網站架構表\n包含區塊名稱、產品內容、圖片/網站連結及class/id名稱',
                    },
                ],
                images: [`${B}/images/plan/02.png`],
            },
            {
                title: '行銷企劃',
                rows: [
                    { key: '1', value: '根據品牌過往內容進行SWOT分析' },
                    { key: '2', value: '根據顧客消費趨勢製作年、季度行銷活動' },
                    {
                        key: '3',
                        value: '企劃成本、預算分配、各項活動所需之詳細內容：\n宣傳網站、地點、視覺設計、活動行程',
                    },
                ],
                images: [`${B}/images/plan/03.png`],
            },
        ],
    },
    {
        id: 'web',
        label: 'Web Design',
        labelZh: '網頁設計',
        accentBg: '#738d8d',
        accentText: '#ffffff',
        hoverColor: '#8DA4A4',
        img1: `${B}/images/homepage/2-1.png`,
        img2: `${B}/images/homepage/2-2.png`,
        projects: [
            {
                title: '活動網頁設計與切版',
                subtitle: '誠品線上夏日活動',
                link: {
                    label: 'Fun夏日連結',
                    href: 'https://szweijin.github.io/summer/',
                },
                rows: [
                    {
                        key: '製作軟體、技術',
                        value: 'Figma / Illustrator / Photoshop / HTML / CSS（RWD） / Javascript',
                    },
                    { key: '視覺主題', value: '夏日海灘、海洋素材電繪' },
                ],
                images: [`${B}/images/web_design/A-01.png`],
            },
            {
                title: 'C端網站設計',
                subtitle: '原味旅遊',
                rows: [
                    {
                        key: '目標',
                        value: '為深入地方文化旅遊做統整販售的旅遊商品網站',
                    },
                    { key: '設計軟體', value: 'Figma / Illustrator' },
                    {
                        key: '設計流程',
                        value: '1. 分析各大旅遊業者官方網站資訊架構\n2. 整理優缺點、統整網站資訊架構表\n3. 互動模式設計（登入/註冊、購物車、收藏、分享、訂購頁面互動）\n4. wireframe製作與修改\n5. 視覺規格表制定與模型製作',
                    },
                ],
                images: [
                    `${B}/images/web_design/B-01.png`,
                    `${B}/images/web_design/B-02.png`,
                    `${B}/images/web_design/B-03.png`,
                    `${B}/images/web_design/B-04.png`,
                    `${B}/images/web_design/B-05.png`,
                ],
            },
            {
                title: '形象網頁Redesign',
                subtitle: '台東熱氣球嘉年華',
                rows: [
                    { key: '設計軟體', value: 'Figma / Illustrator' },
                    {
                        key: '設計流程',
                        value: '1. 原網站資訊架構與層級排列分析\n2. 調整網站層級架構\n3. 視覺排版wireframe製作（RWD）\n4. 色彩系統與圖標設計\n5. 視覺規格表制定與模型製作',
                    },
                ],
                images: [
                    `${B}/images/web_design/C-01.png`,
                    `${B}/images/web_design/C-02.png`,
                    `${B}/images/web_design/C-03.jpg`,
                    `${B}/images/web_design/C-04.png`,
                ],
            },
            {
                title: '一頁式活動網頁設計',
                subtitle: '衝浪店家活動網頁',
                rows: [
                    {
                        key: '設計軟體',
                        value: 'Figma / Illustrator / Photoshop',
                    },
                    {
                        key: '設計流程',
                        value: '1. 活動資訊彙整\n2. 資訊層級排列（優先重點調整）\n3. 設計排版\n4. 整體調整\n5. code切版（RWD）',
                    },
                ],
                images: [`${B}/images/web_design/D-01.png`],
            },
        ],
    },
    {
        id: 'logo',
        label: 'Logo Design',
        labelZh: 'LOGO 設計',
        accentBg: '#313131',
        accentText: '#ffffff',
        hoverColor: '#414141',
        img1: `${B}/images/homepage/3-1.png`,
        img2: `${B}/images/homepage/3-2.png`,
        projects: [
            {
                title: '逐浪設計\nSWELLS Design',
                rows: [
                    { key: '類別', value: '設計工作室' },
                    { key: '製作時間', value: '2023' },
                    {
                        key: '設計理念',
                        value: '出自台東，以自然永恆為出發點，打造民宿露營、咖啡廳等業主\n想根據在地空間打造自己的設計工作室\n以（永恆、無限、海浪、身份）為關鍵字進行設計',
                    },
                ],
                images: [`${B}/images/LOGO/01.png`],
            },
            {
                title: 'MROZEN',
                rows: [
                    { key: '類別', value: '餐飲工作室' },
                    { key: '製作時間', value: '2023' },
                    {
                        key: '設計理念',
                        value: '使用品牌創始人Merry的首字母加上frozen（冷凍）等字樣\n配上冷凍會出現的冰霜及冰淇淋湯匙\n表達耗時的製作工程及包裝主要概念的環保湯匙',
                    },
                    {
                        key: '平面設計',
                        value: '美式風格為主題創作\nMrozen來自台灣，以主打盒裝冰淇淋以及禮盒為重點\n使用鮮豔色彩，打造新品牌的活力感',
                    },
                ],
                images: [`${B}/images/LOGO/02.png`],
            },
            {
                title: 'Renees notes world',
                rows: [
                    { key: '類別', value: '線上知識行銷品牌' },
                    { key: '製作時間', value: '2023' },
                    {
                        key: '設計理念',
                        value: '以Renee的R為出發點\n加上代表手寫筆記時使用鋼筆做筆記，會出現的點和銳利線條\n傳達出筆記知識的傳播與紀錄',
                    },
                    {
                        key: '主題式色彩',
                        value: '以左至右，分別用不同主題色代表各領域的知識：\n設計 ｜ UIUX/網頁 ｜ 食譜 ｜ 語言 ｜ 電影/音樂/書籍',
                    },
                ],
                images: [`${B}/images/LOGO/03.png`],
            },
            {
                title: 'Clown Skull',
                link: {
                    label: 'facebook',
                    href: 'https://www.facebook.com/people/Clown-Skull-NFT/100083231887242/?locale=ms_MY',
                },
                rows: [
                    { key: '類別', value: 'NFT（元宇宙）' },
                    { key: '製作時間', value: '2021' },
                    {
                        key: '設計理念',
                        value: '以品牌名稱縮寫CS做出骷髏輪廓\n希望能一眼視出NFT的主軸為小丑外型\n使用黑色、紅色帶出撲克牌的卡牌色系\n傳達此NFT是以隨機配件的卡牌式收藏',
                    },
                    {
                        key: '關於Clown Skull NFT',
                        value: '來自台灣的新品牌，品牌理念是希望可以串聯線上到線下\n期望讓元宇宙進到人們的真正生活',
                    },
                ],
                images: [
                    `${B}/images/LOGO/04.png`,
                    `${B}/images/LOGO/clown_skull.gif`,
                ],
            },
            {
                title: 'Cloud Plates',
                rows: [
                    { key: '類別', value: '餐飲品牌' },
                    { key: '製作時間', value: '2019' },
                    {
                        key: '設計理念',
                        value: '以線上販售為出發點，用CP做出雲朵的輪廓\n色系使用：帶有科技感的藍綠色、代表食物的紅色\n雙主色設計',
                    },
                    {
                        key: '品牌運作',
                        value: '為因應現今快、狠、準的飲食習慣\n打造可快速加熱的食材包產品，並使用新鮮保存販售方式',
                    },
                ],
                images: [`${B}/images/LOGO/05.png`],
            },
            {
                title: '尚讚農遊',
                rows: [
                    { key: '類別', value: '社區發展協會' },
                    { key: '製作時間', value: '2022' },
                    {
                        key: '設計理念',
                        value: 'Logo的圖樣以「尚」的字型和「讚」的圖形表達做結合\n中間的口部用代表農夫的草帽，以及左上角用新苗的圖形融合\n帶出農遊企業的主視覺',
                    },
                ],
                images: [`${B}/images/LOGO/06.png`],
            },
            {
                title: '職人',
                rows: [
                    { key: '類別', value: '舞團發表活動' },
                    { key: '製作時間', value: '2023' },
                    {
                        key: '設計理念',
                        value: '以中文字「職人」字形作出發點\n將斜線以較粗的方式呈現，表現跳舞時手腳伸展的樣貌\n並且職人二字是專業、俐落、精準的感受 — 故以線條作為重點發展',
                    },
                ],
                images: [`${B}/images/LOGO/07.png`],
            },
            {
                title: '猴哩餃',
                rows: [
                    { key: '類別', value: '餐飲品牌' },
                    { key: '製作時間', value: '2021' },
                    {
                        key: '設計理念',
                        value: '結合猴子與餃子的外型\n讓顧客一眼看到帶了廚師帽的可愛猴子\n體現活潑可愛的品牌形象',
                    },
                ],
                images: [`${B}/images/LOGO/08.png`],
            },
            {
                title: 'Kavalan wave',
                rows: [
                    { key: '類別', value: '衝浪品牌' },
                    { key: '製作時間', value: '2021' },
                    {
                        key: '設計理念',
                        value: '因老闆為台東原住民（排灣族）於是\n使用文化代表的菱形紋加上海浪的波動\n設計出品牌新一季的視覺Logo',
                    },
                ],
                images: [`${B}/images/LOGO/09.png`],
            },
        ],
    },
    {
        id: 'graphic',
        label: 'Graphic Design',
        labelZh: '平面設計',
        accentBg: '#cdc55d',
        accentText: '#1c2525',
        hoverColor: '#fff896',
        img1: `${B}/images/homepage/4-1.png`,
        img2: `${B}/images/homepage/4-2.png`,
        projects: [
            {
                title: '資訊圖表',
                subtitle: 'TVBS實習：一年三個月',
                note: '每日製作4-5張以上新聞圖卡及CG',
                rows: [
                    {
                        key: '製作規格',
                        value: '按照公司制定之規格表、文字與人物校對、顏色的搭配與時事使用',
                    },
                    {
                        key: '設計溝通',
                        value: '同時與編輯、記者電話溝通手稿與內容放置，確認所有內容正確後發出',
                    },
                    {
                        key: '素材使用',
                        value: '善用公司購買之素材的同時，創作新的圖標與插圖供同事與個人使用',
                    },
                    {
                        key: '技術學習',
                        value: '任務結束之餘，製作主管指定作業（包含動態、字體、AI運用設計）',
                    },
                ],
                images: [`${B}/images/graphic_design/01.png`],
            },
            {
                title: '書籍平面設計',
                rows: [],
                images: [`${B}/images/graphic_design/02.png`],
            },
            {
                title: '海報與廣告稿',
                rows: [],
                images: [`${B}/images/graphic_design/03.png`],
            },
        ],
    },
    {
        id: 'type',
        label: 'Typography',
        labelZh: '字體設計',
        accentBg: '#c84605',
        accentText: '#ffffff',
        hoverColor: '#ff5500',
        img1: `${B}/images/homepage/5-1.png`,
        img2: `${B}/images/homepage/5-2.png`,
        projects: [
            {
                title: '活動海報字體設計',
                rows: [],
                images: [`${B}/images/font/01.png`],
            },
            {
                title: 'LOGO字體設計',
                rows: [],
                images: [`${B}/images/font/02.png`],
            },
            {
                title: '文創藝術字體設計',
                rows: [],
                images: [`${B}/images/font/03.png`],
            },
            {
                title: '貼文字體設計',
                rows: [],
                images: [`${B}/images/font/04.png`],
            },
        ],
    },
    {
        id: 'illu',
        label: 'Illustration',
        labelZh: '電繪插圖',
        accentBg: '#b12a2a',
        accentText: '#ffffff',
        hoverColor: '#E43130',
        img1: `${B}/images/homepage/6-1.png`,
        img2: `${B}/images/homepage/6-2.png`,
        projects: [
            {
                title: '簡約風格插畫',
                rows: [
                    { key: '主題', value: 'Love yourself' },
                    { key: '關鍵字', value: '線條、圖塊、仙人掌、連結' },
                ],
                images: [
                    `${B}/images/illu/A-01.png`,
                    `${B}/images/illu/A-02.png`,
                    `${B}/images/illu/A-03.png`,
                    `${B}/images/illu/A-04.png`,
                ],
            },
            {
                title: '繽紛風格插畫',
                rows: [
                    { key: '主題', value: 'Our friends' },
                    { key: '關鍵字', value: '貓貓狗狗、花朵、活潑、正向' },
                ],
                images: [
                    `${B}/images/illu/A-05.png`,
                    `${B}/images/illu/A-06.png`,
                    `${B}/images/illu/A-07.png`,
                    `${B}/images/illu/A-08.png`,
                ],
            },
            {
                title: '角色設計插畫',
                rows: [
                    { key: '主題', value: '巫鏡' },
                    { key: '關鍵字', value: '魔法、手繪、動畫腳本' },
                ],
                images: [
                    `${B}/images/illu/B-01.png`,
                    `${B}/images/illu/B-02.jpg`,
                    `${B}/images/illu/B-03.jpg`,
                    `${B}/images/illu/B-04.png`,
                    `${B}/images/illu/B-05.jpg`,
                ],
            },
        ],
    },
];
