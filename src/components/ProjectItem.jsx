import { useSlideIn } from './useSlideIn';
import styles from '../sections/HomeSection.module.css';

export default function ProjectItem({ project }) {
  const { ref, visible } = useSlideIn(false);
  return (
    <div ref={ref} className={`${styles.projectItem} ${visible ? styles.projectItemVisible : ''}`}>
      <table className={styles.projectTable}>
        <tbody>
          <tr>
            <th className={styles.projectTableTitle} style={{ whiteSpace: 'pre-line' }}>{project.title}</th>
            <th>{project.subtitle || ''}</th>
            <th>
              {project.note && <span className={styles.projectNote}>{project.note}</span>}
              {project.link && (
                <a href={project.link.href} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                  {project.link.label}
                </a>
              )}
            </th>
          </tr>
          {project.rows?.map(({ key, value }) => (
            <tr key={key}>
              <td />
              <td><strong>{key}</strong></td>
              <td style={{ whiteSpace: 'pre-line' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.projectImgArea}>
        {project.images.map((src) => (
          <img key={src} src={src} alt={project.title} loading="lazy" />
        ))}
      </div>
    </div>
  );
}
