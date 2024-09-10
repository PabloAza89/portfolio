const styleConst = `
  background-color: light-dark(rgb(254, 246, 213), rgb(65, 60, 38));
  color: light-dark(rgb(62, 47, 0), rgb(253, 243, 170));
  line-height: 18px;
  margin-left: -24px;
  padding-left: 24px;
  padding-right: calc(100% + 22px);
  text-wrap: nowrap;
`

const styleImage = `
  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 1px;
  background-size: 16px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABTCAYAAADjsjsAAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMwSURBVHja7Jo/aBNRHMdfHzXI0XbpiWkMlU4hQ2wglAwiFKqckxjqlGLi0kGIS0pduuqimMVsTgnUTZI1UkEoDiEErB1CxkqNBeNipUOXOEihhlxj7t6f312+3y33IOQ+9/vxud97mej1egwREw4EgAmYgIkAJmACJgKYgAmYgEkt+VQi+WLt5irl3zjpFZibiYXnjDGWtmL1t7X9Q1Smw5TWl3NBIxAOGoEVa372PtrcYdJWLJyJhnKMsQhjjGWioVzaioUB03l7R85dijyMzj0GTAfSiZtTyf7rd+fNVYoy4h6ryn+qk1q7k4V5Jh27dYoyIgmzXzp2oSYj7rH2HtjugDmidOxCSUbcw1VJTkakYA6TDnUZkYH5v9KhLCPu4fYmJyMSMEeVDlUZcZ9UJQkZad/PLK0v5zLR0MCb/9z9Xf7y41dj0NqNKzNLcXMqc4GMiqrvZULnH7fSViy8bcV27Kqy3Oo8yb75WLzgIby2+er2Wm3/tupNZO6T9iYhI20wRUmHkoy4D6tSm4y0wHQ66VCfjJTDdDvpUJ6MuA/bW5uMlMKULR3dMuI+r0qlMlIGU5V0dMpICUzV0tElI+7z9lYqI+kwdUlHh4z4GFWldBlJhalbOqplJA0mFemolBEfo/aWLiMpm8P5VCL56lakJABmexgQt9//snmw9XT70zuyML8/e7ATNAIrzAM5Ojn9sLHbfiRiV154m1OVjgoZCa3MYWc6Tlux3OoUa19/VoNG4Nqd67P34uZMUnDlCzkzEno6KUE67Y3ddrZQadazfz8fMsbq+VQiuZlYYAKBnsloi0Sby5h0yq1OsVBp1vuvFyrN+vuDbpXaZMQJVyXb6x43nKzpmoyEwNQhnaOT02/UZOQapsxJZ9GcXrJbk7U36WYy4hTbe9iNnXuApCYjV69GAiedoa9Ge93jRtC4HL5qXJpTMPM7moxcwfTSpKNiMnLc5l6bdFTIyBFM6ttrumTkCKYHtte0yGhkmNTOdGRnlMmIoyrFTUaTo1blojldZYxVGSL21QiRtNGBACZgAiZgIoAJmICJACZgAiZgIoAJmICJACZgAuZY5s8A/+lBnej1JVAAAAAASUVORK5CYII=);
`

const styleOnlyOne = `border-radius: 4px;`.concat(styleConst, styleImage)

const styleStart = `border-radius: 4px 4px 0px 0px;`.concat(styleConst, styleImage)

const styleMiddle = styleConst

const styleEnd = `border-radius: 0px 0px 4px 4px;`.concat(styleConst)

export const consoleCSSParser = (eachRowText: string[]) => {
  const joinedRowText = eachRowText.map((e) => "%c  ".concat(e)).join("")
  let arrayCSS = []

  if (eachRowText.length === 1) arrayCSS.push(styleOnlyOne) // OK
  else if (eachRowText.length === 2) arrayCSS.push(styleStart, styleEnd) // OK
  else if (eachRowText.length !== 0) {
    arrayCSS = Array(eachRowText.length - 2).fill(styleMiddle)
    arrayCSS.unshift(styleStart)
    arrayCSS.push(styleEnd)
  }

  if (eachRowText.length !== 0) arrayCSS.unshift(joinedRowText)

  return arrayCSS
}