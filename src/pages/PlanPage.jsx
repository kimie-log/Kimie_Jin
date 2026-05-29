import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import shared from './subpage.module.css'
import styles from './PlanPage.module.css'

const projects = [
  {
    title: '視覺規劃',
    rows: [
      { key: '1', value: '依照客戶類別統整視覺規劃流程' },
      { key: '2', value: '產品及網頁風格分析、製作設計企劃' },
      { key: '3', value: '製作Wireframes' },
      { key: '4', value: '設計稿製作及原型產出' },
    ],
    images: ['/images/plan/01.png'],
  },
  {
    title: '網頁規劃',
    rows: [
      { key: '1', value: '依照行銷企劃內容分類資料層級、商品內容' },
      { key: '2', value: '製作網站架構表\n包含區塊名稱、產品內容、圖片/網站連結及class/id名稱' },
    ],
    images: ['/images/plan/02.png'],
  },
  {
    title: '行銷企劃',
    rows: [
      { key: '1', value: '根據品牌過往內容進行SWOT分析' },
      { key: '2', value: '根據顧客消費趨勢製作年、季度行銷活動' },
      { key: '3', value: '企劃成本、預算分配、各項活動所需之詳細內容：\n宣傳網站、地點、視覺設計、活動行程' },
    ],
    images: ['/images/plan/03.png'],
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
            <th>steps</th>
            <th>content</th>
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

export default function PlanPage() {
  return (
    <div className={`${shared.page} ${styles.page}`}>
      <SubNavbar bgColor="#3ec795" activeLinkColor="#1c2525" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
