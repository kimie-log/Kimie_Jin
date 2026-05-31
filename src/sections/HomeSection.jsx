import { useState, useEffect } from 'react';
import TypeWriter from '../components/TypeWriter';
import Navbar from '../components/Navbar';
import ResumeCard from '../components/ResumeCard';
import CategorySection from '../components/CategorySection';
import { CATEGORIES } from '../data/categories';
import { RESUME_CARDS } from '../data/resumeCards';
import { FUTURE_PLAN } from '../data/futurePlan';
import styles from './HomeSection.module.css';

const RESUME_PDF_URL = '#';
const SECTION_IDS = ['hero', 'about', 'projects', ...CATEGORIES.map((c) => c.id), 'goals'];

export default function HomeSection() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const isProjectsActive = ['projects', ...CATEGORIES.map((c) => c.id)].includes(activeSection);

  return (
    <div className={styles.wrapper}>
      <Navbar activeSection={activeSection} isProjectsActive={isProjectsActive} onScrollTo={scrollTo} />

      {/* Hero */}
      <section id="hero" className={styles.hero}>
        <TypeWriter />
      </section>

      {/* About */}
      <section id="about" className={styles.about}>
        <div className={styles.personal}>
          <div className={styles.resumeHeader}>
            <div>
              <h2 className={styles.resumeHeading}>金思緯 · Kimie</h2>
              <p className={styles.resumeSubheading}>UI/UX Designer &amp; Web Designer</p>
            </div>
            <div className={styles.ctaButtons}>
              <a href={RESUME_PDF_URL} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
                下載履歷 PDF
              </a>
              <a href="mailto:szweiforwork@gmail.com" className={styles.ctaSecondary}>
                聯絡我
              </a>
            </div>
          </div>
          {RESUME_CARDS.map(({ row, cards }) => (
            <div key={row} className={styles.personalRow}>
              {cards.map((card) => <ResumeCard key={card.title ?? card.type} card={card} />)}
            </div>
          ))}
        </div>
      </section>

      {/* Works grid */}
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.projectsSectionInner}>
          <h2 className={styles.sectionHeading}>Works</h2>
          <div className={styles.block}>
            {CATEGORIES.map(({ id, img1, img2, label, labelZh, hoverColor }) => (
              <button
                key={id}
                className={styles.projectLink}
                style={{ '--hover-color': hoverColor }}
                onClick={() => scrollTo(id)}
              >
                <img src={img1} alt={`${label} portfolio preview`} className={styles.imgDefault} loading="lazy" />
                <img src={img2} alt={`${label} portfolio detail`} className={styles.imgHover} loading="lazy" />
                <p className={styles.projectLabel}>
                  <span className={styles.projectLabelEn}>{label}</span>
                  <span className={styles.projectLabelZh}>{labelZh}</span>
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category detail sections */}
      {CATEGORIES.map((cat) => (
        <CategorySection key={cat.id} category={cat} onBackClick={() => scrollTo('projects')} />
      ))}

      {/* Goals */}
      <section id="goals" className={styles.goals}>
        <div className={styles.goalsInner}>
          <h2 className={styles.sectionHeading}>Future Plan</h2>
          <div className={styles.future}>
            {FUTURE_PLAN.map(({ clsKey, title, items }) => (
              <div key={title} className={`${styles.futureCard} ${styles[clsKey]}`}>
                <h3>{title}</h3>
                <div className={styles.futureContent}>
                  {items.map(({ h, list }) => (
                    <div key={h}>
                      <h4>{h}</h4>
                      <ul>{list.map((li) => <li key={li}>{li}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
