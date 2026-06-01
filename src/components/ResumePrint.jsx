import { createPortal } from 'react-dom';
import B from '../utils/assetUrl';
import styles from './ResumePrint.module.css';

const WORK = [
    { role: '全端工程師', company: '二一零零科技', period: '2026/03 ~ 2026/06', tech: 'Python / C# / Docker' },
    { role: '全端工程師', company: '台灣娜珂黛肌美容事業', period: '2025/01 ~ 2025/07', tech: '自動化系統 / GCP' },
    { role: '網頁設計師', company: '台灣娜珂黛肌美容事業', period: '2024/08 ~ 2024/12', tech: 'HTML / CSS / JS / RWD' },
    { role: '設計實習生', company: 'TVBS 動畫設計組', period: '2023/02 ~ 2024/05', tech: '每日新聞圖卡、CG 製作' },
];

const PROJECTS = [
    { title: '葉片病害 AI 系統', period: '2025/11 ~ 2025/12', lines: ['CNN + YOLO 兩階段影像辨識', 'React + TypeScript / FastAPI', 'Docker + Cloudinary + Logging'] },
    { title: 'ML & DL 台股預測', period: '2025/11 ~ 2025/12', lines: ['多模型比較 / 迴歸 + 分類', 'XGBoost / LightGBM / PyTorch', '完整 MLOps Pipeline 流程'] },
    { title: '台股因子 ETL & 回測', period: '2025/12 ~ 2026/01', lines: ['單/多因子量化策略回測', 'yfinance + finlab 串接', 'Python 自動化 Pipeline'] },
];

const HARD_SKILLS = [
    { label: '後端', text: 'Python、C#、Django、Flask、FastAPI、ASP.NET、RESTful API' },
    { label: '前端', text: 'React + TypeScript、JavaScript、HTML / CSS (SCSS)、Tailwind CSS、RWD' },
    { label: '資料 & AI', text: 'Pandas、NumPy、scikit-learn、PyTorch、TensorFlow、YOLO、XGBoost、LightGBM、ETL Pipeline、MLOps' },
    { label: '部署', text: 'Docker、GCP、Azure、Git、CI/CD、PostgreSQL、MySQL、BigQuery' },
];

const SOFT_SKILLS = [
    { label: '行動力', text: 'ITS Python 認證、數據分析班、自主完成多項全端專案、設計接案 10+ 件' },
    { label: '跨域整合', text: '設計 × 工程雙背景、UI/UX 與系統架構兼顧、從需求到上線獨立執行' },
    { label: '協作溝通', text: '遠端非同步跨國協作、跨部門需求確認溝通、清楚文件與版控習慣' },
];

function PrintContent() {
    return (
        <div id="resume-print" className={styles.wrap}>
            <header className={styles.header}>
                <img
                    src={`${B}/images/homepage/Headshot.jpg`}
                    alt="Kimie"
                    className={styles.headshot}
                />
                <div>
                    <h1 className={styles.name}>
                        金思緯<span className={styles.nameEn}>Kimie</span>
                    </h1>
                    <p className={styles.role}>全端工程師</p>
                </div>
                <div className={styles.contact}>
                    <div>0907 - 494 - 064</div>
                    <div>kimie.log@gmail.com</div>
                    <div>國立臺北商業大學 資管系 二技</div>
                </div>
            </header>

            <hr className={styles.divider} />

            <div className={styles.body}>
                <div className={styles.left}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>About Me</h2>
                        <p className={styles.aboutText}>
                            前後端 · AI 整合 · 雲端部署，具備完整全端實務開發經驗。設計 × 工程雙背景，重視產品思維，自主開發 + 遠端跨國非同步協作。
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Work Experience</h2>
                        {WORK.map(({ role, company, period, tech }) => (
                            <div key={period + company} className={styles.entry}>
                                <div className={styles.entryRow}>
                                    <span className={styles.entryRole}>{role}</span>
                                    <span className={styles.entryPeriod}>{period}</span>
                                </div>
                                <div className={styles.entryCompany}>{company}</div>
                                <div className={styles.entryTech}>{tech}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Projects</h2>
                        {PROJECTS.map(({ title, period, lines }) => (
                            <div key={title} className={styles.entry}>
                                <div className={styles.entryRow}>
                                    <span className={styles.entryRole}>{title}</span>
                                    <span className={styles.entryPeriod}>{period}</span>
                                </div>
                                {lines.map((l) => (
                                    <div key={l} className={styles.entryTech}>{l}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Hard Skills</h2>
                        {HARD_SKILLS.map(({ label, text }) => (
                            <div key={label} className={styles.skillRow}>
                                <span className={styles.skillLabel}>{label}</span>
                                <span className={styles.skillText}>{text}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Soft Skills</h2>
                        {SOFT_SKILLS.map(({ label, text }) => (
                            <div key={label} className={styles.skillRow}>
                                <span className={styles.skillLabel}>{label}</span>
                                <span className={styles.skillText}>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ResumePrint() {
    return createPortal(<PrintContent />, document.body);
}
