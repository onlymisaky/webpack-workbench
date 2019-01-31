## scripts

```bash
# 安装依赖
npm i

# 运行调试
npm run dev

# 打包
npm run build
```

### 参数说明

| 参数       | 类型/可选值 | 默认      | 说明                                                         |
| ---------- | ----------- | --------- | ------------------------------------------------------------ |
| `--port`   | number      | 8080      | `npm run dev --port=8090` 指定端口为 `8090`                  |
| `--report` | boolean     | false     | `npm run build --report` 打包完成后显示打包报告              |
| `--entry`  | string      | `main.ts` | `npm run dev --entry=main.ts` 设置入口文件为 `./src/main.ts` |
