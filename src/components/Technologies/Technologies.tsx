import { useSelector } from 'react-redux';
import { typescript, node, react, redux, sequelize } from '../../images/images';
import css from './TechnologiesCSS.module.css';
import { arrayTechnologiesI } from '../../interfaces/interfaces';

function Technologies() {

  const english = useSelector((state: { english:boolean }) => state.english)

  const array: arrayTechnologiesI[] = [
    { id: 0, icon: react, title: `React`, url: english ? `https://react.dev/` : `https://es.react.dev/` },
    { id: 1, icon: redux, title: `Redux`, url: english ? `https://redux.js.org/` : `https://es.redux.js.org/` },
    { id: 2, icon: react, title: `React Native`, url: english ? `https://reactnative.dev/` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://reactnative.dev/` },
    { id: 3, icon: node, title: `Node.js`, url: english ? `https://nodejs.org/en` : `https://nodejs.org/es ` },
    { id: 4, icon: typescript, title: `Typescript`, url: english ? `https://www.typescriptlang.org/ ` : `https://www.typescriptlang.org/es/` },
    { id: 5, icon: sequelize, title: `Sequelize`, url: english ? `https://sequelize.org/ ` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://sequelize.org/` },
  ]

  return (
    <div className={css.background}>
      <div className={css.eachTechRow}>
        {
          array.slice(0, Math.floor(array.length / 2)).map((e) => {
            return (
              <a
                className={css.linkContainer}
                key={e.id}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                draggable="false"
              >
                <img draggable="false" src={e.icon} className={css.iconMedia} alt=""></img>
                <div className={css.title}>{e.title}</div>
              </a>
            )
          })
        }
      </div>
      <div className={css.eachTechRow}>
        {
          array.slice(Math.floor(array.length / 2)).map((e) => {
            return (
              <a
                className={css.linkContainer}
                key={e.id}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                draggable="false"
              >
                <img
                  draggable="false"
                  src={e.icon}
                  className={css.iconMedia}
                  alt=""
                />
                <div className={css.title}>{e.title}</div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Technologies;