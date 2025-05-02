import { Link } from 'react-router-dom'
import avatar from '../../assets/Icon/avatar.svg'
import useToken from '../../Layout/Login/store/useToken'
import { useTranslation } from 'react-i18next';

interface MenuProfileOpen {
  isOpen: boolean;
}

export default function MenuProfile({ isOpen }:MenuProfileOpen) {
const { t } =  useTranslation()
  const { removeToken } = useToken()

  const handleRemove = () => {
    removeToken()
  }

  return (
    <>
      <img className='menu_profile_avatar' src={avatar} alt="" />
      <div>
        <p className='menu_profile_name'>{t("janibek")}</p>
        <p className='menu_profile_role'>{t("admin")}</p>
      </div>

      {isOpen && (
        <ul className="menu_profile_modal">
          <li><Link to={"/profile"}>профиль</Link></li>
          <li onClick={() => handleRemove()}>выйти</li>
        </ul>
      )}
    </>
  )
}
