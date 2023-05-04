import { useEffect, useState } from "react"

interface IWindowSize {
  width: number
  height: number
}
function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resie", handleResize)
  }, [])

  return windowSize
}

export default useWindowSize

