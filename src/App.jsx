import Layout from "./Layout/Layout";
import './assets/scss/main.scss'
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <>
      <ToastContainer position='top-center' />
      <Layout />
    </>
  )
}
