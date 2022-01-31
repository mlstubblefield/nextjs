import Thingy, {Datar} from '../components/Thingy'
import { useState } from 'react'
export default function Slow(){
    const [state, setState] = useState(Datar)
    return <Thingy {...state} />
}