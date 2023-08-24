import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useVisibleCartProduct = (countProductCart: number) => {
  const path = usePathname()
  const [scrollPosition, setScrollPosition] = useState(0)

  const hiddenCart = path == '/order' || countProductCart == 0
  const position = scrollPosition > 200

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { hiddenCart, position }
}
