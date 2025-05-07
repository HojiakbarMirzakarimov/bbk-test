import { ButtonGray, ButtonOrange } from "../../ui/Buttons"
import backIcon from '../../assets/Icon/back.svg'
import { Navigate, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import addIcon from '../../assets/Icon/add_icons.svg'
import FotoUi from "../../ui/FotoUi"
import BackBtn from "../../ui/BackBtn"


export default function ProfileBg() {
  const { t } = useTranslation()
  const Navigate = useNavigate()
  return (
    <section>
      <div className="container">
        <div className="profile_bg">
          <BackBtn>
            <ButtonGray text={t("back")} filterIcon={backIcon} onClick={() => Navigate(-1)} />
            <ButtonOrange icon={addIcon} text={t('add')} onClick={(e) => console.log(e)} />
          </BackBtn>
          <form className="profile_form">
            <FotoUi text={t("edit")} />

            <div>
              <div className="profile_form_wrapper">
                <h2>{t("profileInformation")}</h2>

                <div className="profile_input_wrapper">
                  <div className="profile_input_label">
                    <label>{t("fullName")}</label>
                    <input type="text" />
                  </div>

                  <div className="profile_input_label">
                    <label>{t("fullName")}</label>
                    <input type="text" />
                  </div>

                  <div className="profile_input_label">
                    <label>{t("fullName")}</label>
                    <input type="text" />
                  </div>
                </div>
              </div>


              <div className="hr"></div>

              <div className="profile_form_wrapper">
                <h2>{t("axessForRole")}</h2>

                <div className="profile_input_wrapper">
                  <div className="profile_input_label">
                    <label>{t("fullName")}</label>
                    <input type="text" />
                  </div>
 
                </div>

              </div>
            </div>
            
          </form>
        </div>

      </div>
    </section>
  )
}
