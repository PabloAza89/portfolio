import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import profile from '../../images/profile.png';
import css from './AboutMeCSS.module.css';

function AboutMe() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const aboutBGHandler: () => void = () => {
    let el = (document.querySelector(`[class*="AboutMeCSS_background"]`) as HTMLElement)
    if (el !== null) document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.clientWidth}`);
  }

  useEffect(() => {
    aboutBGHandler()
    window.addEventListener('resize', aboutBGHandler);
    return () => window.removeEventListener('resize', aboutBGHandler);
  },[])

  window.addEventListener('load', () => aboutBGHandler())

  return (
    <div className={css.background}>
      <div className={css.blueBox}>
        <img
          onDragStart={(e) => e.preventDefault()}
          alt="Pablo Azambuyo"
          src={profile}
          className={css.avatar}
        />
        {
          english ?
          `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologiecss. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !` :
          `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo Javascript como lenguaje principal junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la música, particularmente tocar el piano, me considero una persona melómana !`
        }
      </div>
    </div>
  )
}

export default AboutMe;
