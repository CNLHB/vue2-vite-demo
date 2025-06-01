import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      failOnError: false, //报错不影响编译
      failOnWarning: false, // 警告不影响编译
      include: ['src/**/*.js', 'src/**/*.vue']
    })
  ],
  lintOnSave: true
});
