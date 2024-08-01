import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import css from './NavBarCSS.module.css';

function NavBar() {

  const english = useSelector((state: { english:boolean }) => state.english)

  return (
    <div className={css.background}>
      <div className={css.backgroundContainer}>
        <div className={css.mainLeft}>
          <div className={css.lessThan}>{`<`}</div>
          <div className={css.name}>{`Pablo Azambuyo`}</div>
          <div className={css.blink}>{`I`}</div>
          <div className={css.greaterThan}>{`/>`}</div>
        </div>
        <div className={css.mainRight}>
          <Link className={css.text} to="/AboutMe">{english ? `About Me` : `Acerca` }</Link>
          <Link className={css.text} to="/Skills">{ english ? `Skills` : `Habilidades` }</Link>
          <Link className={css.text} to="/Projects">{ english ? `Projects` : `Proyectos` }</Link>
          <Link className={css.text} to="/Certifications">{ english ? `Certifications` : `Certificados` }</Link>
          <Link className={css.text} to="/Contact">{ english ? `Contact` : `Contacto` }</Link>
        </div>
      </div>
      <div id={`backgroundScrollEffect`} className={css.backgroundScrollEffect}></div>
    </div>
  )
}

export default NavBar;