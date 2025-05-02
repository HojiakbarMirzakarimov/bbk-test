import {ButtonOrange} from "../../ui/Buttons";
import addIcon from '../../assets/Icon/add_icons.svg'
import React from "react";

interface Tip {
    children: React.ReactNode;
}

export default function Search({ children }:Tip) {
    return (
        <section>
            <div className="container">
                <div className="search">
                    <div className="search_input_btn">
                        {children}
                    </div>
                    <ButtonOrange icon={addIcon} text="добавить" onClick={() => {alert('good')}}/>
                </div>
            </div>
        </section>
    )
}
