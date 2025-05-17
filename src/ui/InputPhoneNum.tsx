import { types } from "sass"

interface Tip {
    children: React.ReactNode;
}



export default function InputPhoneNum({children}:Tip) {
  return (
    <div className="input_phone_num">
      <div className="input_phone_num_code">+996</div>
  {children}
    </div>
  )
}
