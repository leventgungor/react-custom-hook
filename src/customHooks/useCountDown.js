import { useState, useEffect } from "react";

const useCountDown = (props) => {
    const[counter, setCounter] = useState[props.startingCount]

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1)
        }, 1000)

        return () => clearInterval(interval)

    },[])

    return counter

}