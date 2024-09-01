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
