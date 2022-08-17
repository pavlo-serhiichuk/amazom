import {useCallback, useRef} from 'react'

const useDebounce = (productTitle: string, callback: any, delay: any) => {
  const timer: any = useRef()

  const debouncedCallback = useCallback((...args: any) => {
    if(timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      if (productTitle.length > 0) {
        callback(...args)
      }
    } , delay)

  }, [callback, delay])

  return debouncedCallback
}

export default useDebounce