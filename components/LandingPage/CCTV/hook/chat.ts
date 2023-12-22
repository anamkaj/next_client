import { useEffect } from 'react'

export const useChatraChat = () => {
  useEffect(() => {
    var s = document.createElement('script')
    const chatra = (d: HTMLScriptElement, w: any, c: any) => {
      w.ChatraID = 'xRGrSyshftL5poJWL'
      w[c] =
        w[c] ||
        function () {
          ;(w[c].q = w[c].q || []).push(arguments)
        }
      d.async = true
      d.src = 'https://call.chatra.io/chatra.js'
      if (document.head) document.head.appendChild(s)
    }
    chatra(s, window, 'Chatra')

    return () => {
      document.body.removeChild(s)
    }
  }, [])
}
