import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      /*
      路径别名
      若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径路径 
    */
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 强制预构建插件包
  // optimizeDeps: {
  //   include: ['axios'],
  // },
  base: '/dist/', // 指定生成静态资源URL
  // 生产模式打包配置
  build: {
    emptyOutDir: 'false', //打包构建时清空该目录
    target: 'modules',
    outDir: '/Users/txwy/Documents/wwwweb/girlsfrontline.co.kr/dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    assetsInlineLimit: 10240,
  },
  // 本地运行配置，及反向代理配置
  server: {
    host: '0.0.0.0',
    port: 8080,
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.99.223:3000', //代理接口
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
