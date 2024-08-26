import React from 'react'
import { useForm } from '../hooks/useForm'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export const ListaTareasComponent = () => {

    const tareas = useSelector(state => state)
    const dispatch = useDispatch()



    const addTask = (event) => {
        event.preventDefault()
        if (tarea == '') return
        const nuevaTarea = {
            id: new Date().getTime(),
            name: tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: nuevaTarea
        }
        dispatch(action)
        console.log(state)
    }

    const endTask = (id) => {
        console.log(id);
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
        console.log(state)
    }

    const deleteTask = (id) => {

        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
        console.log(state)
    }

    const deleteAll = () => {

        const action = {
            type: '[TAREAS] Borrar Tareas',
        }
        dispatch(action)
        console.log(state)
    }

    const { tarea, onInputChange } = useForm({ tarea: '' })

    return (
        <>
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="tarea  " className="form-label">Agregar una nueva tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name="tarea"
                        onChange={onInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Agregar</button>
                <button type="button" className="btn btn-danger m-2" onClick={deleteAll}>Borrar todas</button>
            </form>

            <hr />
            <ul className="list-group" >
                {tareas.map(tarea => {
                    return (
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center" key={tarea.id}><span>{tarea.name}</span>
                            <div>
                                <input type="checkbox"
                                    value={tarea.finalizada}
                                    onChange={() => endTask(tarea.id)} />
                                <button
                                    className='btn btn-danger m-3'
                                    onClick={() => deleteTask(tarea.id)}
                                >Eliminar</button>
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}
