import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // 消除node错误提示，需要安装 npm i -D @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "dps-web-model":path.resolve(__dirname, 'src/typing'),
    },
    // 导入时想要忽略的扩展名列表
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] 
  },
})
