import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import B from '../utils/assetUrl';
import TypeWriter from '../components/TypeWriter';
import Navbar from '../components/Navbar';
import SkillTagCloud from '../components/SkillTagCloud';
import ResumePrint from '../components/ResumePrint';
import CategorySection from '../components/CategorySection';
import { CATEGORIES } from '../data/categories';
import { RESUME_CARDS } from '../data/resumeCards';
import { FUTURE_PLAN } from '../data/futurePlan';
import styles from './HomeSection.module.css';

const SECTION_IDS = [
    'hero',
    'about',
    'projects',
    ...CATEGORIES.map((c) => c.id),
    'goals',
];

const allCards = RESUME_CARDS.flatMap((r) => r.cards);
const profileCard = allCards.find((c) => c.title === 'Personal Information');
const workCard = allCards.find((c) => c.title === 'Work Experience');
const aboutCard = allCards.find((c) => c.title === 'About Me');
const softCard = allCards.find((c) => c.title === 'Soft Skills');
const projectsCard = allCards.find((c) => c.title === 'Projects');

export default function HomeSection() {
    const [activeSection, setActiveSection] = useState('hero');
    const [contactOpen, setContactOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observers = SECTION_IDS.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach((obs) => obs?.disconnect());
    }, []);

    const isProjectsActive = [
        'projects',
        ...CATEGORIES.map((c) => c.id),
    ].includes(activeSection);

    return (
        <div className={styles.wrapper}>
            <Navbar
                activeSection={activeSection}
                isProjectsActive={isProjectsActive}
                onScrollTo={scrollTo}
            />

            {/* Hero */}
            <section
                id='hero'
                className={styles.hero}
            >
                <img
                    src={`${B}/images/homepage/MainRemotion.webp`}
                    alt=''
                    className={styles.heroBg}
                />
                <TypeWriter />
            </section>

            {/* About */}
            <section
                id='about'
                className={styles.about}
            >
                <div className={styles.personal}>
                    <div className={styles.resumeHeader}>
                        <div>
                            <h2 className={styles.resumeHeading}>
                                金思緯 · Kimie
                            </h2>
                            <p className={styles.resumeSubheading}>
                                全端工程師
                            </p>
                        </div>
                        <div className={styles.ctaButtons}>
                            <button
                                type='button'
                                className={styles.ctaPrimary}
                                onClick={() => globalThis.print()}
                            >
                                下載履歷 PDF
                            </button>
                            <button
                                type='button'
                                className={styles.ctaSecondary}
                                onClick={() => setContactOpen(true)}
                            >
                                聯絡我
                            </button>
                        </div>
                    </div>

                    <div className={styles.resumeGrid}>
                        {/* Profile */}
                        <div
                            className={`${styles.resumeBlock} ${styles.blockProfile}`}
                            style={{ '--hover-bg': profileCard.hoverBg }}
                        >
                            <span className={styles.blockLabel}>Profile</span>
                            <div className={styles.blockProfileInner}>
                                <img
                                    src={`${B}/images/homepage/Headshot.webp`}
                                    alt='Kimie'
                                    className={styles.blockPhoto}
                                />
                                <div className={styles.blockLines}>
                                    {profileCard.lines.map((l) => (
                                        <span
                                            key={l}
                                            className={styles.blockLine}
                                        >
                                            {l}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* About Me */}
                        <div
                            className={`${styles.resumeBlock} ${styles.blockAbout}`}
                            style={{ '--hover-bg': aboutCard.hoverBg }}
                        >
                            <span className={styles.blockLabel}>
                                {aboutCard.title}
                            </span>
                            <span className={styles.blockHighlight}>
                                {aboutCard.highlight}
                            </span>
                            <div className={styles.blockLines}>
                                {aboutCard.lines.map((l) => (
                                    <span
                                        key={l}
                                        className={styles.blockLine}
                                    >
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div
                            className={`${styles.resumeBlock} ${styles.blockWork}`}
                            style={{ '--hover-bg': workCard.hoverBg }}
                        >
                            <span className={styles.blockLabel}>
                                {workCard.title}
                            </span>
                            <div className={styles.blockCols}>
                                {workCard.cols.map(({ heading, lines, tags }) => (
                                    <div
                                        key={heading}
                                        className={styles.blockColItem}
                                    >
                                        <span
                                            className={styles.blockColHeading}
                                        >
                                            {heading}
                                        </span>
                                        {lines.map((l) => (
                                            <span
                                                key={l}
                                                className={styles.blockColLine}
                                            >
                                                {l}
                                            </span>
                                        ))}
                                        {tags && (
                                            <div className={styles.techTags}>
                                                {tags.map((t) => (
                                                    <span key={t} className={styles.techTag}>{t}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div
                            className={`${styles.resumeBlock} ${styles.blockSoft}`}
                            style={{ '--hover-bg': softCard.hoverBg }}
                        >
                            <span className={styles.blockLabel}>
                                {softCard.title}
                            </span>
                            <div className={styles.blockCols}>
                                {softCard.cols.map(({ heading, lines }) => (
                                    <div
                                        key={heading}
                                        className={styles.blockColItem}
                                    >
                                        <span
                                            className={styles.blockColHeading}
                                        >
                                            {heading}
                                        </span>
                                        {lines.map((l) => (
                                            <span
                                                key={l}
                                                className={styles.blockColLine}
                                            >
                                                {l}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Projects */}
                        <div
                            className={`${styles.resumeBlock} ${styles.blockProjects}`}
                            style={{ '--hover-bg': projectsCard.hoverBg }}
                        >
                            <span className={styles.blockLabel}>
                                {projectsCard.title}
                            </span>
                            <div className={styles.blockCols}>
                                {projectsCard.cols.map(({ heading, lines, tags, video }) => (
                                    <div
                                        key={heading}
                                        className={styles.blockColItem}
                                    >
                                        <span
                                            className={styles.blockColHeading}
                                        >
                                            {heading}
                                        </span>
                                        {lines.map((l) => (
                                            <span
                                                key={l}
                                                className={styles.blockColLine}
                                            >
                                                {l}
                                            </span>
                                        ))}
                                        {tags && (
                                            <div className={styles.techTags}>
                                                {tags.map((t) => (
                                                    <span key={t} className={styles.techTag}>{t}</span>
                                                ))}
                                            </div>
                                        )}
                                        {video && (
                                            <iframe
                                                className={styles.blockVideo}
                                                src={video}
                                                title={heading}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <SkillTagCloud />
                </div>
            </section>

            {/* Goals */}
            <section
                id='goals'
                className={styles.goals}
            >
                <div className={styles.goalsInner}>
                    <h2 className={styles.sectionHeading}>Future Plan</h2>
                    <div className={styles.future}>
                        {FUTURE_PLAN.map(({ clsKey, title, items }) => (
                            <div
                                key={title}
                                className={`${styles.futureCard} ${styles[clsKey]}`}
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
                </div>
            </section>

            {/* Works grid */}
            <section
                id='projects'
                className={styles.projectsSection}
            >
                <div className={styles.projectsSectionInner}>
                    <h2 className={styles.sectionHeading}>Works</h2>
                    <div className={styles.block}>
                        {CATEGORIES.map(
                            ({
                                id,
                                img1,
                                img2,
                                label,
                                labelZh,
                                hoverColor,
                            }) => (
                                <button
                                    key={id}
                                    className={styles.projectLink}
                                    style={{ '--hover-color': hoverColor }}
                                    onClick={() => scrollTo(id)}
                                >
                                    <img
                                        src={img1}
                                        alt={`${label} portfolio preview`}
                                        className={styles.imgDefault}
                                        loading='lazy'
                                    />
                                    <img
                                        src={img2}
                                        alt={`${label} portfolio detail`}
                                        className={styles.imgHover}
                                        loading='lazy'
                                    />
                                    <p className={styles.projectLabel}>
                                        <span className={styles.projectLabelEn}>
                                            {label}
                                        </span>
                                        <span className={styles.projectLabelZh}>
                                            {labelZh}
                                        </span>
                                    </p>
                                </button>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Category detail sections */}
            {CATEGORIES.map((cat) => (
                <CategorySection
                    key={cat.id}
                    category={cat}
                    onBackClick={() => scrollTo('projects')}
                />
            ))}

            <ResumePrint />

            {contactOpen && createPortal(
                <>
                    <button
                        className={styles.contactOverlay}
                        onClick={() => setContactOpen(false)}
                        aria-label="關閉聯絡視窗"
                    />
                    <dialog open aria-labelledby="contact-title" className={styles.contactModal}>
                        <button
                            className={styles.contactClose}
                            onClick={() => setContactOpen(false)}
                            aria-label="關閉"
                        >×</button>
                        <h3 id="contact-title" className={styles.contactTitle}>聯絡我</h3>
                        <a href="https://mail.google.com/mail/?view=cm&to=kimie.log@gmail.com" target="_blank" rel="noreferrer" className={styles.contactBtn}>
                            <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <rect x="2" y="4.5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                                <path d="M2 7.5l8 5.5 8-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 15.5l5-4.5M18 15.5l-5-4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.4"/>
                            </svg>
                            <span>kimie.log@gmail.com</span>
                        </a>
                        <a href="tel:0907494064" className={styles.contactBtn}>
                            <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M5 3.5c.4-.4 1.1-.4 1.5 0l2 2c.4.4.4 1.1 0 1.5l-.8.8a.6.6 0 0 0-.05.8 10.5 10.5 0 0 0 3.75 3.75.6.6 0 0 0 .8-.05l.8-.8c.4-.4 1.1-.4 1.5 0l2 2c.4.4.4 1.1 0 1.5C15.6 16.4 14 17.5 12 16c-2.5-1.8-5-4.3-6.5-7C4 7 4.6 4.4 5 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>0907-494-064</span>
                        </a>
                    </dialog>
                </>,
                document.body
            )}
        </div>
    );
}
