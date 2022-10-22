import { useRef } from "react"

export default function Image (props) {
  const previewImg = useRef()
  
  return (
    <img 
      src={props.src} 
      alt={props.alt}
      ref={previewImg}
      // En caso de error de carga de imagen se muestra una imagen por defecto
      onError={(e) => previewImg.current.src = 'https://www.quicideportes.com/assets/images/custom/no-image.png' }
      className={props.className}
    />
  )
}