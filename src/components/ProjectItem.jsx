import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useSlideIn } from './useSlideIn';
import styles from '../sections/HomeSection.module.css';

const projectShape = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  note: PropTypes.string,
  link: PropTypes.shape({ href: PropTypes.string, label: PropTypes.string }),
  rows: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, value: PropTypes.string })),
  images: PropTypes.arrayOf(PropTypes.string),
});

export default function ProjectItem({ project }) {
  const { ref, visible } = useSlideIn(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    globalThis.addEventListener('keydown', onKey);
    return () => globalThis.removeEventListener('keydown', onKey);
  }, [lightbox]);

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
          <button key={src} className={styles.imgZoomBtn} onClick={() => setLightbox(src)}>
            <img src={src} alt={project.title} loading="lazy" />
          </button>
        ))}
      </div>

      {lightbox && createPortal(
        <>
          <button className={styles.lightboxOverlay} onClick={() => setLightbox(null)} aria-label="關閉" />
          <button className={styles.lightboxImgBtn} onClick={() => setLightbox(null)} aria-label="關閉圖片">
            <img src={lightbox} className={styles.lightboxImg} alt="" />
          </button>
        </>,
        document.body
      )}
    </div>
  );
}

ProjectItem.propTypes = { project: projectShape };
