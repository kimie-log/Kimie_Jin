import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import styles from './HomeSection.module.css'
import B from '../utils/assetUrl'

const projects = [
  { title: '活動海報字體設計', rows: [], images: [`${B}/images/font/01.png`] },
  { title: 'LOGO字體設計',     rows: [], images: [`${B}/images/font/02.png`] },
  { title: '文創藝術字體設計', rows: [], images: [`${B}/images/font/03.png`] },
  { title: '貼文字體設計',     rows: [], images: [`${B}/images/font/04.png`] },
]

function ProjectSlide({ project, index }) {
  const { ref, visible } = useSlideIn(index === 0)
  return (
    <div ref={ref} className={`${styles.subSlide} ${visible ? styles.subSlideVisible : ''}`}>
      <div className={styles.subInfoList}>
        <div className={styles.subProjectTitle}>
          <span>{project.title}</span>
        </div>
        {project.rows.map(({ key, value }) => (
          <div key={key} className={styles.subInfoRow}>
            <span className={styles.subInfoKey}>{key}</span>
            <span className={styles.subInfoVal}>{value}</span>
          </div>
        ))}
      </div>
      <div className={styles.subImgArea}>
        {project.images.map((src) => <img key={src} src={src} alt={project.title} loading="lazy" />)}
      </div>
    </div>
  )
}

export default function FontPage() {
  return (
    <div className={`${styles.subPage} ${styles.pageFont}`}>
      <SubNavbar bgColor="#c84605" activeLinkColor="#ffffff" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
