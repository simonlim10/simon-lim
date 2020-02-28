import React, { useState, useRef, useMemo, useCallback } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useSpring, animated as a, interpolate } from "react-spring"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import * as util from 'util' // has no default export
import { inspect } from 'util'

import Hero from "../components/Hero"

import categDev from "../images/categ-dev.png"
import categDesign from "../images/categ-design.png"
import categVideo from "../images/categ-video.png"
import categPhoto from "../images/categ-photo.png"

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
      onScroll();
    },
    [positionsStore],
    null,
    true
  )

//useRef({ x: 10, y: 150 })

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

  const interpSmallA = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 25) + 800},${(xy[1] / 25) + 50 - o * 0.5}) scale(0.1)`)
  const interpSmallB = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 25) + 100},${(xy[1] / 25) + 100 - o * 0.5}) scale(0.1)`)
  const interpSmallC = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 5) + 1000},${(xy[1] / 5) + 130 - o * 5}) scale(0.4)`)
  const interpSmallD = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 14) + 450},${(xy[1] / 14) + 170 - o * 2.5}) scale(0.2)`)
  const interpSmallE = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 10) + 700},${(xy[1] / 10) + 300 - o * 4}) scale(0.3)`)
  const interpSmallF = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 14) + 50},${(xy[1] / 14) + 550 - o * 2.5}) scale(0.2)`)
  const interpSmallG = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 14) + 750},${(xy[1] / 14) + 650 - o * 2.5}) scale(0.2)`)
  const interpSmallH = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 25) + 500},${(xy[1] / 25) + 700 - o * 0.5}) scale(0.1)`)

  const interpBigA = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 5) + 50},${(xy[1] / 5) + 280 - o * 14}) scale(0.7)`)
  const interpBigB = interpolate([st, xy], (o, xy) => `translate(${(xy[0] / 5) + 1100},${(xy[1] / 5) + 420 - o * 10}) scale(0.6)`)

  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const onScroll = useCallback(e => set({ st: positionsStore.getViewportY() / 4 }), [])

  return (
    <div class="banner-animation" onMouseMove={onMove} ref={viewportRef}>

      <div className="onscroll-container">

        <div className="container-max-width hero-banner-container">
          <Hero />
        </div>

        <a.svg className="svg-viewbox" width="100%" height="100%">

          <div className="color-filter"></div>

          <a.g className="animated-dev" transform={interpSmallA}>
            <image href={categDev} />
          </a.g>
          <a.g className="animated-dev" transform={interpSmallB}>
            <image href={categDev} />
          </a.g>
          <a.g className="animated-dev" transform={interpSmallC}>
            <image href={categVideo} />
          </a.g>
          <a.g className="animated-dev" transform={interpSmallD}>
            <image href={categDesign} />
          </a.g>
          <a.g className="animated-dev" transform={interpSmallE}>
            <image href={categPhoto} />
          </a.g>
          <a.g className="animated-dev" transform={interpSmallF}>
            <image href={categDev} />
          </a.g>
          <a.g className="animated-dev" transform={interpSmallG}>
            <image href={categDesign} />
          </a.g>
          <a.g className="animated-dev" transform={interpSmallH}>
            <image href={categDev} />
          </a.g>

          <a.g className="animated-dev" transform={interpBigA}>
            <image href={categDev} />
          </a.g>
          <a.g className="animated-dev" transform={interpBigB}>
            <image href={categDesign} />
          </a.g>

        </a.svg>

      </div>

    </div>
  )
}

export default BannerAnimation
