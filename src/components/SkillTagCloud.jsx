import { SKILL_TAGS } from '../data/skillTags';
import styles from '../sections/HomeSection.module.css';

export default function SkillTagCloud() {
  return (
    <div className={styles.skillCloud}>
      {SKILL_TAGS.map(({ category, color, tags }) => (
        <div key={category} className={styles.skillRow}>
          <span className={styles.skillCategory}>{category}</span>
          <div className={styles.skillTags}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={styles.skillTag}
                style={{ '--tag-bg': color }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
