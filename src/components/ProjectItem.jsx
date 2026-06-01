import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useSlideIn } from './useSlideIn';
import styles from '../sections/HomeSection.module.css';

function mosaicClass(count) {
  if (count >= 6) return styles.imgGridThree;
  if (count >= 3) return styles.imgGridTwo;
  return '';
}

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
  const [lbIndex, setLbIndex] = useState(null);
  const images = project.images;
  const isOpen = lbIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLbIndex(null);
      if (e.key === 'ArrowLeft')  setLbIndex((i) => (i > 0 ? i - 1 : i));
      if (e.key === 'ArrowRight') setLbIndex((i) => (i < images.length - 1 ? i + 1 : i));
    };
    globalThis.addEventListener('keydown', onKey);
    return () => globalThis.removeEventListener('keydown', onKey);
  }, [isOpen, images.length]);

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
      <div className={[styles.projectImgArea, mosaicClass(images.length)].join(' ')}>
        {images.map((src, i) => (
          <button key={src} className={styles.imgZoomBtn} onClick={() => setLbIndex(i)}>
            <img src={src} alt={project.title} loading="lazy" />
          </button>
        ))}
      </div>

      {isOpen && createPortal(
        <>
          <button className={styles.lightboxOverlay} onClick={() => setLbIndex(null)} aria-label="關閉" />
          <img src={images[lbIndex]} className={styles.lightboxImg} alt="" />
          <button className={styles.lightboxClose} onClick={() => setLbIndex(null)} aria-label="關閉">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="3" x2="15" y2="15"/><line x1="15" y1="3" x2="3" y2="15"/>
            </svg>
          </button>
          {lbIndex > 0 && (
            <button className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`} onClick={() => setLbIndex((i) => i - 1)} aria-label="上一張">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="14 18 8 11 14 4"/>
              </svg>
            </button>
          )}
          {lbIndex < images.length - 1 && (
            <button className={`${styles.lightboxNav} ${styles.lightboxNavNext}`} onClick={() => setLbIndex((i) => i + 1)} aria-label="下一張">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="8 18 14 11 8 4"/>
              </svg>
            </button>
          )}
          {images.length > 1 && (
            <div className={styles.lightboxCount}>{lbIndex + 1} / {images.length}</div>
          )}
        </>,
        document.body
      )}
    </div>
  );
}

ProjectItem.propTypes = { project: projectShape };
