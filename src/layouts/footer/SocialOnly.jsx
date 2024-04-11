import style from './Footer.module.css'

export function SocialOnly({icon, name, link}) {
  return (
    
    <a href={link} className={style.social_only}>
        {icon}
        <span>{name}</span>
    </a>
  )
}
