import { useState } from 'react'
import { IncrementarComponent } from './IncrementarComponent'
import { useCallback } from 'react'

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (val) => {
            setCounter(c => c + val)
        }, [])

    return (
        <>
            <h1>Contador: {counter}</h1>
            <IncrementarComponent increment={incrementarPadre} />
        </>

    )
}
