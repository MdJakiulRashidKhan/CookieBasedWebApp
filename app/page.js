"use client"
import {useState, useEffect} from 'react'

export default function Home() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch("http://localhost:3000/api/home");
        const data = await response.json();
            setData(data.data);
        };

        fetchData();
    }, []);
    return (
        <div>
            <div>
                <p className='text-2xl text-bold text-black dark:text-white'>Home Page</p>
                <p className='text-black dark:text-white'>Message: {data ? data.message : ''}</p>
                <p className='text-black dark:text-white'>Version: {data ? data.version : ''}</p>
            </div>
        </div>
    )
}
