'use client'

import Link from 'next/link';
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

const icons = [
  {
    path: 'https://www.youtube.com/channel/UCFRmirzwmU13TYLjDzGZ5Ew',
    name: <RiYoutubeFill/>
  },
  {
    path: 'https://www.linkedin.com/in/rio-agusto-61b36a289/',
    name: <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/Rioagusto1808',
    name: <RiGithubFill/>
  },
  {
    path: 'https://web.facebook.com/rio.agusto.35/?_rdc=1&_rdr',
    name: <RiFacebookFill/>
  },
  {
    path: 'https://www.instagram.com/rioss_18/',
    name: <RiInstagramFill/>
  }
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>{
        return(
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials