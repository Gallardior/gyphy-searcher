import React, { Suspense } from "react"
// import { PopularGifs } from "./PopularGifs"
import { useNearScreen } from "../../hooks/useNearScreen"

const OtherComponent = React.lazy(() => import('./PopularGifs'));

export function LazyPopularGifs () {
  const { isNearScreen, elementRef } = useNearScreen({margin: '100px'})

  return (
    <div ref={elementRef} className="PopularGifs--lazy">
      <Suspense fallback={null}>
        {
          isNearScreen && <OtherComponent />
        }
      </Suspense>
    </div>
  )
}

export default React.memo(LazyPopularGifs)