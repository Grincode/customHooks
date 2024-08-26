import { useMemo, useState } from "react"

export const CalculoPesadoComponent = () => {

    const [show, setShow] = useState(true)
    const [numList, setnumList] = useState([2, 3, 4, 5, 6, 7, 8, 9])

    const getCalculo = (numList) => useMemo(() => {
        console.log('Calculando...')
        return numList.reduce((a, b) => a * b)
    }, [numList])

    const addNumber = () => {
        setnumList([...numList, numList.length + 1])
    }

    // Otra forma de usar useMemo //
    //const memorizedValue = useMemo(() => getCalculo(numList), [numList]) //

    return (
        <>
            <h2>Calculos:</h2>
            <h4>El calculo es: {getCalculo(numList)}</h4>

            <button className="btn btn-info" onClick={() => setShow(!show)}>{show ? 'Ocultar Calculo' : 'Mostrar'}</button>
            <button className="btn btn-danger" onClick={() => addNumber()}>Agregar más números</button>
        </>
    )
}