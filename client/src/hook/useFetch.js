import {useState , useEffect} from 'react'

export const useFetch = (url) => {
    const [data,setdata] = useState([])
    const [error,seterror] = useState(null)
    const [loading,setloading] = useState(false)

    useEffect(()=>{
        const fetchdata = async ()=>{
            setloading(true)
            try {
                const res = await fetch(url)
                if(!res.ok){
                    seterror('Failed to fetch')
                    alert('Failed to fetch')
                }
                const result = await res.json()
                setdata(result.data)
            } catch (error) {
                seterror(error.message)
                setloading(false)
            }
        }
        fetchdata()
    },[url])
    return {
        data,error,loading
    }
}