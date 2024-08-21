import { FetchApp } from './components/FetchApp'
import { CounterApp } from './components/CounterApp'
import { FormApp } from './components/FormApp'

export const HookApp = () => {
    return (
        <>
            <h1>Aplicación de Hooks</h1>
            <hr />
            <FetchApp />
            <hr />
            <CounterApp />
            <hr />
            <FormApp />
        </>
    )
}
