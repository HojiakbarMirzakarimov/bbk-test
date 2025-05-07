import { Link } from 'react-router-dom'
import russianIcon from '../../assets/Icon/Flags/russian.svg'
import ukIcon from '../../assets/Icon/Flags/uk_flags.png'
import { useState } from 'react'
import i18n from '../../i18n'

interface LanguageProps {
  isOpen: boolean;
}

export default function Language({ isOpen }: LanguageProps) {

  const languages = [
    { code: "ru", label: "РУ", flags: russianIcon },
    { code: "en", label: "en", flags: ukIcon },
  ]

  type LanguageItem = {
    code: string;
    label: string;
    flags: string;
  };

  const [selectLang, setSelectLang] = useState( languages.find(lang => lang.code === i18n.language) || languages[0])
  const otherLanguages = languages.filter(lang => lang.code !== selectLang.code)

  const changeLange = (lang:LanguageItem) => {
    i18n.changeLanguage(lang.code)
    setSelectLang(lang)  
  }

  return (
    <>
      <img className='language_flags_icons' src={selectLang.flags} alt="" />
      <p className='language_text'>{selectLang.label}</p>

      {isOpen && (
        <ul className="language_modal">
          {otherLanguages.map((item) => (<li key={item.code} onClick={() => changeLange(item)}>
            <img className='language_modal_flags' src={item.flags} alt="" />
            <p className='language_text'>{item.label}</p>
          </li>))}
        </ul>
      )}
    </>
  )
}
