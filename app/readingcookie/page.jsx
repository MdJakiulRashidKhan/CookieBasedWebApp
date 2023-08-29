"use client"
import {useState, useEffect} from 'react'
import React from 'react'

const Readingcookie = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/cookie");
    const data = await response.json();
        setData(data.token);
        //console.log(data.token.value)
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className='text-2xl text-bold text-black dark:text-white'>Reading Cookie</p>
      <p className='text-black dark:text-white'>Token Name: {data ? data.name : ''}</p>
      <p className='text-black dark:text-white'>Token Value: {data ? data.value : ''}</p>
    </div>
  )
}

export default Readingcookie
