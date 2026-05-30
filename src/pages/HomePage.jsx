import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from '../components/TypeWriter';
import styles from './HomePage.module.css';
import B from '../utils/assetUrl';

const projects = [
    {
        path: '/plan',
        img1: `${B}/images/homepage/1-1.png`,
        img2: `${B}/images/homepage/1-2.png`,
        label: '視覺規劃',
        hoverColor: '#4df2b6',
    },
    {
        path: '/web-design',
        img1: `${B}/images/homepage/2-1.png`,
        img2: `${B}/images/homepage/2-2.png`,
        label: '網頁設計',
        hoverColor: '#8DA4A4',
    },
    {
        path: '/logo',
        img1: `${B}/images/homepage/3-1.png`,
        img2: `${B}/images/homepage/3-2.png`,
        label: 'LOGO設計',
        hoverColor: '#414141',
    },
    {
        path: '/graphic-design',
        img1: `${B}/images/homepage/4-1.png`,
        img2: `${B}/images/homepage/4-2.png`,
        label: '平面設計',
        hoverColor: '#fff896',
    },
    {
        path: '/font',
        img1: `${B}/images/homepage/5-1.png`,
        img2: `${B}/images/homepage/5-2.png`,
        label: '字體設計',
        hoverColor: '#ff5500',
    },
    {
        path: '/illu',
        img1: `${B}/images/homepage/6-1.png`,
        img2: `${B}/images/homepage/6-2.png`,
        label: '電繪插圖',
        hoverColor: '#E43130',
    },
];

const resumeCards = [
    {
        row: 1,
        cards: [
            { type: 'pic' },
            {
                type: 'info',
                sizeClass: 'w230',
                title: 'Personal Information',
                hoverBg: '#a1f0e6',
                content: (
                    <>
                        <span className={styles.highlight}>金思緯</span> JINJIN
                        <br />
                        大同大學 媒體設計
                        <br />
                        2001.09.14(22)
                        <br />
                        0907-494-064
                        <br />
                        szweiforwork@gmail.com
                    </>
                ),
            },
            {
                type: 'work',
                sizeClass: 'w730',
                title: 'Work Experience',
                hoverBg: '#a1f0c3',
                cols: [
                    <>
                        <span className={styles.highlight}>設計實習生</span>
                        <br />
                        TVBS 動畫設計組
                        <br />
                        2023/02 ~ 2024/05
                    </>,
                    <>
                        <span className={styles.highlight}>社群美編</span>
                        <br />
                        極酷衝浪俱樂部
                        <br />
                        2020 ~ 2023
                    </>,
                    <>
                        <span className={styles.highlight}>NFT設計師</span>
                        <br />
                        Clown skull
                        <br />
                        2022/01 ~ 06
                    </>,
                    <>
                        <span className={styles.highlight}>助理輔導員</span>
                        <br />
                        中國文化大學
                        <br />
                        2022 ~ 2023/02
                    </>,
                ],
            },
        ],
    },
    {
        row: 2,
        cards: [
            {
                type: 'single',
                sizeClass: 'w400',
                title: 'About Me',
                hoverBg: '#f0eca1',
                content: (
                    <>
                        <span className={styles.highlight}>自我介紹</span>
                        <br />
                        我是思緯來自台東大武
                        <br />
                        目前已累積三年設計經驗
                        <br />
                        熟悉視覺設計的流程與跨部門溝通
                        <br />
                        期望以我在網站視覺設計與基礎資訊架構能力之上
                        <br />
                        掌握公司工作，並獨立執行網站設計作業
                    </>
                ),
            },
            {
                type: 'work',
                sizeClass: 'w800',
                title: 'Hard Skills',
                hoverBg: '#f0c3a1',
                cols: [
                    <>
                        <span className={styles.highlight}>設計</span>
                        <br />
                        Adobe系列軟體
                        <br />
                        (AI/PS/AE/Pr/XD)
                        <br />
                        Figma
                        <br />
                        WordPress
                    </>,
                    <>
                        <span className={styles.highlight}>企劃</span>
                        <br />
                        行銷企劃案撰寫
                        <br />
                        網頁規格、視覺規劃書
                        <br />
                        影片腳本撰寫、企劃發想
                    </>,
                    <>
                        <span className={styles.highlight}>程式設計</span>
                        <br />
                        HTML、RWD
                        <br />
                        CSS (SCSS/SASS)、Bootstrap
                        <br />
                        Javascript、jQuery
                    </>,
                ],
            },
        ],
    },
    {
        row: 3,
        cards: [
            {
                type: 'work',
                sizeClass: 'w800',
                title: 'Soft Skills',
                hoverBg: '#fbb5b5',
                cols: [
                    <>
                        <span className={styles.highlight}>行動能力</span>
                        <br />
                        考取餐飲證照3張
                        <br />
                        設計接案10件以上
                        <br />
                        自學設計到企業實習
                        <br />
                        自學網頁、架設
                    </>,
                    <>
                        <span className={styles.highlight}>領導能力</span>
                        <br />
                        成果展美宣總長
                        <br />
                        系學會、社團美宣長
                        <br />
                        志工及返鄉服務美宣組長
                        <br />
                        小組行銷企劃組長兼報告
                    </>,
                    <>
                        <span className={styles.highlight}>溝通能力</span>
                        <br />
                        能獨立作業溝通設計稿
                        <br />
                        TVBS部門間設計稿溝通順暢
                        <br />
                        在兩小時內做出三張以上資訊圖表
                    </>,
                ],
            },
            {
                type: 'single',
                sizeClass: 'w400',
                title: 'Design Project',
                hoverBg: '#bcd5f4',
                content: (
                    <>
                        NFT品牌形象視覺製作、網頁設計
                        <br />
                        樂水企業社相關品牌視覺設計、官方帳號管理
                        <br />
                        鄉公所交流活動、運動會logo設計
                        <br />
                        綠島民宿地圖平面設計
                        <br />
                        Morzen冰淇淋品牌視覺設計
                    </>
                ),
            },
        ],
    },
];

