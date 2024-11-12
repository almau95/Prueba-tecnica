# Proyecto de Automatización de Pruebas UI

Este proyecto automatiza el inicio de sesión y registro en la aplicación MaterialLoginExample.apk utilizando WebdriverIO, Appium y Cucumber.

# Requisitos

Node.js: Instalación de Node.js
Appium: Instalación de Appium
WebdriverIO: Incluido como dependencia en el proyecto
Cucumber: Instalado como parte de las dependencias
Emulador o dispositivo físico Android configurado para pruebas
Git para la clonación y gestión del repositorio

## Instalación

1. Clona este repositorio.
	git clone https://github.com/almau95/Prueba-tecnica-APP.git

2. Instala las dependencias con `npm install`.
3. Configura Appium y WebdriverIO.
4. Asegúrate de que el archivo wdio.conf.js esté configurado correctamente para tu dispositivo o emulador:

	platformName: Debe ser "Android".
	deviceName: Nombre de tu dispositivo o emulador.
	app: Ruta a la aplicación MaterialLoginExample.apk.
	automationName: "UiAutomator2" para Android.

## Ejecución de Pruebas

Para ejecutar las pruebas:

```bash
npx wdio run wdio.conf.js

***Integración Continua (CI) con GitHub Actions***
Este proyecto incluye un pipeline automatizado de pruebas de UI configurado con GitHub Actions. Cada vez que se realiza un push o un pull request hacia la rama main, se ejecuta el flujo de CI para:

	Instalar dependencias
	Iniciar el servidor Appium
	Ejecutar las pruebas de UI automáticamente
	Ejecutar el pipeline

El pipeline se ejecuta automáticamente en GitHub Actions cuando:

	Se realiza un push a la rama main.
	Se crea un pull request hacia la rama main.