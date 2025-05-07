import Foto from '../assets/images/person.png'


export default function FotoUi({text}: {text:string}) {
  return (
    <div className="foto-ui_wrapper">
      <img src={Foto} alt="" />

      <h4>{text}</h4>
    </div>
  )
}
