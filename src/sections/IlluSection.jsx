import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import styles from './HomeSection.module.css'
import B from '../utils/assetUrl'

const projects = [
  {
    title: '簡約風格插畫',
    rows: [
      { key: '主題', value: 'Love yourself' },
      { key: '關鍵字', value: '線條、圖塊、仙人掌、連結' },
    ],
    images: [`${B}/images/illu/01.png`],
  },
  {
    title: '繽紛風格插畫',
    rows: [
      { key: '主題', value: 'Our friends' },
      { key: '關鍵字', value: '貓貓狗狗、花朵、活潑、正向' },
    ],
    images: [`${B}/images/illu/02.png`],
  },
  {
    title: '電繪與手繪素材',
    rows: [],
    images: [`${B}/images/illu/03.png`],
  },
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

export default function IlluPage() {
  return (
    <div className={`${styles.subPage} ${styles.pageIllu}`}>
      <SubNavbar bgColor="#b12a2a" activeLinkColor="#ffffff" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
