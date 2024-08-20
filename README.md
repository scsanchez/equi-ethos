# Equi-Ethos

Este es el repositorio del proyecto **Equi-Ethos**, desarrollado con [Vite](https://vitejs.dev/), una herramienta rápida para la construcción de aplicaciones web modernas. Este proyecto puede ser utilizado como punto de partida para desarrollar tu propia aplicación.

## Requisitos previos

Asegúrate de tener instalados los siguientes requisitos antes de continuar:

- **Node.js** (versión 14.0.0 o superior)
- **npm** (gestor de paquetes de Node.js) o **yarn**

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/scsanchez/equi-ethos.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd equi-ethos
   ```

3. **Instala las dependencias**:

   Si usas `npm`:

   ```bash
   npm install
   ```

   O si prefieres usar `yarn`:

   ```bash
   yarn install
   ```

## Uso

### Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

o con `yarn`:

```bash
yarn dev
```

Esto abrirá el proyecto en un servidor local y deberías ver la aplicación en tu navegador en la siguiente URL:

```
http://localhost:3000
```

### Construcción para Producción

Para construir la aplicación para producción, ejecuta:

```bash
npm run build
```

o con `yarn`:

```bash
yarn build
```

Esto generará una versión optimizada de la aplicación en el directorio `dist`. Puedes desplegar estos archivos en cualquier servidor estático.

### Previsualización de la Construcción

Para previsualizar la versión construida en tu entorno local, ejecuta:

```bash
npm run preview
```

o con `yarn`:

```bash
yarn preview
```

Esto levantará un servidor para previsualizar la aplicación construida, que estará disponible en:

```
http://localhost:4173
```

## Estructura del Proyecto

Este proyecto sigue la estructura típica de un proyecto Vite. Aquí hay una descripción básica de algunos de los archivos y carpetas clave:

- `index.html`: El archivo HTML principal.
- `src/`: Carpeta donde reside el código fuente de la aplicación.
  - `main.js`: El archivo de entrada principal para la aplicación.
  - `components/`: Carpeta donde se encuentran los componentes de la aplicación.
- `public/`: Carpeta para archivos estáticos que serán copiados al directorio de construcción.
