import { createPortal } from 'react-dom';
import B from '../utils/assetUrl';
import { RESUME_CARDS } from '../data/resumeCards';
import { SKILL_TAGS } from '../data/skillTags';
import styles from './ResumePrint.module.css';

const allCards = RESUME_CARDS.flatMap((r) => r.cards);
const profileCard = allCards.find((c) => c.title === 'Personal Information');
const aboutCard   = allCards.find((c) => c.title === 'About Me');
const workCard    = allCards.find((c) => c.title === 'Work Experience');
const softCard    = allCards.find((c) => c.title === 'Soft Skills');
const projectsCard = allCards.find((c) => c.title === 'Projects');

function PrintContent() {
    return (
        <div id="resume-print" className={styles.wrap}>
            <header className={styles.header}>
                <img
                    src={`${B}/images/homepage/Headshot.webp`}
                    alt="Kimie"
                    className={styles.headshot}
                />
                <div>
                    <h1 className={styles.name}>
                        金思緯<span className={styles.nameEn}>Kimie</span>
                    </h1>
                    <p className={styles.role}>{profileCard.lines[0]}</p>
                </div>
                <div className={styles.contact}>
                    <div>{profileCard.lines[3]}</div>
                    <div>{profileCard.lines[4]}</div>
                    <div>{profileCard.lines[1]}</div>
                    <div>{profileCard.lines[2]}</div>
                </div>
            </header>

            <hr className={styles.divider} />

            <div className={styles.body}>
                <div className={styles.left}>
                    {/* About Me */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>About Me</h2>
                        <p className={styles.aboutHighlight}>{aboutCard.highlight}</p>
                        {aboutCard.lines.map((l) => (
                            <p key={l} className={styles.aboutText}>{l}</p>
                        ))}
                    </div>

                    {/* Work Experience */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Work Experience</h2>
                        {workCard.cols.map(({ heading, lines, tags }) => (
                            <div key={heading + lines[1]} className={styles.entry}>
                                <div className={styles.entryRow}>
                                    <span className={styles.entryRole}>{heading}</span>
                                    <span className={styles.entryPeriod}>{lines[1]}</span>
                                </div>
                                <div className={styles.entryCompany}>{lines[0]}</div>
                                {lines.slice(2).map((l) => (
                                    <div key={l} className={styles.entryTech}>{l}</div>
                                ))}
                                {tags && (
                                    <div className={styles.entryTags}>{tags.join(' · ')}</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Projects */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Projects</h2>
                        {projectsCard.cols.map(({ heading, lines, tags }) => (
                            <div key={heading} className={styles.entry}>
                                <div className={styles.entryRow}>
                                    <span className={styles.entryRole}>{heading}</span>
                                    <span className={styles.entryPeriod}>{lines[0]}</span>
                                </div>
                                {lines.slice(1).map((l) => (
                                    <div key={l} className={styles.entryTech}>{l}</div>
                                ))}
                                {tags && (
                                    <div className={styles.entryTags}>{tags.join(' · ')}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.right}>
                    {/* Capabilities (Soft Skills) */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Capabilities</h2>
                        {softCard.cols.map(({ heading, lines }) => (
                            <div key={heading} className={styles.skillRow}>
                                <span className={styles.skillLabel}>{heading}</span>
                                <span className={styles.skillText}>{lines.join('、')}</span>
                            </div>
                        ))}
                    </div>

                    {/* Technical Skills */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Technical Skills</h2>
                        {SKILL_TAGS.map(({ category, tags }) => (
                            <div key={category} className={styles.skillRow}>
                                <span className={styles.skillLabel}>{category}</span>
                                <span className={styles.skillText}>{tags.join('、')}</span>
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
