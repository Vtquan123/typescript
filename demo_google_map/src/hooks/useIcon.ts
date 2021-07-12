import { useState, useEffect } from 'react'

export const useIcon = (height: number, width: number, iconSrc: string) => {
  const [icon, setIcon] = useState(document.createElement('img'))
  const asyncIcon = () => new Promise<any>((resolve, reject) => {
    try {
      const canvas = document.createElement("canvas")
      canvas.height = height
      canvas.width = width
      // const ctx = canvas.getContext('2d') as NonNullable<CanvasRenderingContext2D>
      const img = document.createElement('img')
      img.src = iconSrc
      img.onload = () => {
        resolve(img)
      }
    } catch (err) {
      reject(err)
    }
  })

  useEffect(() => {
    asyncIcon().then((loadedIcon) => {
      setIcon(loadedIcon)
    })
  }, [])
  return icon
}
