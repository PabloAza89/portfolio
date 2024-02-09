import css from './BubblesCSS.module.css';

function Bubbles() {
  return (
    <div className={css.background}>
      {
        [
          11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13, // 19
          22.5, 24.5, 12.5, 15.5,28, 20.5, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20, // 16 (28 MIDDLE, 47 TOTAL)
          22, 25, 18, 21, 15, 13, 26, 17, 13, 22.5 , 24.5, 12.5, // 12
        ].map((e, i) => {
          return (
            <div style={{ "--i": e } as React.CSSProperties} key={i} className={css.eachCircle}></div>
          )
        })
      }
    </div>
  )
}

export default Bubbles;