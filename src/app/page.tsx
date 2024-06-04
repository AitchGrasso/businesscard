import { minify } from "next/dist/build/swc";
import Image from "next/image";
import me from './assets/profile.png'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


export default function Page() {
  return (
    <div>

        <Image 
          src={me}
          className="rounded-t-xl bg-gradient-to-bl from-rose-400 via-fuchsia-300 to-indigo-300 shadow-lg h-1/2 w-1/2 m-auto mt-7" 
          alt="picture of author" 
        />
        <div className="px-7 py-4">
        < Header />
        < Body />
        
        </div>
        < Footer />
        </div>
  );
}
