import ProjectItem from './ProjectItem';
import styles from '../sections/HomeSection.module.css';

export default function CategorySection({ category, onBackClick }) {
  return (
    <section id={category.id} className={styles.categorySection}>
      <div
        className={styles.categoryHeader}
        style={{ background: category.accentBg, color: category.accentText }}
      >
        <div>
          <h2 className={styles.categoryTitle}>{category.label}</h2>
          <p className={styles.categorySubtitle}>{category.labelZh}</p>
        </div>
        <button
          className={styles.backBtn}
          style={{ color: category.accentText, borderColor: category.accentText }}
          onClick={onBackClick}
        >
          ↑ Works
        </button>
      </div>
      <div className={styles.categoryContent}>
        {category.projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
