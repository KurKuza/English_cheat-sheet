import { useLayoutEffect } from 'preact/hooks'

export function usePageLogic() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}
