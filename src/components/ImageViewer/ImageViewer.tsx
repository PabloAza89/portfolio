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

  useEffect(() => {

    const activeColor = `rgb(255, 255, 255)`; // WHITE
    const inactiveColor = `rgb(158, 158, 158)`; // GRAY
    const disableColor = `rgb(77, 77, 77)`; // SAME AS BG BAR COLOR

    let root = document.documentElement.style

    const varSetter = (e: any) => {

      console.log("obj.active", e.active)

      if (e.active)
        if (Array.isArray(e.active)) e.active.forEach((x: any) => { root.setProperty(x, activeColor) })
        else root.setProperty(e.active, activeColor)
      if (e.inactive)
        if (Array.isArray(e.inactive)) e.inactive.forEach((x: any) => { root.setProperty(x, inactiveColor) })
        else root.setProperty(e.inactive, inactiveColor)
      if (e.disableColor)
        if (Array.isArray(e.disableColor)) e.disableColor.forEach((x: any) => { root.setProperty(x, disableColor) })
        else root.setProperty(e.disableColor, disableColor)


    }

    const lines: string[] = [
      '--IVPositionLine', '--IVZoomLine',
      '--IVFlipLine', '--IVRotateLine'
    ]

    // BUTTON BACKGROUND & LINES COLOR
    if (enableLockPosition)
      if (locked) varSetter({ active: ['--IVPosition', ...lines.slice(0)] }) // POSITION ACTIVE
      else varSetter({ inactive: ['--IVPosition', ...lines.slice(0)] }) // POSITION INACTIVE
    else varSetter({ disableColor: ['--IVPosition', ...lines.slice(0)] }) // POSITION CLEAR
    if (enableLockZoom)
      if (locked) varSetter({ active: ['--IVZoom', ...lines.slice(1)] }) // ZOOM ACTIVE
      else varSetter({ inactive: ['--IVZoom', ...lines.slice(1)] }) // ZOOM INACTIVE
    else varSetter({ disableColor: '--IVZoom' }) // ZOOM TRANSPARENT
    if (enableLockFlip)
      if (locked) varSetter({ active: ['--IVFlip', ...lines.slice(2)] }) // FLIP ACTIVE
      else varSetter({ inactive: ['--IVFlip', ...lines.slice(2)] }) // FLIP INACTIVE
    else varSetter({ disableColor: '--IVFlip' }) // FLIP TRANSPARENT
    if (enableLockRotate)
      if (locked) varSetter({ active: ['--IVRotate', ...lines.slice(3)] }) // ROTATION ACTIVE
      else varSetter({ inactive: ['--IVRotate', ...lines.slice(3)] }) // ROTATION INACTIVE
    else varSetter({ disableColor: '--IVRotate' }) // ROTATION TRANSPARENT
    if (locked) varSetter({ active: '--IVLock' }) // LOCK ACTIVE
    else varSetter({ inactive: '--IVLock' }) // LOCK INACTIVE

    // BUTTON BACKGROUND SIMULATED BORDER-RADIUS
    if (enableLockZoom && enableLockFlip)
      if (locked) varSetter({ active: '--IVZoomFlip' })
      else varSetter({ inactive: '--IVZoomFlip' })
    else varSetter({ disableColor: '--IVZoomFlip' })
    if (enableLockFlip && enableLockRotate)
      if (locked) varSetter({ active: '--IVFlipRotate' })
      else varSetter({ inactive: '--IVFlipRotate' })
    else varSetter({ disableColor: '--IVFlipRotate' })
    if (enableLockRotate)
      if (locked) varSetter({ active: '--IVRotateLock' })
      else varSetter({ inactive: '--IVRotateLock' })
    else varSetter({ disableColor: '--IVRotateLock' })

    // // BUTTON BACKGROUND SIMULATED BORDER-RADIUS
    // if (enableLockZoom && enableLockFlip)
    //   if (locked) varSetter({ active: '--IVZoomFlip' })
    //   else varSetter({ inactive: '--IVZoomFlip' })
    // else varSetter({ disableColor: '--IVZoomFlip' })
    // if (enableLockFlip && enableLockRotate)
    //   if (locked) varSetter({ active: '--IVFlipRotate' })
    //   else varSetter({ inactive: '--IVFlipRotate' })
    // else varSetter({ disableColor: '--IVFlipRotate' })
    // if (enableLockRotate)
    //   if (locked) varSetter({ active: '--IVRotateLock',  })
    //   else varSetter({ inactive: '--IVRotateLock' })
    // else varSetter({ disableColor: '--IVRotateLock' })




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

          <div className={`${css.buttonBGTest}`}>
          <svg width="84" height="42" xmlns="http://www.w3.org/2000/svg">
            {/* <rect width="84" height="42" rx="7.5" ry="7.5" style={{fill:"rgb(0,0,255)",strokeWidth:1,stroke:"red"}} /> */}
            <rect width="84" height="1.5" style={{ fill:"yellow" }} />
            <rect width="84" height="42" rx="7.5" ry="7.5" style={{ fill:"rgb(0,0,255)" }} />
          </svg>
          </div>
          

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
          Dont forget to 'lock' the padlock to changes take effect.
        </div>

      </div>

    </div>
  )
}