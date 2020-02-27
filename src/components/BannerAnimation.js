import React, { useState, useRef, useMemo, useCallback } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useSpring, animated as a, interpolate } from "react-spring"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import * as util from 'util' // has no default export
import { inspect } from 'util'

import categDev from "../images/categ-dev.png"

function BannerAnimation() {

  const PositionStore = () => {
    const [renderCount, triggerReRender] = useState(0)
    const elementPosition = useRef({ x: 10, y: 150 })
    const viewportPosition = useRef({ x: 0, y: 0 })
    let throttleTimeout = null

    const getPos = (el, axis) => Math.round(el.current[axis])

    const setPos = (el, pos) => {
      el.current = pos
      if (throttleTimeout !== null) return
      // Only re-render the component every 0.1s
      throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
    }


    return {
      getElementX: () => getPos(elementPosition, 'x'),
      getElementY: () => getPos(elementPosition, 'y'),
      getViewportX: () => getPos(viewportPosition, 'x'),
      getViewportY: () => getPos(viewportPosition, 'y'),
      setElementPosition: pos => setPos(elementPosition, pos),
      setViewportPosition: pos => setPos(viewportPosition, pos),
      renderCount
    }
  }

  const positionsStore = PositionStore()
  const viewportRef = useRef()

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos);
      const { style } = viewportRef.current;
      console.log("zaz style:" + JSON.stringify(style.top));
      style.top = `${150 + currPos.y}px`;
      style.left = `${10 + currPos.x}px`;
      onScroll();
    },
    [positionsStore],
    null,
    true
  )

//useRef({ x: 10, y: 150 })

 // let nitbitY = useRef({ value: positionsStore.getViewportY() });

 // let nitbitY = useRef({ value: positionsStore.getViewportY() });

 //console.log(positionsStore.getViewportY());
 //let nitbitY = useRef();

// <div className="console-log">zaz nitbitY: {nitbitY}</div>

  const [nitbitzY, setNitbitzY] = useState(positionsStore.getViewportY());
  
  //devnote1: had to put this in a curly bracket, something about "Too many renders. React puts a limit to rendering" 
  const updateNitbit = () => {
    setNitbitzY(positionsStore.getViewportY());
    console.log("zaz updateNitbit constant positionsStore.getViewportY()" + positionsStore.getViewportY());
  }

  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const consoLog = () => { 
    console.log("zaz st:" + util.inspect(st)); 
    console.log("zaz window:" + util.inspect(window)); 
    console.log("zaz window.scrollTop:" + window.scrollY); 
  }

  const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(-50%, -50%, 0)`)
  
  // const windowPosition = target.getBoundingClientRect();

  const interpHero = st.interpolate(o => `translate(90,${105 + o / 4})`)
  const interpSmallA = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 157},${xy[1] / 30 + 80 - o * 3}) scale(0.8)`)
  const interpSmallB = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 57},${o / 2})`)
  const interpSmallC = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 357},${xy[1] / 30 + 80 - o * 2}) scale(0.8)`)
  const interpSmallD = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 457},${xy[1] / 30 + 80 - o * 1}) scale(0.8)`)
  const interpSmallE = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 557},${xy[1] / 30 + 80 - o * 2}) scale(0.8)`)

  const interpBigA = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 157},${xy[1] / 30 + 80 - o * 8}) scale(0.8)`)
  const interpBigB = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 257},${xy[1] / 30 + 80 - o * 8}) scale(0.8)`)
  const interpBigC = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 357},${xy[1] / 30 + 80 - o * 8}) scale(0.8)`)
  const interpBigD = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 457},${xy[1] / 30 + 80 - o * 8}) scale(0.8)`)
  const interpBigE = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 557},${xy[1] / 30 + 80 - o * 8}) scale(0.8)`)


  const interpIris = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 - o / 2})`)
  const interpPupil = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 - o / 2})`)
  const interpSpot = interpolate([st, xy], (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 - o / 2})`)
  const interpMouth = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 18 + 188},${xy[1] / 20 + 230 - o * 2}) scale(0.8)`)
  const interpHair = st.interpolate(o => `translate(79,${o / 4})`)

  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const onScroll = useCallback(e => set({ st: positionsStore.getViewportY() }), [])



  return (
    <div className="onscroll-container" onMouseMove={onMove} onScroll={consoLog} ref={viewportRef}>

      <a.svg style={{ transform: interpBg }} viewBox="0 0 490 512">

        <a.g className="animated-dev" transform={interpSmallB}>
          <image href={categDev} />
        </a.g>        


        <a.img className="animated-dev" transform={interpSmallC} src={categDev} />
        <a.img className="animated-dev" transform={interpSmallD} src={categDev} />
        <a.img className="animated-dev" transform={interpSmallE} src={categDev} />

        <a.img className="animated-dev" transform={interpBigA} src={categDev} />
        <a.img className="animated-dev" transform={interpBigB} src={categDev} />
        <a.img className="animated-dev" transform={interpBigC} src={categDev} />
        <a.img className="animated-dev" transform={interpBigD} src={categDev} />
        <a.img className="animated-dev" transform={interpBigE} src={categDev} />

      </a.svg>

      <button onClick={consoLog}>Buttonz</button>

    </div>
  )
}

export default BannerAnimation
