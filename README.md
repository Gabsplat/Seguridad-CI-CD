# API de Búsqueda de Empleo con Enfoque en Seguridad

## Descripción General del Proyecto

Este proyecto es una aplicación Node.js para la cátedra de Seguridad (Universidad del Aconcagua) que se integra con la API de Adzuna para proporcionar funcionalidad de búsqueda de empleo.

## Características Principales

- Funcionalidad de búsqueda de empleo en múltiples países
- Recuperación de categorías de empleo
- Gestión segura de claves de API
- Pipeline de Integración Continua y Despliegue Continuo (CI/CD)
    - Utilización de [Render](https://render.com) para hacer deploy de la API.

## Medidas de Seguridad

### Variables de Entorno

Usamos variables de entorno para almacenar de forma segura las claves de la API. Esto evita exponer credenciales importantes en nuestro código fuente.

- El archivo .env se utiliza localmente para almacenar variables de entorno.
- El archivo .env está en nuestro .gitignore para evitar commits accidentales de datos sensibles.


## CI/CD con GitHub

Implementamos un pipeline de CI/CD utilizando GitHub Actions para asegurar que cada cambio en el código sea probado y desplegado de manera segura y eficiente.

Para nuestro pipeline de CI/CD, utilizamos GitHub Secrets para almacenar y acceder de forma segura a estas variables:
env:
- ADZUNA_API_KEY: ${{ secrets.ADZUNA_API_KEY }}
- ADZUNA_APP_ID: ${{ secrets.ADZUNA_APP_ID }}
- RENDER_API_KEY: ${{ secrets.RENDER_API_KEY }}
- SERVICE_ID: ${{ secrets.SERVICE_ID }}


### Seguridad de la API

- Las credenciales de la API (App ID y API Key) se almacenan como variables de entorno y se acceden de forma segura en la aplicación.
- El archivo jobService.js demuestra cómo utilizamos estas variables de entorno para autenticar las solicitudes a la API.


### Manejo de Errores

Nuestra aplicación incluye manejo de errores para evitar exponer información sensible en caso de errores de la API.


## Pruebas

Utilizamos Jest para probar nuestra aplicación. Nuestras pruebas incluyen verificaciones de manejo adecuado de errores e interacciones con la API:


Este pipeline se ejecuta en cada push o pull request a la rama principal, asegurando que el código pase por un proceso de construcción, pruebas y despliegue.

## Contribuidores

- Gabriel Pérez Diez
- Matías Ongay
- Germán Hidalgo
- Matías Vera
