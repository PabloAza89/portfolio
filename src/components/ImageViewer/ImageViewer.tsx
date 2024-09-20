import {
  ReactElement, useEffect, useLayoutEffect, useState, useRef, ReactNode, MouseEvent, TouchEvent
} from 'react';
import css from './ImageViewerCSS.module.css';
import {
  Forward, Add, Remove, Close, RotateLeft, RotateRight,
  Flip, Cached, LockOpen, LockOutlined, Settings,
  PlayCircleOutline
} from '@mui/icons-material/';
import { Button, Switch } from '@mui/material';
import {
  ImageViewerI, operationI, comparisonI, currentZoomI
} from '../../interfaces/interfaces';
//import { consoleCSSParser } from './consoleCSSParser';

export const ImageViewer = ({ images, index, setShowImageViewer, controlsOutside, disableAnimation, timing, mode }: ImageViewerI): ReactElement => {



  // let clickOnBG = useRef({ // CLICK ON BACKGROUND MODAL
  //   start: false, // CLICK BEGINS ON BG MODAL
  //   end: false    // CLICK ENDS ON BG MODAL
  // })

  // useEffect(() => { // DISABLES MOUSE (DESKTOP) EVENT WHEN MOUSE DRAG LEAVE CANVAS
  //   let canvas = document.getElementById('canvasImage')
  //   if (canvas !== null) canvas.onmouseout = function() { allowMove.current = false }
  // }, [])

  // window.onmousedown = function(e) {
  //   let modalDiv = document.getElementById('IVBackground');
  //   if (e.target === modalDiv) clickOnBG.current.start =  true
  //   else clickOnBG.current.start =  false
  // }

  // window.onmouseup = function(e) {
  //   let modalDiv = document.getElementById('IVBackground');
  //   if (e.target === modalDiv) clickOnBG.current.end =  true
  //   else clickOnBG.current.end =  false
  //   if (setShowImageViewer !== undefined && clickOnBG.current.start && clickOnBG.current.end) {
  //     setShowImageViewer(false)
  //   }
  // }

  const [ currentIndex, setCurrentIndex ] = useState<number>(index !== undefined ? index : 0)

  const [ imageProps, setImageProps ] = useState({
    zoomX: 1.0,
    zoomY: 1.0,
    angle: 0,
  })

  let imageRef = useRef(new Image())


  //let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION


  let currentPos = useRef({
      x: 0,
      y: 0
  })



  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION

  useEffect(() => { // LOAD NEW IMAGE
    console.log("ENTRO ACA")

    // if (locked) {

    // } else {
    //   handleRestoreWithoutAnimation()
    // }

    if (images !== undefined && currentIndex !== undefined) {
      imageRef.current.src = images[currentIndex]

      // let iVF = document.getElementById('imageViewerForeground');
      // if (iVF !== null) {
      //   iVF.style.transition = `transform .2s, left .2s, top .2s`;
      // }

    }


    // let qq = async () => {
    //   if (images !== undefined && currentIndex !== undefined) {
    //     imageRef.current.src = images[currentIndex]
  
    //     // let iVF = document.getElementById('imageViewerForeground');
    //     // if (iVF !== null) {
    //     //   iVF.style.transition = `transform .2s, left .2s, top .2s`;
    //     // }
    //   }
    // }

    // qq().then(() => {
    //   restoreHandler()
    // })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, images])


  let mouseDown = (e: TouchEvent | MouseEvent) => {
    //console.log("MOUSE DOWN")
    if ('touches' in e) { // TOUCH EVENT
      arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      allowMove.current = true
    } else { // MOUSE EVENT
      // arbPos.current = { x: e.clientX, y: e.clientY }
      // allowMove.current = true
      arbPos.current = { x: e.clientX, y: e.clientY }
      //console.log("START POSITION", e.clientX)
      allowMove.current = true
    }
  }

  let mouseUp = (e: TouchEvent | MouseEvent) => allowMove.current = false

  let targetXPosition
  let targetYPosition

  let mouseMove = (e: TouchEvent | MouseEvent) => {

    if (allowMove.current) {
      if ('touches' in e) { // TOUCH EVENT
        targetXPosition = imgPo.current.x + (e.touches[0].clientX - arbPos.current.x) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
        targetYPosition = imgPo.current.y + (e.touches[0].clientY - arbPos.current.y) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
      } else { // MOUSE EVENT
        // targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
        // targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
        // targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
        // targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP

        // arbPos.current = { x: e.clientX - arbPos.current.x, y: e.clientY - arbPos.current.y }



        // setCurrentPos((curr) => ({
        //   x: curr.x + -1,
        //   y: curr.y + -1,
        // }))

        let qq = e.clientX - arbPos.current.x
        let ww = e.clientY - arbPos.current.y

        // setCurrentPos((curr) => ({
        //   x: curr.x + e.clientX - arbPos.current.x,
        //   y: curr.y + e.clientY - arbPos.current.y
        // }))

        currentPos.current = {
          x: currentPos.current.x + (e.clientX - arbPos.current.x),
          y: currentPos.current.y + (e.clientY - arbPos.current.y),
        }

        let iVF = document.getElementById('imageViewerForeground');
        if (iVF !== null) {
          iVF.style.left = `${currentPos.current.x}px`
          iVF.style.top = `${currentPos.current.y}px`
        }

        // setLeft(curr => curr + qq)
        // setTop(curr => curr + ww)

        // left = left + qq
        // top = top + ww

        // setCurrentPos((curr) => ({
        //   x: curr.x + (e.clientX - arbPos.current.x),
        //   y: curr.y + (e.clientY - arbPos.current.y),
        // }))

        //console.log("A VER", arbPos.current.x)
        //console.log("A VER", e.clientX - arbPos.current.x) // CONTINUE HERE


        arbPos.current = {
          x: e.clientX,
          y: e.clientY
        }


      }
    }


  }

  useEffect(() => {
    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {

      //iVF.style.transform = `scale(${imageProps.zoomX}, ${imageProps.zoomY}) rotate(${imageProps.angle}deg)`
      iVF.style.transform = `
        scale(${imageProps.zoomX}, ${imageProps.zoomY})
        rotate(${imageProps.angle}deg)
      `

    }

  }, [imageProps])

  const zoomIn = () => {

    //setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX + 0.1, zoomY: curr.zoomY + 0.1 }))

    setImageProps((curr) => ({
      //...curr, zoomX: curr.zoomX + 0.1, zoomY: curr.zoomY + 0.1
      ...curr,
      zoomX: curr.zoomX < 0 ? curr.zoomX - 0.1 : curr.zoomX + 0.1,
      zoomY: curr.zoomY < 0 ? curr.zoomY - 0.1 : curr.zoomY + 0.1,
    }))
  }

  const zoomOut = () => {

    //setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX - 0.1, zoomY: curr.zoomY - 0.1 }))

    setImageProps((curr) => ({
      ...curr,
      zoomX: curr.zoomX < 0 ? curr.zoomX + 0.1 : curr.zoomX - 0.1,
      zoomY: curr.zoomY < 0 ? curr.zoomY + 0.1 : curr.zoomY - 0.1,
    }))

  }

  const handleGoLeft = () => {
    if (images !== undefined) {
      if (currentIndex === 0) setCurrentIndex(images.length - 1)
      else setCurrentIndex((curr: number) => curr - 1)

      let iVF = document.getElementById('imageViewerForeground');
      if (iVF !== null) {
        iVF.style.transition = `transform .2s, left .2s, top .2s`;
        iVF.style.left = `0px`;
        iVF.style.top = `0px`;
        iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }
      }

      setImageProps({
        zoomX: 1.0,
        zoomY: 1.0,
        angle: 0,
      })

      currentPos.current = { x: 0, y: 0 }
      //setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 })
    }
  }

  const handleGoRight = () => {
    if (images !== undefined) {
      if (currentIndex === images.length - 1) setCurrentIndex(0)
      else setCurrentIndex((curr: number) => curr + 1)

      let iVF = document.getElementById('imageViewerForeground');
      if (iVF !== null) {
        iVF.style.transition = `transform .2s, left .2s, top .2s`;
        iVF.style.left = `0px`;
        iVF.style.top = `0px`;
        iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }
      }

      setImageProps({
        zoomX: 1.0,
        zoomY: 1.0,
        angle: 0,
      })

      currentPos.current = { x: 0, y: 0 }

      //setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 })
    }
  }

  const restoreHandler = () => {
    setImageProps({
      zoomX: 1.0,
      zoomY: 1.0,
      angle: 0,
    })
    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {
      iVF.style.transition = `transform .2s, left .2s, top .2s`;
      iVF.style.left = `0px`;
      iVF.style.top = `0px`;
      iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }
    }
    currentPos.current = { x: 0, y: 0 }
  }

  const handleRestoreWithoutAnimation = () => {

    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {
      //iVF.style.transition = `transform .2s, left .2s, top .2s`;
      iVF.style.transition = `none`;
      iVF.style.left = `0px`;
      iVF.style.top = `0px`;
      //iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }
    }

    setImageProps({
      zoomX: 1.0,
      zoomY: 1.0,
      angle: 0,
    })

    currentPos.current = { x: 0, y: 0 }
  }

  const flipX = () => setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX * -1 }))
  const flipY = () => setImageProps((curr) => ({ ...curr, zoomY: curr.zoomY * -1 }))
  const rotateLeft = () => setImageProps((curr) => ({ ...curr, angle: curr.angle - 90 }))
  const rotateRight = () => setImageProps((curr) => ({ ...curr, angle: curr.angle + 90 }))

  const [ locked, setLocked ] = useState(false)
  //const [ showSettings, setShowSettings ] = useState(false)
  const [ showSettings, setShowSettings ] = useState(true)
  const [ enableLockPosition, setEnableLockPosition ] = useState(true)
  const [ enableLockZoom, setEnableLockZoom ] = useState(true)
  const [ enableLockFlip, setEnableLockFlip ] = useState(true)
  const [ enableLockRotate, setEnableLockRotate ] = useState(true)

  const lockSettings = () => setLocked(!locked)
  const handleSetEnableLockPosition = () => setEnableLockPosition(!enableLockPosition)
  const handleSetEnableLockZoom = () => setEnableLockZoom(!enableLockZoom)
  const handleSetEnableLockFlip = () => setEnableLockFlip(!enableLockFlip)
  const handleSetEnableLockRotate = () => setEnableLockRotate(!enableLockRotate)
  const handleShowSettings = () => setShowSettings(!showSettings)

  //let color = 'yellow';
  //let color = useRef('yellow');

  

  const activeColor = `rgb(255, 255, 255)`; // WHITE
  const inactiveColor = `rgb(158, 158, 158)`; // GRAY
  //const disabledColor = `transparent`; // SAME AS BG BAR COLOR
  const disabledColor = `rgb(77, 77, 77)`; // SAME AS BG BAR COLOR

  const [ colorForeground, setColorForeground ] = useState(disabledColor)
  const [ colorBackground, setColorBackground ] = useState(disabledColor)
  const [ colorLine, setColorLine ] = useState(inactiveColor)

  const [ styles, setStyles ] = useState({
    pos: {
      id: 'pos',
      width: 84,
      left: 0, //                           ↓ UNUSED ↓
      line: { left: disabledColor, center: disabledColor, right: disabledColor,  },
      body: { left: disabledColor, center: disabledColor, right: disabledColor },
    },
    afterPos: {
      id: 'afterPos',
      width: 84,
      left: 84,
      line: { left: disabledColor, center: disabledColor, right: disabledColor,  },
      body: { left: disabledColor, center: disabledColor, right: disabledColor },
    },
    zoom: {
      id: 'zoom',
      width: 84,
      left: 168,
      line: { left: disabledColor, center: disabledColor, right: disabledColor,  },
      body: { left: disabledColor, center: disabledColor, right: disabledColor },
    },
    flip: {
      id: 'flip',
      width: 84,
      left: 252,
      line: { left: disabledColor, center: disabledColor, right: disabledColor,  },
      body: { left: disabledColor, center: disabledColor, right: disabledColor },
    },
    rotate: {
      id: 'rotate',
      width: 84,
      left: 336,
      line: { left: disabledColor, center: disabledColor, right: disabledColor,  },
      body: { left: disabledColor, center: disabledColor, right: disabledColor },
    },
    lock: {
      id: 'lock',
      width: 42,
      left: 420,
      line: { left: disabledColor, center: disabledColor, right: disabledColor,  },
      body: { left: disabledColor, center: disabledColor, right: disabledColor },
    },
  })

  useEffect(() => {

    let copyStyles: any = {...styles} // COPY STATE

    const updater = (e: any) => {

      //console.log("obj.active", e.active)
      
      if (e.active) {
        e.active.forEach((x: any) => {
          let obj: any = copyStyles
          let dir = x.split('.')
          while (dir.length > 1) obj = obj[dir.shift()]
          obj[dir.shift()] = activeColor;
        })

      }
      if (e.inactive) {
        e.inactive.forEach((x: any) => {
          let obj: any = copyStyles
          let dir = x.split('.')
          while (dir.length > 1) obj = obj[dir.shift()]
          obj[dir.shift()] = inactiveColor;
        })
      }
      if (e.disabled) {
        e.disabled.forEach((x: any) => {
          let obj: any = copyStyles
          let dir = x.split('.')
          while (dir.length > 1) obj = obj[dir.shift()]
          obj[dir.shift()] = disabledColor;
        })
      }


    }

    let lines = [ 
      'pos.line.center',  'pos.line.right','afterPos.line.left', 'afterPos.line.center', 'afterPos.line.right', 'zoom.line.left', // 0 - 5
      'zoom.line.center', 'zoom.line.right', 'flip.line.left', // 6 - 8
      'flip.line.center', 'flip.line.right', 'rotate.line.left', // 9 - 11
      'rotate.line.center', 'rotate.line.right', 'lock.line.left' // 12 - 14
    ]

    // BUTTON BACKGROUND & LINES COLOR

    if (enableLockPosition)
      if (locked) updater({ active: [ 'pos.body.center', ...lines.slice(0) ] })
      else updater({ inactive: [ 'pos.body.center', ...lines.slice(0) ] })
    else updater({ disabled: [ 'pos.body.center', ...lines.slice(0) ] })
    if (enableLockZoom)
      if (locked) updater({ active: [ 'zoom.body.center', ...lines.slice(6) ] })
      else updater({ inactive: [ 'zoom.body.center', ...lines.slice(6) ] })
    else updater({ disabled: [ 'zoom.body.center' ] })
    if (enableLockFlip)
      if (locked) updater({ active: [ 'flip.body.center', ...lines.slice(9) ] })
      else updater({ inactive: [ 'flip.body.center', ...lines.slice(9) ] })
    else updater({ disabled: [ 'flip.body.center' ] })
    if (enableLockRotate)
      if (locked) updater({ active: [ 'rotate.body.center', ...lines.slice(12) ] })
      else updater({ inactive: [ 'rotate.body.center', ...lines.slice(12) ] })
    else updater({ disabled: [ 'rotate.body.center' ] })
    if (locked) {
      updater({ active: [ 'lock.body.center', 'lock.line.center' ] })
    }
    else {
      updater({ inactive: [ 'lock.body.center', 'lock.line.center' ] })
    }

    // BUTTON BACKGROUND SIMULATED BORDER-RADIUS
    if (enableLockZoom && enableLockFlip)
      if (locked) updater({ active: [ 'zoom.body.right', 'flip.body.left' ] })
      else updater({ inactive: [ 'zoom.body.right', 'flip.body.left' ] })
    else updater({ disabled: [ 'zoom.body.right', 'flip.body.left' ] })
    if (enableLockFlip && enableLockRotate)
      if (locked) updater({ active: [ 'flip.body.right', 'rotate.body.left' ] })
      else updater({ inactive: [ 'flip.body.right', 'rotate.body.left' ] })
    else updater({ disabled: [ 'flip.body.right', 'rotate.body.left' ] })
    if (enableLockRotate)
      if (locked) updater({ active: [ 'rotate.body.right', 'lock.body.left' ] })
      else updater({ inactive: [ 'rotate.body.right', 'lock.body.left' ] })
    else updater({ disabled: [ 'rotate.body.right', 'lock.body.left' ] })

    setStyles(copyStyles) // UPDATE STATE






  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locked, enableLockPosition, enableLockZoom, enableLockFlip, enableLockRotate])



  useEffect(() => {
    let lS = document.getElementById('lockSettings');
    if (lS !== null) {
      showSettings ?
      lS.style.bottom = `49px` :
      lS.style.bottom = `-200px`;
    }

  }, [showSettings])


  const MuiButton = ({ style, classButton, onClick, Icon, classIcon }: any) => {
    let parsedClassIcon = Array.isArray(classIcon) ? classIcon.join(" ") : classIcon
    return (
      <Button
        disableElevation={true}
        style={style}
        variant="contained"
        className={`${classButton}`}
        onClick={() => onClick()}
      >
        <Icon className={`${parsedClassIcon}`} />
      </Button>
    )
  }

  const MuiSwitch = ({ onClick, checked }: any) => {
    return (
      <Switch
        onClick={onClick}
        checked={checked}
        className={css.switch}
        classes={{
          track: checked ? `${css.track} ${css.trackEnabled}` : `${css.track} ${css.trackDisabled}`,
          thumb: css.thumb,
          switchBase:  css.switchBase,
          checked: css.checked,
          colorPrimary: css.colorPrimary
        }}
      />
    )
  }

  



  const abc = (el:any) => {
    //return "url(#gradient)"

    console.log("EL", el.id)
    //console.dir(el)

    return (
      <div className={`${css.buttonBGTest}`} style={{ left: el.left, width: el.width }}>
        <svg width={el.width} height="42" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`background${el.id}`} x1="100%" x2="0%"> {/* SIMULATED BORDER-RADIUS */}
              <stop className={css.fade} offset="50%" stopColor={el.body.right} />
              <stop className={css.fade} offset="50%" stopColor={el.body.left} />
            </linearGradient>
            <linearGradient id={`line${el.id}`} x1="100%" x2="0%"> {/* BG TOP/BOTTOM LINE */}
              <stop className={css.fade} offset="50%" stopColor={el.line.right} />
              <stop className={css.fade} offset="50%" stopColor={el.line.left} />
              {/* <stop className={css.fade} offset="50%" stopColor="red" />
              <stop className={css.fade} offset="50%" stopColor="red" /> */}
            </linearGradient>
            <clipPath id="upperSide" clipPathUnits="userSpaceOnUse"> {/* FG TOP LINE */}
              <rect width={el.width} height="1.5" />
            </clipPath>
            <clipPath id="centerSide" clipPathUnits="userSpaceOnUse"> {/* FG CENTER */}
              <rect width={el.width} height="39" y="1.5" />
              {/* <rect width="84" height="39.2" y="1.4" /> */}
              {/* <rect width="84" height="42" y="0" /> */}
            </clipPath>
            <clipPath id="LowerSide" clipPathUnits="userSpaceOnUse"> {/* FG BOTTOM LINE */}
              <rect width={el.width} height="1.5" y="40.5" />
            </clipPath>
          </defs>

          <rect className={css.fade} width={el.width} height="42" fill={`url(#background${el.id})`} /> {/* SIMULATED BORDER-RADIUS */}

          <rect className={css.fade} width={el.width} height="1.5" fill={`url(#line${el.id})`} /> {/* BG TOP LINE */}
          <rect className={css.fade} width={el.width} height="1.5" y="40.5" fill={`url(#line${el.id})`} /> {/* BG BOTTOM LINE */}

          <rect className={css.fade} width={el.width} height="42" rx="7.5" ry="7.5" fill={el.body.center} clipPath="url(#centerSide)" /> {/* FG CENTER */}
          <rect className={css.fade} width={el.width} height="42" rx="7.5" ry="7.5" fill={el.line.center} clipPath="url(#upperSide)" /> {/* FG TOP LINE */}
          <rect className={css.fade} width={el.width} height="42" rx="7.5" ry="7.5" fill={el.line.center} clipPath="url(#LowerSide)" /> {/* FG BOTTOM LINE */}

          

        </svg>
      </div>
    )
  }


  return (
    <div
      id={`IVBackground`}
      className={css.IVBackground}
      onMouseDown={(e) => mouseDown(e)} // MOUSE START
      onMouseMove={(e) => mouseMove(e)} // MOUSE MOVE
      onMouseUp={(e) => mouseUp(e)} // MOUSE END
    >
      <img
       // style={{ left, top }}
        id={`imageViewerForeground`}
        ref={imageRef}
        className={css.imageViewerForeground}
        onDragStart={(e) => e.preventDefault()}
        src={
          images !== undefined ?
          images[currentIndex] :
          ""
        }
        //src={""}
        alt=""
      >
      </img>


      <div
        id={`bottomBar`}
        className={css.bottomBar}
      >
        <div className={css.buttonsContainer}>
          <div className={css.imageCounter}>
            { currentIndex !== undefined && images !== undefined ? currentIndex + 1 : 0 }/{ currentIndex !== undefined && images !== undefined ? images.length : 0 }
          </div>

          {/* <div className={`${css.buttonBG} ${css.position}`} />
          <div className={`${css.buttonBG} ${css.zoom}`} />
          <div className={`${css.buttonBG} ${css.flip}`} />
          <div className={`${css.buttonBG} ${css.rotate}`} />
          <div className={`${css.buttonBG} ${css.lock}`} /> */}

          
            { abc(styles.pos) }
            { abc(styles.afterPos) }
            { abc(styles.zoom) }
            { abc(styles.flip) }
            { abc(styles.rotate) }
            { abc(styles.lock) }
          

          <MuiButton // GO LEFT
            //style={{ order: 0 }}
            classButton={css.button}
            onClick={handleGoLeft}
            Icon={Forward}
            classIcon={[ css.icon, css.rotateX ]}
            //classIcon={[ css.icon ]}
          />

          <MuiButton // GO RIGHT
            //style={{ order: 10 }}
            classButton={css.button}
            onClick={handleGoRight}
            Icon={Forward}
            classIcon={css.icon}
          />

          <MuiButton // RESET ALL
            //style={{ order: 20 }}
            classButton={css.button}
            onClick={restoreHandler}
            Icon={Cached}
            classIcon={css.icon}
          />

          <MuiButton // RESET ALL
            //style={{ order: 20 }}
            classButton={css.button}
            onClick={restoreHandler}
            Icon={PlayCircleOutline}
            classIcon={css.icon}
          />

          <MuiButton // ZOOM OUT
            //style={{ order: enableLockZoom ? 81 : 30 }}
            classButton={css.button}
            onClick={zoomOut}
            Icon={Remove}
            classIcon={css.icon}
          />

          <MuiButton // ZOOM IN
            //style={{ order: enableLockZoom ? 82 : 40 }}
            classButton={css.button}
            onClick={zoomIn}
            Icon={Add}
            classIcon={css.icon}
          />

          <MuiButton // FLIP X
           // style={{ order: enableLockFlip ? 83 : 50 }}
            classButton={css.button}
            onClick={flipX}
            Icon={Flip}
            classIcon={[ css.icon, css.rotateX ]}
          />

          <MuiButton // FLIP Y
            //style={{ order: enableLockFlip ? 84 : 60 }}
            classButton={css.button}
            onClick={flipY}
            Icon={Flip}
            classIcon={[ css.icon, css.rotateY ]}
          />

          <MuiButton // ROTATE LEFT
            classButton={css.button}
            onClick={rotateLeft}
            Icon={RotateLeft}
            classIcon={[ css.icon, css.rotateX ]}
          />

          <MuiButton // ROTATE RIGHT
            //style={{ order: enableLockRotate ? 86 : 80 }}
            /* style={{ boxShadow: '0px 0px 0px 3.5px red' }} */
            classButton={css.button}
            onClick={rotateRight}
            Icon={RotateRight}
            classIcon={[ css.icon, css.rotateX ]}
          />



          <div // LOCK
            //style={{ order: 90 }}
            className={css.lockContainer}
          >
            {/* <div className={css.IVLine} /> */}
            {/* <div className={`${css.IVLine} ${css.IVUpperLine}`} />
            <div className={`${css.IVLine} ${css.IVLowerLine}`} /> */}

            <MuiButton
              classButton={css.button}
              onClick={lockSettings}
              Icon={ locked ? LockOutlined : LockOpen }
              classIcon={[ css.icon, css.iconLock ]}
            >

            </MuiButton>
          </div>


          <MuiButton  // SETTINGS
            //style={{ order: 100 }}
            classButton={css.button}
            onClick={handleShowSettings}
            Icon={Settings}
            classIcon={css.icon}
          />


          <Button // CLOSE
            //style={{ order: 110 }}
            variant="contained"
            className={css.button}
            onClick={() => { if (setShowImageViewer !== undefined) setShowImageViewer(false) }}
          >
            <Close className={css.icon} />
          </Button>
          <div className={css.zoomContainer}>
            { (Math.abs(imageProps.zoomX)).toFixed(1) }x
          </div>
        </div>
      </div>

      <div
        id={`lockSettings`}
        className={css.lockSettings}
      >
        Enable lock over:
        <div>
          <MuiSwitch
            onClick={handleSetEnableLockPosition}
            checked={ enableLockPosition ? true : false }
          />
          Position
        </div>
        <div>
          <MuiSwitch
            onClick={handleSetEnableLockZoom}
            checked={ enableLockZoom ? true : false }
          />
          Zoom
        </div>

        <div>
          <MuiSwitch
            onClick={handleSetEnableLockFlip}
            checked={ enableLockFlip ? true : false }
          />
          Flip
        </div>

        <div>
          <MuiSwitch
            onClick={handleSetEnableLockRotate}
            checked={ enableLockRotate ? true : false }
          />
          Rotate
        </div>

        <div>
          Dont forget to 'lock the padlock' to changes take effect.
        </div>

      </div>

    </div>
  )
}