import Logo from '../../../../assets/Icon/bbk.svg'
import SidebarItem from './SidebarItem'
import administrators from '../../../../assets/Icon/sidebar/administrators.svg'
import clients from '../../../../assets/Icon/sidebar/clients.svg'
import couriers from '../../../../assets/Icon/sidebar/couriers.svg'
import orders from '../../../../assets/Icon/sidebar/orders.svg'
import products from '../../../../assets/Icon/sidebar/products.svg'
import { useTranslation } from 'react-i18next'


export default function Sidebar() {
  const {t} = useTranslation()
  return (
    <nav className="sidebar">
      <img src={Logo} alt="Logo Bbk" />
      <p className='sidebar_menu'>MENU</p>

      <ul className='sidebar_list'>
        <SidebarItem to="/" icon={administrators} text={t("administrator")} />
        <SidebarItem to="/products" icon={products} text={t("product")} />
        <SidebarItem to="/clients" icon={clients} text={t("client")} />
        <SidebarItem to="/couriers" icon={couriers} text={t("courier")} />
        <SidebarItem to="/orders" icon={orders} text={t("orders")} />
      </ul>
    </nav>
  )
}
