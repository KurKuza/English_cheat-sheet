import { useState } from 'preact/hooks'

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false)

  if (window.innerWidth <= 768) {
    setIsTablet(true)
  }
  return isTablet
}
