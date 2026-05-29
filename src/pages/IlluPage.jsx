import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import shared from './subpage.module.css'
import styles from './IlluPage.module.css'

const projects = [
  {
    title: '簡約風格插畫',
    rows: [
      { key: '主題', value: 'Love yourself' },
      { key: '關鍵字', value: '線條、圖塊、仙人掌、連結' },
    ],
    images: ['/images/illu/01.png'],
  },
  {
    title: '繽紛風格插畫',
    rows: [
      { key: '主題', value: 'Our friends' },
      { key: '關鍵字', value: '貓貓狗狗、花朵、活潑、正向' },
    ],
    images: ['/images/illu/02.png'],
  },
  {
    title: '電繪與手繪素材',
    rows: [],
    images: ['/images/illu/03.png'],
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
            <th />
            <th />
          </tr>
          {project.rows.map(({ key, value }) => (
            <tr key={key}>
              <td />
              <td><strong>{key}</strong></td>
              <td>{value}</td>
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

export default function IlluPage() {
  return (
    <div className={`${shared.page} ${styles.page}`}>
      <SubNavbar bgColor="#b12a2a" activeLinkColor="#ffffff" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
