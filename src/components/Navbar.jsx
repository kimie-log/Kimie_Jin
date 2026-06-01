import styles from '../sections/HomeSection.module.css';
import { CATEGORIES } from '../data/categories';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Goals', id: 'goals' },
  { label: 'Projects', id: 'projects' },
];

export default function Navbar({ activeSection, isProjectsActive, onScrollTo }) {
  return (
    <nav className={styles.nav}>
      <button className={styles.navBrand} onClick={() => onScrollTo('hero')}>Kimie</button>
      <ul>
        {NAV_ITEMS.map(({ label, id }) => {
          const active = id === 'projects' ? isProjectsActive : activeSection === id;
          return (
            <li key={label} className={`${active ? styles.navActive : ''} ${id === 'projects' ? styles.navHasDropdown : ''}`}>
              <button onClick={() => onScrollTo(id)}>{label}</button>
              {id === 'projects' && (
                <ul className={styles.navDropdown}>
                  {CATEGORIES.map(({ id: catId, label: catLabel, labelZh }) => (
                    <li key={catId}>
                      <button onClick={() => onScrollTo(catId)}>
                        <span>{catLabel}</span>
                        <span className={styles.navDropdownSub}>{labelZh}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
