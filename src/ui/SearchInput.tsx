import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className='search_input_icon'>
      <CiSearch className='search_icon'/>
      <input type="text" className='search_input' placeholder='поиск' />
    </div>
  )
}
