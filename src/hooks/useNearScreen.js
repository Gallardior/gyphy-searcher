import { useState, useEffect, useRef } from "react"

export function useNearScreen ({margin = '250px', externalRef, once = true}) {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect( () => {
    const elementToUse = externalRef ? externalRef.current : elementRef.current

    const onChangue = (entries, observer) => {
      const element = entries[0]
      
      if(element.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    const observer = new IntersectionObserver(onChangue, {
      rootMargin: margin
    })
  
    if(elementToUse) observer.observe(elementToUse)

    return () => observer.disconnect()
  })

  return {isNearScreen: show, elementRef}
}