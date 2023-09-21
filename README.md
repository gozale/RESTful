# API RESTful de Calculadora

Esta es una API RESTful simple que proporciona operaciones matemáticas básicas (suma, multiplicación, división, potencia y resta) utilizando el framework Express.js en Node.js. Puedes utilizar esta API para realizar cálculos matemáticos a través de solicitudes HTTP.

## Instrucciones de Uso

Sigue estos pasos para ejecutar la API en tu entorno local:

### Requisitos Previos

Asegúrate de tener Node.js instalado en tu sistema.

### Paso 1: Instalación de Dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

### Paso 2: Iniciar el Servidor

Ejecuta el siguiente comando para iniciar el servidor:

```bash
npm start
```

El servidor se ejecutará en el puerto 7777, como se especifica en el archivo `index.js`.

### Uso de la API

La API ofrece cinco rutas diferentes para realizar operaciones matemáticas:

1. **Suma:** Realiza una suma de dos números.
   - Método: GET
   - Ruta: `/results/:n1/:n2`
   - Ejemplo de solicitud: `GET http://localhost:7777/results/3/5`

2. **Multiplicación:** Realiza una multiplicación de dos números.
   - Método: POST
   - Ruta: `/results/`
   - Ejemplo de solicitud (cuerpo JSON):
     ```json
     {
       "n1": 4,
       "n2": 6
     }
     ```

3. **División:** Realiza una división de dos números.
   - Método: PUT
   - Ruta: `/results/`
   - Ejemplo de solicitud (cuerpo JSON):
     ```json
     {
       "n1": 8,
       "n2": 2
     }
     ```

4. **Potencia:** Calcula la potencia de un número elevado a otro.
   - Método: PATCH
   - Ruta: `/results/`
   - Ejemplo de solicitud (cuerpo JSON):
     ```json
     {
       "n1": 2,
       "n2": 3
     }
     ```

5. **Resta:** Realiza una resta de dos números.
   - Método: DELETE
   - Ruta: `/results/:n1/:n2`
   - Ejemplo de solicitud: `DELETE http://localhost:7777/results/7/2`

### Ejemplos de Respuesta

- Cada ruta devuelve una respuesta en formato JSON que contiene el resultado de la operación realizada. Por ejemplo:

  ```json
  {
    "resultado": 8
  }
  ```

  Donde `"resultado"` es el resultado de la operación matemática.

## Información del Proyecto

- **Nombre del Proyecto:** API RESTful de Calculadora
- **Autor:** Alejandro Arturo Gonzalez Flores
- **Versión:** 0.0.0
- **Licencia:** ISC

Este proyecto utiliza el framework Express.js junto con las dependencias especificadas en el archivo `package.json`.

¡Disfruta utilizando la API para realizar tus cálculos matemáticos básicos de manera sencilla y eficiente!

---
