import Pagination from '@mui/material/Pagination';
import { useTranslation } from 'react-i18next';


export default function PaginationTable() {

  const {t} = useTranslation()

  return (
    <div className='pagination_table'>
      <p className='pagination_table_text'>{t("totalCommonality")}</p>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  )
}
