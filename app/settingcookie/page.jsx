"use client"
import React from 'react';
import { useRouter } from 'next/navigation'

function Readingcookie() {
    const router = useRouter();
    const handleClick = async () => {
        const response = await fetch(`http://localhost:3000/api/cookie`,{
            method: "POST"
        });
        //console.log(response);
        if(response.status === 201){
            router.push('/readingcookie');
        }
    };
  
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Set Cookie</button>
    );
}

export default Readingcookie;
