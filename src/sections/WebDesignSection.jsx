import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import styles from './HomeSection.module.css'
import B from '../utils/assetUrl'

const projects = [
  {
    title: '活動網頁設計與切版',
    subtitle: '誠品線上夏日活動',
    link: { label: 'Fun夏日連結', href: 'https://szweijin.github.io/summer/' },
    rows: [
      { key: '製作軟體、技術', value: 'Figma / Illustrator / Photoshop / HTML / CSS（RWD） / Javascript' },
      { key: '視覺主題', value: '夏日海灘、海洋素材電繪' },
    ],
    images: [`${B}/images/web_design/02.png`],
  },
  {
    title: 'C端網站設計',
    subtitle: '原味旅遊',
    rows: [
      { key: '目標', value: '為深入地方文化旅遊做統整販售的旅遊商品網站' },
      { key: '設計軟體', value: 'Figma / Illustrator' },
      { key: '設計流程', value: '1. 分析各大旅遊業者官方網站資訊架構\n2. 整理優缺點、統整網站資訊架構表\n3. 互動模式設計（登入/註冊、購物車、收藏、分享、訂購頁面互動）\n4. wireframe製作與修改\n5. 視覺規格表制定與模型製作' },
    ],
    images: [
      `${B}/images/web_design/03-1.png`,
      `${B}/images/web_design/03-2.png`,
      `${B}/images/web_design/04.png`,
      `${B}/images/web_design/05.png`,
      `${B}/images/web_design/06.png`,
    ],
  },
  {
    title: '形象網頁Redesign',
    subtitle: '台東熱氣球嘉年華',
    rows: [
      { key: '設計軟體', value: 'Figma / Illustrator' },
      { key: '設計流程', value: '1. 原網站資訊架構與層級排列分析\n2. 調整網站層級架構\n3. 視覺排版wireframe製作（RWD）\n4. 色彩系統與圖標設計\n5. 視覺規格表制定與模型製作' },
    ],
    images: [
      `${B}/images/web_design/07.png`,
      `${B}/images/web_design/08.png`,
      `${B}/images/web_design/09-1.png`,
      `${B}/images/web_design/09-2.png`,
    ],
  },
]

function ProjectSlide({ project, index }) {
  const { ref, visible } = useSlideIn(index === 0)
  return (
    <div ref={ref} className={`${styles.subSlide} ${visible ? styles.subSlideVisible : ''}`}>
      <div className={styles.subInfoList}>
        <div className={styles.subProjectTitle}>
          <span>{project.title}</span>
          {project.subtitle && <span className={styles.subProjectSub}>{project.subtitle}</span>}
          {project.link && (
            <a href={project.link.href} target="_blank" rel="noreferrer" className={styles.subLinkBtn}>
              {project.link.label}
            </a>
          )}
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

export default function WebDesignPage() {
  return (
    <div className={`${styles.subPage} ${styles.pageWebDesign}`}>
      <SubNavbar bgColor="#738d8d" activeLinkColor="#ffffff" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
