import react from 'react'

export const IncrementarComponent = react.memo(({ increment }) => {

    console.log('me estoy redibujando')

    return (
        <button type="button" className="btn btn-success" onClick={() => increment(10)}>Incrementar +10</button>

    )
}
)
