import B from '../utils/assetUrl';
import styles from '../sections/HomeSection.module.css';

export default function ResumeCard({ card }) {
  if (card.type === 'pic') {
    return (
      <div className={`${styles.cardPic} ${styles.w230}`}>
        <img src={`${B}/images/homepage/Headshot.jpg`} alt="Kimie" />
      </div>
    );
  }

  if (card.type === 'work') {
    return (
      <div className={`${styles.card} ${styles[card.sizeClass]}`} style={{ '--hover-bg': card.hoverBg }}>
        <span className={styles.cardLabel}>{card.title}</span>
        <div className={styles.cardCols}>
          {card.cols.map(({ heading, lines }) => (
            <p key={heading} className={styles.cardColItem}>
              <span className={styles.highlight}>{heading}</span>
              {lines.map((line, i) => (
                <span key={i}><br />{line}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles[card.sizeClass]}`} style={{ '--hover-bg': card.hoverBg }}>
      <span className={styles.cardLabel}>{card.title}</span>
      <p className={styles.cardContent}>
        {card.highlight && (
          <><span className={styles.highlight}>{card.highlight}</span>{card.afterHighlight}<br /></>
        )}
        {card.lines.map((line, i) => (
          <span key={i}>{line}{i < card.lines.length - 1 && <br />}</span>
        ))}
      </p>
    </div>
  );
}
