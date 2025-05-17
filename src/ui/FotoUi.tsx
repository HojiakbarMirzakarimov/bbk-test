import { useRef } from 'react';
import Foto from '../assets/images/person.png'


export interface FotoUiProps {
  text: string;
  image?: string;
}
export default function FotoUi({ text, image }: FotoUiProps) {
  const elFileInput = useRef<HTMLInputElement>(null)

  return (
    <div className="foto-ui_wrapper">
      <img onClick={() => elFileInput.current?.click()} src={image || Foto} alt="" />
      <input ref={elFileInput} type="file" />
      <h4>{text}</h4>
    </div>
  )
}
