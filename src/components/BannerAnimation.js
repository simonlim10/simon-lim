import React, { useCallback } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useSpring, animated as a, interpolate } from "react-spring"

import categDev from "../images/categ-dev.png"

function BannerAnimation() {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(-50%, -50%, 0)`)


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
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])
  return (
    <div className="onscroll-container" onMouseMove={onMove} onScroll={onScroll}>

      <div style={{ height: '300%', overflow: 'hidden' }}></div>
      <a.svg style={{ transform: interpBg }} viewBox="0 0 490 512">

        <a.g className="animated-dev" transform={interpSmallB}>
          <image href={categDev} />
        </a.g>        

        <a.g className="animated-dev" transform="translate(-20.000000, 203.000000)">
          <image href={categDev} />
        </a.g>        

        <div className="console-log">interpSmallB: {JSON.stringify(interpSmallB)}</div>

        <a.img className="animated-dev" transform={interpSmallC} src={categDev} />
        <a.img className="animated-dev" transform={interpSmallD} src={categDev} />
        <a.img className="animated-dev" transform={interpSmallE} src={categDev} />

        <a.img className="animated-dev" transform={interpBigA} src={categDev} />
        <a.img className="animated-dev" transform={interpBigB} src={categDev} />
        <a.img className="animated-dev" transform={interpBigC} src={categDev} />
        <a.img className="animated-dev" transform={interpBigD} src={categDev} />
        <a.img className="animated-dev" transform={interpBigE} src={categDev} />

      </a.svg>

    </div>
  )
}

export default BannerAnimation
