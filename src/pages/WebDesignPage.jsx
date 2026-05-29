import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import shared from './subpage.module.css'
import styles from './WebDesignPage.module.css'

const projects = [
  {
    title: '活動網頁設計與切版',
    subtitle: '誠品線上夏日活動',
    link: { label: 'Fun夏日連結', href: 'https://szweijin.github.io/summer/' },
    rows: [
      { key: '製作軟體、技術', value: 'Figma / Illustrator / Photoshop / HTML / CSS（RWD） / Javascript' },
      { key: '視覺主題', value: '夏日海灘、海洋素材電繪' },
    ],
    images: ['/images/web_design/02.png'],
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
      '/images/web_design/03-1.png',
      '/images/web_design/03-2.png',
      '/images/web_design/04.png',
      '/images/web_design/05.png',
      '/images/web_design/06.png',
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
      '/images/web_design/07.png',
      '/images/web_design/08.png',
      '/images/web_design/09-1.png',
      '/images/web_design/09-2.png',
    ],
  },
]

function ProjectSlide({ project, index }) {
  const { ref, visible } = useSlideIn(index === 0)

  return (
    <div ref={ref} className={`${shared.slide} ${visible ? shared.slideVisible : ''}`}>
      <table className={shared.infoTable}>
        <tbody>
          <tr>
            <th className={shared.projectTitle}>{project.title}</th>
            <th>{project.subtitle}</th>
            <th>
              {project.link && (
                <a href={project.link.href} target="_blank" rel="noreferrer" className={shared.linkBtn}>
                  {project.link.label}
                </a>
              )}
            </th>
          </tr>
          {project.rows.map(({ key, value }) => (
            <tr key={key}>
              <td />
              <td><strong>{key}</strong></td>
              <td style={{ whiteSpace: 'pre-line' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={shared.imgArea}>
        {project.images.map((src) => (
          <img key={src} src={src} alt={project.title} />
        ))}
      </div>
    </div>
  )
}

export default function WebDesignPage() {
  return (
    <div className={`${shared.page} ${styles.page}`}>
      <SubNavbar bgColor="#738d8d" activeLinkColor="#ffffff" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
