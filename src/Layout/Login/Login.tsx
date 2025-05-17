import LogoFoto from '../../assets/images/Login.png'
import bbkIcon from '../../assets/Icon/bbk.svg'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from './store/useToken';


export default function Login() {
  const { setToken} = useToken()
  const elPhoneNumber = useRef<HTMLInputElement>(null)
  const elPassword = useRef<HTMLInputElement>(null)
  const [isVisible, setIsvisble] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const clickVisible = () => {
    setIsvisble(!isVisible)
  }


  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const requestBody = {
      phone_number: elPhoneNumber.current?.value || '',
      password: elPassword.current?.value || ''
    }

    axios.post("https://test.api.bbk.kg/sign-in", requestBody)
      .then((data) => {
        setToken(data.data.data.token);
        toast.success('succes')
      })
      .catch((err) => {
        // toast.error('неправильно ввели Пароль или Логин')
        setIsError(true)
        setTimeout(() => {
          setIsError(false)
         if(elPhoneNumber.current)  elPhoneNumber.current.value = ''
        if(elPassword.current) elPassword.current.value = ''
        }, 3000)
      })
  }


  return (
    <section className='login'>
      <img className='login-img' src={LogoFoto} alt="" />
      <div className="login_bg">
        <img src={bbkIcon} alt="" />
        <h1 className='logo_title'>Войдите в свою учетную запись</h1>

        <form className='login-form' onSubmit={handleSubmitForm}>
          <div className="login_inputs">
            <div className='login_label_input'>
              <label className={`text ${!isError || "text_err"}`}>номер телефона</label>
              <input className={`login_input ${!isError || "login_input_err"}`} maxLength={9} onInput={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/\D/g, "").slice(0, 9)
              }} ref={elPhoneNumber} type="number" />
            </div>
            <div className='login_label_input'>
              <label className={`text ${!isError || "text_err"}`}>Пароль</label>
              <div className="login_input_eyes">
                <input className={`login_input ${!isError || 'login_input_err'}`} ref={elPassword} type={isVisible ? "text" : "password"} />
                {isVisible ? <FaEyeSlash onClick={clickVisible} className={`login_eyes ${!isError || " login_eyes_err"}`} /> : <IoEyeSharp onClick={clickVisible} className={`login_eyes ${!isError || " login_eyes_err"}`} />}
              </div>
            </div>
            {!isError ||
              <p className='login_error'>неправильно ввели Пароль или Логин</p>
            }
          </div>
          <button className='login-btn' type='submit'>вход</button>
        </form>
      </div>
    </section>
  )
}
