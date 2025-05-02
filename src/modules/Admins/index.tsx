import { Header } from "../../components";
import Search from "../../components/Search/Search";
import { ButtonGray } from "../../ui/Buttons";
import SearchInput from "../../ui/SearchInput";
import filterIcon from '../../assets/Icon/filter.svg'


export default function index() {
  return (
    <>
      <Header title={"Администраторс"} />
      <Search>
        <SearchInput />

        <ButtonGray text="Фильтер" filterIcon={filterIcon} onClick={() => {alert('good')}}/>
      </Search>
    </>
  )
}
