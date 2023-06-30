import { Navigation } from "./components/Navigation";
import Logo from "./components/Logo";

export default function Page() {
  return(
  <div className="w-screen h-screen flex flex-col justify-center bg-white">
    <div className="mx-auto -mt-20">
      <Logo width={200} height={200}/>
    </div>
    <div>
      <Navigation />
    </div>
  </div>
  )
}