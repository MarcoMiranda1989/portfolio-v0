/** @type {import('tailwindcss').Config} */
export default {
  // AÑADE ESTA LÍNEA PARA ACTIVAR EL MODO OSCURO POR CLASE
  darkMode: 'class', 
  
  content: [
    // Esto le dice a Tailwind que busque clases en todos los archivos .astro, .jsx, etc.
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Aquí puedes añadir tus colores, fuentes, etc. personalizados
    },
  },
  plugins: [],
}