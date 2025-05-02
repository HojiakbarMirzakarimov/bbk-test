  import { NavLink, To } from "react-router-dom";

  interface SidebarItemProps {
    icon: string;
    text:string;
    to: To;
  }

  export default function SidebarItem({ icon, text, to }: SidebarItemProps) {
    return (
      <li className='sidebar_item'>
        <NavLink to={to}>
          <img src={icon} alt="icons" />
          <p className='sidebar_text'>{text}</p>
        </NavLink>
      </li>
    )
  }
