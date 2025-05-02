import { ButtonGray, ButtonOrange } from "../../ui/Buttons"
import backIcon from '../../assets/Icon/back.svg'
import { Navigate, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import addIcon from '../../assets/Icon/add_icons.svg'

export default function ProfileBg() {
  const { t } = useTranslation()
  const Navigate = useNavigate()
  return (
    <section>
      <div className="container">
        <div className="profile_bg">
          <div className="profile_bg_back">
            <ButtonGray text={t("back")} filterIcon={backIcon} onClick={() => Navigate(-1)} />
            <ButtonOrange icon={addIcon} text={t('add')} onClick={(e) => console.log(e)} />
          </div>
        </div>
      </div>
    </section>
  )
}
