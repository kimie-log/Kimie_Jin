import { Link, useLocation } from 'react-router-dom'
import styles from './SubNavbar.module.css'

const navItems = [
  { label: 'HOME', path: '/' },
  { label: '視覺規劃', path: '/plan' },
  { label: '網頁設計', path: '/web-design' },
  { label: 'LOGO', path: '/logo' },
  { label: '平面設計', path: '/graphic-design' },
  { label: '字體設計', path: '/font' },
  { label: '插圖', path: '/illu' },
]

export default function SubNavbar({ bgColor, activeLinkColor = '#ffffff' }) {
  const { pathname } = useLocation()

  return (
    <nav className={styles.menu} style={{ backgroundColor: bgColor }}>
      <ul>
        {navItems.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={`${styles.link} ${pathname === path ? styles.active : ''}`}
              style={pathname === path ? { color: activeLinkColor } : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
