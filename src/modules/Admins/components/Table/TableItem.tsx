import eas from '../../../../assets/Icon/Table/eas.svg'
import korzinka from '../../../../assets/Icon/Table/korzinka.svg'
import pensil from '../../../../assets/Icon/Table/pensil.svg'

export default function TableItem() {
  return (
    <tr>
    <td>1</td>
    <td>Janibek Maxatov</td>
    <td>+99699 807 01 16</td>
    <td>Курьер</td>
    <td>
      <button className='eas'>
        <img src={eas} alt="" />
      </button>
      <button className='pensil'>
        <img src={pensil} alt="" />
      </button>
      <button className='korzinka'>
        <img src={korzinka} alt="" />
      </button>
    </td>
  </tr>
  )
}
