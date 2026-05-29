import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import shared from './subpage.module.css'
import styles from './GraphicDesignPage.module.css'

const projects = [
  {
    title: '資訊圖表',
    subtitle: 'TVBS實習：一年三個月',
    note: '每日製作4-5張以上新聞圖卡及CG',
    rows: [
      { key: '製作規格', value: '按照公司制定之規格表、文字與人物校對、顏色的搭配與時事使用' },
      { key: '設計溝通', value: '同時與編輯、記者電話溝通手稿與內容放置，確認所有內容正確後發出' },
      { key: '素材使用', value: '善用公司購買之素材的同時，創作新的圖標與插圖供同事與個人使用' },
      { key: '技術學習', value: '任務結束之餘，製作主管指定作業（包含動態、字體、AI運用設計）' },
    ],
    images: ['/images/graphic_design/01.png'],
  },
  {
    title: '書籍平面設計',
    rows: [],
    images: ['/images/graphic_design/02.png'],
  },
  {
    title: '海報與廣告稿',
    rows: [],
    images: ['/images/graphic_design/03.png'],
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
            <th>{project.note}</th>
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

export default function GraphicDesignPage() {
  return (
    <div className={`${shared.page} ${styles.page}`}>
      <SubNavbar bgColor="#cdc55d" activeLinkColor="#1c2525" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
