'use client';

import Link from 'next/link';


export default function ErrorPage({ error, reset }) {

  return (
    <div className="min-h-screen   bg-[#F8FAFC] px-4">
      
     
     <div className=' bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-7/12 mx-auto mt-40'>
       <div className="text-6xl mb-4">⚠️</div>

      <h1 className="text-3xl font-bold text-red-500 mb-2">
        Something went wrong
      </h1>

    
      <p className="text-[#64748B] mb-6 text-center max-w-md">
        We couldn’t load this page. Please try again or go back to the homepage.
      </p>

    
      <div className="flex gap-4">
      
        <button
          onClick={() => reset()}
          className="px-5 py-2 bg-[#244D3F] text-white rounded-lg hover:opacity-90 transition"
        >
          Try Again
        </button>

       
        <Link href="/">
        <button
          className="px-5 py-2 border border-[#244D3F] text-[#244D3F] rounded-lg hover:bg-[#244D3F] hover:text-white transition"
        >
          Go to Home
        </button>
        </Link>
      </div>
     </div>

    </div>
  );
}