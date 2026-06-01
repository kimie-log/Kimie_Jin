import { useSlideIn } from './useSlideIn';
import styles from '../sections/HomeSection.module.css';

export default function ProjectItem({ project }) {
  const { ref, visible } = useSlideIn(false);
  return (
    <div ref={ref} className={`${styles.projectItem} ${visible ? styles.projectItemVisible : ''}`}>
      <div className={styles.projectInfoList}>
        <div className={styles.projectInfoTitle}>
          <span style={{ whiteSpace: 'pre-line' }}>{project.title}</span>
          {project.subtitle && <span className={styles.projectInfoSub}>{project.subtitle}</span>}
          {project.note && <span className={styles.projectNote}>{project.note}</span>}
          {project.link && (
            <a href={project.link.href} target="_blank" rel="noreferrer" className={styles.linkBtn}>
              {project.link.label}
            </a>
          )}
        </div>
        {project.rows?.map(({ key, value }) => (
          <div key={key} className={styles.projectInfoRow}>
            <span className={styles.projectInfoKey}>{key}</span>
            <span className={styles.projectInfoVal}>{value}</span>
          </div>
        ))}
      </div>
      <div className={styles.projectImgArea}>
        {project.images.map((src) => (
          <img key={src} src={src} alt={project.title} loading="lazy" />
        ))}
      </div>
    </div>
  );
}
