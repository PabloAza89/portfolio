import { useSelector } from 'react-redux';
import javascript from '../../images/javascript.png';
import material from '../../images/material.png';
import node from '../../images/node.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import css from './TechnologiesCSS.module.css';

function Technologies() {

  const darkMode = useSelector((state: { darkMode:boolean }) => state.darkMode)
  const english = useSelector((state: { english:boolean }) => state.english)

  interface arrayI {
    id: number,
    icon: any,
    title: string,
    url: string
  }

  const array: arrayI[] = [
    { id: 0, icon: react, title: `React`, url: english ? `https://react.dev/` : `https://es.react.dev/` },
    { id: 1, icon: redux, title: `Redux`, url: english ? `https://redux.js.org/` : `https://es.redux.js.org/` },
    { id: 2, icon: javascript, title: `Javascript`, url: english ? `https://developer.mozilla.org/en-US/docs/Web/JavaScript` : `https://developer.mozilla.org/es/docs/Web/JavaScript` },
    { id: 3, icon: sequelize, title: `Sequelize`, url: english ? `https://sequelize.org/ ` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://sequelize.org/` },
    { id: 4, icon: material, title: `Material UI`, url: english ? `https://mui.com/ ` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://mui.com/` },
    { id: 5, icon: node, title: `Node.js`, url: english ? `https://nodejs.org/en` : `https://nodejs.org/es ` },
  ]

  return (
    <div className={css.background}>
      {array.map((e) => {
        return (
          <a
            className={css.linkContainer}
            key={e.id}
            href={e.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={e.icon} className={css.iconMedia} alt=""></img>
            <div className={css.title}>{e.title}</div>
          </a>
        )
      })}
    </div>
  )
}

export default Technologies;