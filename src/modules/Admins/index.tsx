import { Header } from "../../components";
import Search from "../../components/Search/Search";
import { ButtonGray } from "../../ui/Buttons";
import SearchInput from "../../ui/SearchInput";
import filterIcon from '../../assets/Icon/filter.svg'
import Table from "./components/Table/Table";
import { useTranslation } from "react-i18next";


export default function index() {
  const {t} = useTranslation()
  return (
    <>
      <Header title={t("administrator")} />
      <Search>
        <SearchInput />

        <ButtonGray text="Фильтер" filterIcon={filterIcon} onClick={() => {alert('good')}}/>
      </Search>
      <Table/>
    </>
  )
}
