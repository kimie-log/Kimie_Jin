import SubNavbar from '../components/SubNavbar'
import { useSlideIn } from '../components/useSlideIn'
import styles from './HomeSection.module.css'
import B from '../utils/assetUrl'

const projects = [
  {
    title: '逐浪設計\nSWELLS Design',
    rows: [
      { key: '類別', value: '設計工作室' },
      { key: '製作時間', value: '2023' },
      { key: '設計理念', value: '出自台東，以自然永恆為出發點，打造民宿露營、咖啡廳等業主\n想根據在地空間打造自己的設計工作室\n以（永恆、無限、海浪、身份）為關鍵字進行設計' },
    ],
    images: [`${B}/images/LOGO/01.png`],
  },
  {
    title: 'MROZEN',
    rows: [
      { key: '類別', value: '餐飲工作室' },
      { key: '製作時間', value: '2023' },
      { key: '設計理念', value: '使用品牌創始人Merry的首字母加上frozen（冷凍）等字樣\n配上冷凍會出現的冰霜及冰淇淋湯匙\n表達耗時的製作工程及包裝主要概念的環保湯匙' },
      { key: '平面設計', value: '美式風格為主題創作\nMrozen來自台灣，以主打盒裝冰淇淋以及禮盒為重點\n使用鮮豔色彩，打造新品牌的活力感' },
    ],
    images: [`${B}/images/LOGO/02.png`],
  },
  {
    title: 'Renees notes world',
    rows: [
      { key: '類別', value: '線上知識行銷品牌' },
      { key: '製作時間', value: '2023' },
      { key: '設計理念', value: '以Renee的R為出發點\n加上代表手寫筆記時使用鋼筆做筆記，會出現的點和銳利線條\n傳達出筆記知識的傳播與紀錄' },
      { key: '主題式色彩', value: '以左至右，分別用不同主題色代表各領域的知識：\n設計 ｜ UIUX/網頁 ｜ 食譜 ｜ 語言 ｜ 電影/音樂/書籍' },
    ],
    images: [`${B}/images/LOGO/03.png`],
  },
  {
    title: 'Clown Skull',
    link: { label: 'facebook', href: 'https://www.facebook.com/people/Clown-Skull-NFT/100083231887242/?locale=ms_MY' },
    rows: [
      { key: '類別', value: 'NFT（元宇宙）' },
      { key: '製作時間', value: '2021' },
      { key: '設計理念', value: '以品牌名稱縮寫CS做出骷髏輪廓\n希望能一眼視出NFT的主軸為小丑外型\n使用黑色、紅色帶出撲克牌的卡牌色系\n傳達此NFT是以隨機配件的卡牌式收藏' },
      { key: '關於Clown Skull NFT', value: '來自台灣的新品牌，品牌理念是希望可以串聯線上到線下\n期望讓元宇宙進到人們的真正生活' },
    ],
    images: [`${B}/images/LOGO/04.png`, `${B}/images/LOGO/clown_skull.gif`],
  },
  {
    title: 'Cloud Plates',
    rows: [
      { key: '類別', value: '餐飲品牌' },
      { key: '製作時間', value: '2019' },
      { key: '設計理念', value: '以線上販售為出發點，用CP做出雲朵的輪廓\n色系使用：帶有科技感的藍綠色、代表食物的紅色\n雙主色設計' },
      { key: '品牌運作', value: '為因應現今快、狠、準的飲食習慣\n打造可快速加熱的食材包產品，並使用新鮮保存販售方式' },
    ],
    images: [`${B}/images/LOGO/05.png`],
  },
  {
    title: '尚讚農遊',
    rows: [
      { key: '類別', value: '社區發展協會' },
      { key: '製作時間', value: '2022' },
      { key: '設計理念', value: 'Logo的圖樣以「尚」的字型和「讚」的圖形表達做結合\n中間的口部用代表農夫的草帽，以及左上角用新苗的圖形融合\n帶出農遊企業的主視覺' },
    ],
    images: [`${B}/images/LOGO/06.png`],
  },
  {
    title: '職人',
    rows: [
      { key: '類別', value: '舞團發表活動' },
      { key: '製作時間', value: '2023' },
      { key: '設計理念', value: '以中文字「職人」字形作出發點\n將斜線以較粗的方式呈現，表現跳舞時手腳伸展的樣貌\n並且職人二字是專業、俐落、精準的感受 — 故以線條作為重點發展' },
    ],
    images: [`${B}/images/LOGO/07.png`],
  },
  {
    title: '猴哩餃',
    rows: [
      { key: '類別', value: '餐飲品牌' },
      { key: '製作時間', value: '2021' },
      { key: '設計理念', value: '結合猴子與餃子的外型\n讓顧客一眼看到帶了廚師帽的可愛猴子\n體現活潑可愛的品牌形象' },
    ],
    images: [`${B}/images/LOGO/08.png`],
  },
  {
    title: 'Kavalan wave',
    rows: [
      { key: '類別', value: '衝浪品牌' },
      { key: '製作時間', value: '2021' },
      { key: '設計理念', value: '因老闆為台東原住民（排灣族）於是\n使用文化代表的菱形紋加上海浪的波動\n設計出品牌新一季的視覺Logo' },
    ],
    images: [`${B}/images/LOGO/09.png`],
  },
]

function ProjectSlide({ project, index }) {
  const { ref, visible } = useSlideIn(index === 0)
  return (
    <div ref={ref} className={`${styles.subSlide} ${visible ? styles.subSlideVisible : ''}`}>
      <div className={styles.subInfoList}>
        <div className={styles.subProjectTitle}>
          <span style={{ whiteSpace: 'pre-line' }}>{project.title}</span>
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

export default function LogoPage() {
  return (
    <div className={`${styles.subPage} ${styles.pageLogo}`}>
      <SubNavbar bgColor="#313131" activeLinkColor="#ffffff" />
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </div>
  )
}
