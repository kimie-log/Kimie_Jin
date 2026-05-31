import styles from '../sections/HomeSection.module.css';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Goals', id: 'goals' },
];

export default function Navbar({ activeSection, isProjectsActive, onScrollTo }) {
  return (
    <nav className={styles.nav}>
      <button className={styles.navBrand} onClick={() => onScrollTo('hero')}>Kimie</button>
      <ul>
        {NAV_ITEMS.map(({ label, id }) => {
          const active = id === 'projects' ? isProjectsActive : activeSection === id;
          return (
            <li key={label} className={active ? styles.navActive : ''}>
              <button onClick={() => onScrollTo(id)}>{label}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
