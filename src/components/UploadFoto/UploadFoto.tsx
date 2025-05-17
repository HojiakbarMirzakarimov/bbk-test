import React from 'react'
import FotoUi from '../../ui/FotoUi'
import { useTranslation } from 'react-i18next'

export default function UploadFoto() {
    const {t} = useTranslation()
  return (
    <>
      <FotoUi text={t("addFoto")}/>
    </>
  )
}
