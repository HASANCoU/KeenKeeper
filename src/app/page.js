import Image from "next/image";
import Homepage from "./components/Homepage";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
     <Suspense fallback={<div className="h-screen flex gap-6 flex-col justify-center items-center"><span className="loading loading-spinner loading-xl w-20 h-20"></span>
     <h2 className="text-4xl text-[#244D3F]">Data Loading...</h2></div>}>
       <Homepage/>
     </Suspense>
    </div>
  );
}
