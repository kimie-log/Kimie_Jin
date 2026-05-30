import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import styles from './SubNavbar.module.css'

const navItems = [
  { label: 'Visual', path: '/plan' },
  { label: 'Web', path: '/web-design' },
  { label: 'Logo', path: '/logo' },
  { label: 'Graphic', path: '/graphic-design' },
  { label: 'Typography', path: '/font' },
  { label: 'Illustration', path: '/illu' },
]

function SubNavbar({ bgColor, activeLinkColor = '#ffffff' }) {
  const { pathname } = useLocation()

  return (
    <nav className={styles.menu} style={{ backgroundColor: bgColor }}>
      <Link to="/" className={styles.brand}>JINJIN</Link>
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

SubNavbar.propTypes = {
  bgColor: PropTypes.string,
  activeLinkColor: PropTypes.string,
}

export default SubNavbar
