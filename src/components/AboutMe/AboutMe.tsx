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
          `Hi, I'm Pablo ! I'm Full Stack Developer with 2 years of experience.
          I have knowdledge in Javascript, Typescript, agile methodologies, GIT,
          data structures, algorithms, frameworks, CSS, Word, Excel and Photoshop.
          I have experience in Front End development, Back End and data architecture
          with React, NodeJS, Express and Sequelize. Previously I have 10 year experience
          as store manager and seller at Ribera S.A. as well as 3 years as a piano
          professor. I consider myself self-taught and dedicated in all I do.`:
          `Hola, soy Pablo ! Soy Full Stack Developer con 2 años de experiencia.
          Tengo conocimientos en Javascript, Typescript, metodologías ágiles, GIT,
          estructura de datos, algoritmos, frameworks, CSS, Word, Excel y Photoshop.
          Tengo experiencia en desarrollo de Front End, Back End y arquitectura de
          datos con React, NodeJS, Express y Sequelize. Previamente tengo 10 años de
          experiencia como encargado y vendedor en Ribera S.A. como así también 3 años
          de experiencia en profesorado de piano. Me considero autodidacta y abocado
          en todo lo que abordo`
        }
      </div>
    </div>
  )
}

export default AboutMe;
