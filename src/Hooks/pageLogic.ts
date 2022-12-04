import { useEffect } from 'preact/hooks'

export function usePageLogic() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}
