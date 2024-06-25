# Feedback App

¡Bienvenido a la aplicación de Feedback!

**Nota: Este proyecto está en proceso y aún no está terminado.Queda pendiente terminar login, y añadir mas vistas y funcionalidades**

## Descripción

Esta aplicación permite a los usuarios crear, leer, actualizar y eliminar solicitudes de retroalimentación de productos. Además, pueden votar y comentar sobre las solicitudes, así como filtrar y ordenar las sugerencias.

## Tecnologías Utilizadas

- React
- TypeScript
- Styled-Components
- Firebase
- React Router
- Prettier
- Testing Library

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://github.com/alvarogarciaabasolo/Feedback-App.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd feedback-app
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Scripts Disponibles

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm build`: Construye la aplicación para producción.
- `npm test`: Inicia el corredor de pruebas.
- `npm format`: Formatea el código usando Prettier.


## Autenticación con Firebase
Se ha implementado una funcionalidad de inicio de sesión utilizando Firebase, pero aún no está completamente terminada.

## Funcionalidades
Página de Sugerencias: Mostrar solo solicitudes con estado sugerencia.
Hoja de Ruta: Mostrar solicitudes con estados planeado, en progreso, en vivo.
CRUD de Solicitudes: Crear, leer, actualizar y eliminar solicitudes de retroalimentación.
Comentarios y Respuestas: Añadir comentarios y respuestas (máximo 250 caracteres).
Persistencia: Guardar cambios usando localStorage.
