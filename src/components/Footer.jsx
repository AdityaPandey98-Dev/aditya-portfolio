import { profile, gmailComposeUrl } from '../data.js'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {year} {profile.name}</span>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={gmailComposeUrl(profile.email)} target="_blank" rel="noreferrer">Email</a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
