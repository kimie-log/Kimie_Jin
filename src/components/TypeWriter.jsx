import { useState, useEffect } from 'react'
import styles from './TypeWriter.module.css'

const H1_TEXT = 'JINJIN'
const P_TEXT = 'UI/UX Designer & Web Designer'
const H1_SPEED = 130
const P_SPEED = 60
const START_DELAY = 500

export default function TypeWriter() {
  const [h1Count, setH1Count] = useState(0)
  const [pCount, setPCount] = useState(0)
  const [phase, setPhase] = useState('idle') // idle → h1 → p → done

  useEffect(() => {
    const t = setTimeout(() => setPhase('h1'), START_DELAY)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase !== 'h1') return
    if (h1Count >= H1_TEXT.length) { setPhase('p'); return }
    const t = setTimeout(() => setH1Count(n => n + 1), H1_SPEED)
    return () => clearTimeout(t)
  }, [phase, h1Count])

  useEffect(() => {
    if (phase !== 'p') return
    if (pCount >= P_TEXT.length) { setPhase('done'); return }
    const t = setTimeout(() => setPCount(n => n + 1), P_SPEED)
    return () => clearTimeout(t)
  }, [phase, pCount])

  const renderH1 = () =>
    H1_TEXT.slice(0, h1Count)
      .split('\n')
      .map((line, i) => (
        <span key={line || `line-${i}`}>
          {i > 0 && <br />}
          {line}
        </span>
      ))

  return (
    <div className={styles.heroGroup}>
      <h1 className={styles.title}>
        <strong>{renderH1()}</strong>
      </h1>
      <p className={styles.subtitle}>
        <em>{P_TEXT.slice(0, pCount)}</em>
      </p>
    </div>
  )
}
