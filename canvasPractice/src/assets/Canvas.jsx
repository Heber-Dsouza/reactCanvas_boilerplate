import React, { useEffect, useRef } from 'react'

const Canvas = props => {

  const { draw, ...rest } = props
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const context = canvasRef.current.getContext('2d')
    console.log(context)

    let frameCount = 0,
        animationFrameId

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])


  

  return (  <canvas ref={canvasRef} {...rest} /> )
}

export default Canvas