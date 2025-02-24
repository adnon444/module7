// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api/weather': {
//         target: 'https://goweather.herokuapp.com/',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
// }, },
//     logLevel: 'debug',
//   },
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})