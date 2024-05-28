import { minify } from "next/dist/build/swc";
import Image from "next/image";
import me from './assets/profile.png'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


export default function Home() {
  return (
    
    <main className="bg-zinc-800 justify-center align-center flex min-h-full ">
      
      <div className=" sm:w-1/4 w-full h-2/3 bg-neutral-900  m-7 text-white rounded-xl shadow-2xl">
        <Image 
          src={me}
          className="rounded-t-xl bg-gradient-to-bl from-rose-400 via-fuchsia-300 to-indigo-300 h-1/6 shadow-lg" 
          alt="picture of author" 
        />
        <div className="px-7 py-4">
        < Header />
        < Body />
        
        </div>
        < Footer />
      </div>
    </main>
  );
}