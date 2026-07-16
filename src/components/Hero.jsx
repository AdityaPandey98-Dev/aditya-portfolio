import { useEffect, useState } from 'react'
import { profile, terminalLines, gmailComposeUrl } from '../data.js'
import './Hero.css'

function Terminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showOutput, setShowOutput] = useState(false)
  const [history, setHistory] = useState([])

  useEffect(() => {
    const current = terminalLines[lineIndex]
    if (!current) return

    if (!showOutput) {
      if (charIndex < current.cmd.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 45)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setShowOutput(true), 300)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setHistory((h) => [...h, current])
      setShowOutput(false)
      setCharIndex(0)
      setLineIndex((i) => (i + 1) % terminalLines.length)
    }, 1600)
    return () => clearTimeout(t)
  }, [charIndex, showOutput, lineIndex])

  const visibleHistory = history.slice(-2)
  const current = terminalLines[lineIndex]

  return (
    <div className="terminal" role="img" aria-label="Terminal animation showing developer profile summary">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--amber" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">aditya@metrolabs: ~</span>
      </div>
      <div className="terminal__body">
        {visibleHistory.map((line, i) => (
          <div className="terminal__line" key={i}>
            <p><span className="terminal__prompt">$</span> {line.cmd}</p>
            <p className="terminal__out">→ {line.out}</p>
          </div>
        ))}
        <div className="terminal__line">
          <p>
            <span className="terminal__prompt">$</span> {current.cmd.slice(0, charIndex)}
            <span className="terminal__cursor">▌</span>
          </p>
          {showOutput && <p className="terminal__out">→ {current.out}</p>}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__badge">
            <span className="hero__badge-dot" /> Available for new opportunities
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__title">{profile.title}</h2>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a
              href={gmailComposeUrl(profile.email, 'Opportunity for you')}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              Get in touch
            </a>
            <a href="#projects" className="btn btn--ghost">View projects</a>
          </div>

          <div className="hero__meta">
            <span>{profile.location}</span>
            <span className="hero__meta-sep">•</span>
            <a href={gmailComposeUrl(profile.email)} target="_blank" rel="noreferrer">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <Terminal />
        </div>
      </div>
    </section>
  )
}

export default Hero
