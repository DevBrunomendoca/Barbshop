import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";


export default function RootLayout() {
  return (
    <>
      <Header />
        <Outlet />
      <footer><p>Esse é o footer</p></footer>
    </>
  )
}