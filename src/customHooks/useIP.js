import {useState, useEffect} from 'react'
import axios from 'axios'

const useIP = () => {
    const [IP, setIP] = useState('')

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
    }
  
    useEffect( () => getData() ,[])

    return IP

}

export default useIP