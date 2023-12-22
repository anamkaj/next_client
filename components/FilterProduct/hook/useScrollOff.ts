import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { useEffect } from 'react'

export const useScrollOff = (state: boolean, div: HTMLDivElement | null) => {
  useEffect(() => {
    if (!state == true) {
      const offScroll = () => {
        if (div !== null) {
          disableBodyScroll(div)
        }
      }
      offScroll()
    }
    return () => clearAllBodyScrollLocks()
  }, [state])
}
