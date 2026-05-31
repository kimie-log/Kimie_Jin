import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import shared from './subpage.module.css'
import styles from './FontPage.module.css'
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
    <div ref={ref} className={`${shared.slide} ${visible ? shared.slideVisible : ''}`}>
      <table className={shared.infoTable}>
        <tbody>
          <tr>
            <th className={shared.projectTitle}>{project.title}</th>
            <th /><th />
          </tr>
          {project.rows.map(({ key, value }) => (
            <tr key={key}>
              <td /><td><strong>{key}</strong></td><td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={shared.imgArea}>
        {project.images.map((src) => <img key={src} src={src} alt={project.title} loading="lazy" />)}
      </div>
    </div>
  )
}

export default function FontPage() {
  return (
    <div className={`${shared.page} ${styles.page}`}>
      <SubNavbar bgColor="#c84605" activeLinkColor="#ffffff" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
