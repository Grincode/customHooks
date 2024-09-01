# Repositorio de Custom Hooks en React

![React](https://img.shields.io/badge/React-18.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.0.0-yellowgreen)
![License](https://img.shields.io/badge/License-MIT-green)
![Hooks](https://img.shields.io/badge/Hooks-Custom-blueviolet)

Este repositorio contiene una colección de Custom Hooks útiles en React, diseñados para simplificar y mejorar la experiencia de desarrollo. Cada Hook está implementado y documentado para un fácil uso en proyectos basados en React.

## Hooks Incluidos

- **Counter Hook**: Un Hook personalizado para manejar contadores con incremento, decremento y reset.
- **Form Hook**: Un Hook para gestionar formularios, con manejo de entradas y validaciones básicas.
- **Fetch Hook**: Un Hook para realizar solicitudes HTTP y manejar el estado de la carga de datos (loading, success, error).

## Características

Este repositorio se basa en una configuración mínima para trabajar con **React** en **Vite** con soporte para Hot Module Replacement (HMR) y algunas reglas de ESLint.

### Plugins oficiales disponibles:

- **@vitejs/plugin-react**: Utiliza Babel para Fast Refresh.
- **@vitejs/plugin-react-swc**: Utiliza SWC para Fast Refresh.

## Requisitos

- **Node.js** v14 o superior
- **npm** o **yarn**
- **Vite** para desarrollo rápido

## Configuración del Proyecto

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu_usuario/custom-hooks.git
   cd custom-hooks

# useCounter

`useCounter` es un hook personalizado de React que gestiona un contador con funcionalidades para incrementar, decrementar y reiniciar el valor. Es útil en situaciones donde se necesita un contador que se pueda modificar fácilmente desde un componente de React.

## Parámetros

- **`initialValue`** (`number`): El valor inicial del contador. Por defecto es `0`.

## Estado

- **`counter`** (`number`): Es el estado que almacena el valor actual del contador. Se inicializa con `initialValue`.

## Funciones

### `increment(val = 1)`

Incrementa el valor del contador por la cantidad especificada.

- **Parámetros**:
  - **`val`** (`number`): El valor por el cual se incrementará el contador. Por defecto es `1`.

### `reset()`

Reinicia el valor del contador al valor inicial (`initialValue`).

### `decrement(val = 1, allowNegative = true)`

Decrementa el valor del contador por la cantidad especificada. Puede configurarse para no permitir valores negativos.

- **Parámetros**:
  - **`val`** (`number`): El valor por el cual se decrementará el contador. Por defecto es `1`.
  - **`allowNegative`** (`boolean`): Determina si el contador puede tomar valores negativos. Por defecto es `true`. Si es `false` y el contador está en `0`, no se permitirá la reducción.

## Retorno

El hook devuelve un objeto con los siguientes elementos:

- **`counter`**: El valor actual del contador.
- **`increment`**: La función para incrementar el contador.
- **`reset`**: La función para reiniciar el contador.
- **`decrement`**: La función para decrementar el contador.
  

# useForm

`useForm` es un hook personalizado de React que gestiona el estado de un formulario, permitiendo la manipulación y actualización de los campos del formulario de manera sencilla.

## Parámetros

- **`initialForm`** (`object`): Un objeto que representa el estado inicial del formulario. Por defecto es un objeto vacío `{}`.

## Estado

- **`formState`** (`object`): Es el estado que almacena los valores actuales de los campos del formulario. Se inicializa con `initialForm`.

## Funciones

### `onInputChange({ target })`

Actualiza el estado del formulario cuando cambia el valor de un campo.

- **Parámetros**:
  - **`target`** (`object`): El elemento del formulario que desencadenó el evento de cambio. Este objeto contiene las propiedades `name` y `value`, que son usadas para actualizar el estado del formulario.

## Retorno

El hook devuelve un objeto con los siguientes elementos:

- **...`formState`**: El estado del formulario desestructurado, proporcionando acceso directo a cada campo.
- **`onInputChange`**: La función para actualizar los valores del formulario.

## Ejemplo de Uso

```javascript
import React from 'react';
import { useForm } from './useForm';

const MyFormComponent = () => {
    const { name, email, onInputChange } = useForm({
        name: '',
        email: ''
    });

    return (
        <form>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={onInputChange} 
                placeholder="Nombre" 
            />
            <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={onInputChange} 
                placeholder="Email" 
            />
        </form>
    );
};

export default MyFormComponent;

# useFetch

`useFetch` es un hook personalizado de React que facilita la realización de solicitudes HTTP y la gestión de los estados de carga, datos y errores.

## Estado

- **`state`** (`object`): Un objeto que representa el estado de la solicitud HTTP. Contiene las siguientes propiedades:
  - **`data`** (`any`): Almacena los datos recibidos de la solicitud. Inicialmente es `null`.
  - **`isLoading`** (`boolean`): Indica si la solicitud está en curso. Inicialmente es `true`.
  - **`error`** (`any`): Almacena cualquier error que ocurra durante la solicitud. Inicialmente es `null`.

## Funciones

### `fetchData(url, method, bodyData = null)`

Realiza una solicitud HTTP a la URL especificada con el método y los datos proporcionados.

- **Parámetros**:
  - **`url`** (`string`): La URL a la que se realizará la solicitud. Si no se proporciona, la función no hará nada.
  - **`method`** (`string`): El método HTTP a utilizar (`GET`, `POST`, `PUT`, `DELETE`, etc.).
  - **`bodyData`** (`object` | `null`): Los datos que se enviarán en el cuerpo de la solicitud. Por defecto es `null`. Este parámetro solo se usa si el método no es `GET` o `DELETE`.

- **Comportamiento**:
  - Si la solicitud es exitosa, `data` se actualizará con la respuesta recibida, `isLoading` se establecerá en `false`, y `error` se mantendrá en `null`.
  - Si ocurre un error durante la solicitud, `error` se actualizará con la información del error, `isLoading` se establecerá en `false`, y `data` se mantendrá en `null`.

## Retorno

El hook devuelve un objeto con los siguientes elementos:

- **`data`**: Los datos obtenidos de la solicitud.
- **`isLoading`**: Un indicador de si la solicitud está en curso.
- **`error`**: Cualquier error que haya ocurrido durante la solicitud.
- **`fetchData`**: La función para realizar la solicitud HTTP.

## Ejemplo de Uso

```javascript
import React, { useEffect } from 'react';
import { useFetch } from './useFetch';

const MyComponent = () => {
    const { data, isLoading, error, fetchData } = useFetch();

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/posts', 'GET');
    }, [fetchData]);

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1>Data Fetching Example</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;