function ResumeCard({ card }) {
    if (card.type === 'pic') {
        return (
            <div className={`${styles.cardPic} ${styles.w230}`}>
                <img
                    src={`${B}/images/homepage/Headshot.jpg`}
                    alt='JINJIN'
                />
            </div>
        );
    }

    if (card.type === 'work') {
        return (
            <div
                className={`${styles.card} ${styles[card.sizeClass]}`}
                style={{ '--hover-bg': card.hoverBg }}
            >
                <span className={styles.cardLabel}>{card.title}</span>
                <div className={styles.cardCols}>
                    {card.cols.map((col, i) => (
                        <p
                            key={i}
                            className={styles.cardColItem}
                        >
                            {col}
                        </p>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div
            className={`${styles.card} ${styles[card.sizeClass]}`}
            style={{ '--hover-bg': card.hoverBg }}
        >
            <span className={styles.cardLabel}>{card.title}</span>
            <p className={styles.cardContent}>{card.content}</p>
        </div>
    );
}

export default function HomePage() {
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onScroll = () => {
            const idx = Math.round(el.scrollTop / el.clientHeight);
            setActiveSection(idx);
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => el.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (i) => {
        const el = containerRef.current;
        if (el) el.scrollTo({ top: i * el.clientHeight, behavior: 'smooth' });
    };

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <ul>
                    {[
                        { label: 'About JINJIN', idx: 0 },
                        { label: 'Design Project', idx: 2 },
                        { label: 'Future Plan', idx: 3 },
                    ].map(({ label, idx }) => (
                        <li
                            key={label}
                            className={
                                activeSection === idx ? styles.navActive : ''
                            }
                        >
                            <button onClick={() => scrollTo(idx)}>
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div
                ref={containerRef}
                className={styles.container}
            >
                <section className={`${styles.section} ${styles.page01}`}>
                    <TypeWriter />
                </section>

                <section className={`${styles.section} ${styles.page02}`}>
                    <div className={styles.personal}>
                        {resumeCards.map(({ row, cards }) => (
                            <div
                                key={row}
                                className={styles.personalRow}
                            >
                                {cards.map((card, i) => (
                                    <ResumeCard
                                        key={i}
                                        card={card}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={`${styles.section} ${styles.page03}`}>
                    <div className={styles.block}>
                        {projects.map(
                            ({ path, img1, img2, label, hoverColor }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={styles.projectLink}
                                    style={{ '--hover-color': hoverColor }}
                                >
                                    <img
                                        src={img1}
                                        alt={label}
                                        className={styles.imgDefault}
                                    />
                                    <img
                                        src={img2}
                                        alt={label}
                                        className={styles.imgHover}
                                    />
                                    <p className={styles.projectLabel}>
                                        {label}
                                    </p>
                                </Link>
                            )
                        )}
                    </div>
                </section>

                <section className={`${styles.section} ${styles.page04}`}>
                    <div className={styles.future}>
                        {[
                            {
                                cls: styles.futureMe,
                                title: 'Personal',
                                items: [
                                    {
                                        h: '上班交通',
                                        list: [
                                            '機車、捷運從內湖通勤至公司',
                                            '9月底搬至公司附近',
                                        ],
                                    },
                                    {
                                        h: '健康',
                                        list: [
                                            '無任何身心疾病（已體檢）',
                                            '每週上健身房3-4次 保持體力及精神耐力',
                                        ],
                                    },
                                ],
                            },
                            {
                                cls: styles.futureWork,
                                title: 'Work',
                                items: [
                                    {
                                        h: '專業進修',
                                        list: [
                                            '參加職訓局的設計、程式相關在職課程',
                                            '任務之餘時間向同事請教工作可改進之處',
                                        ],
                                    },
                                    {
                                        h: '未來規劃',
                                        list: [
                                            '1-2年：累計工作經驗，提升專業能力',
                                            '3-5年：專案管理學習、建立人脈',
                                            '6-10年：成為領域專業人士',
                                        ],
                                    },
                                ],
                            },
                            {
                                cls: styles.futureDesign,
                                title: 'Design',
                                items: [
                                    {
                                        h: '設計進修',
                                        list: [
                                            '休假日趨勢學習及製作side project',
                                            '設計思考：產品規劃講座、課程參與',
                                        ],
                                    },
                                    {
                                        h: '新技術、設計趨勢',
                                        list: [
                                            '定期瀏覽新文章、保持新知識吸收',
                                            '確保每次專案能有新想法與嘗試性製作',
                                        ],
                                    },
                                ],
                            },
                        ].map(({ cls, title, items }) => (
                            <div
                                key={title}
                                className={`${styles.futureCard} ${cls}`}
                            >
                                <h3>{title}</h3>
                                <div className={styles.futureContent}>
                                    {items.map(({ h, list }) => (
                                        <div key={h}>
                                            <h4>{h}</h4>
                                            <ul>
                                                {list.map((li) => (
                                                    <li key={li}>{li}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
