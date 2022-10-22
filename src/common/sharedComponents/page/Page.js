import Footer from "./Footer";
import { Header } from "./Header";

export default function Page ({children}) {
  return (
    <>
      <Header></Header>
      <main>
        <div className="main-content">
          {children}
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}