import { useEffect, useRef, useState } from "react";
import SelectHeader from "../../ui/SelectHeader";
import Language from "../Language/Language";
import MenuProfile from "../MenuProfile/MenuProfile.js";

interface HeaderProps {
  title: string;
}

export function Header({ title }:HeaderProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const elSelect = useRef<HTMLDivElement>(null)

const togleModal = (modalName:string) => {
setActiveModal(prev => (prev === modalName ? null : modalName))
}

 useEffect(() => {
  const handleClickOutside = (evt:MouseEvent) => {
    if(elSelect.current && !elSelect.current.contains(evt.target as Node))
      setActiveModal(null)
  }


  document.addEventListener('mousedown',handleClickOutside)

  return () => {
  document.addEventListener('mousedown',handleClickOutside)

  }
 }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <h1 className="header_title">{title}</h1>

          <div ref={elSelect} className="header_our_selects">
            <SelectHeader onClick={() => togleModal('language')}>
              <Language isOpen={activeModal === 'language'}/>
            </SelectHeader>
            <SelectHeader onClick={() => togleModal('menu')}>
              <MenuProfile  isOpen={activeModal === 'menu'}/>
            </SelectHeader>
          </div>
        </div>
      </div>
    </header>
  )
}
 