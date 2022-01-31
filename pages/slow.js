import Thingy, {Datar} from '../components/Thingy'
import { useEffect, useRef, useState } from 'react'
export default function Slow(){
    const [state, setState] = useState(Datar)
    const renders = useRef(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(renders.current < 20){
                renders.current += 1
                setState({...Datar})
            }else{
                clearInterval(intervalId)
            }
        }, 20) 
    }, [])

    return <Thingy {...state} />
}