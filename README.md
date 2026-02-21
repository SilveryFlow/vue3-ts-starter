# Vue3 + TypeScript + Vite 7 项目模板

这是一个基于 Vue 3.5 + TypeScript + Vite 7 的现代化前端项目模板，集成了当前主流的技术栈和最佳实践。

## 特性

### 核心技术栈

- **Vue 3.5**: 使用 Composition API 和 `<script setup>` 语法
- **TypeScript 5.9**: 完整的类型支持
- **Vite 7**: 下一代前端构建工具
- **Pinia 3**: 官方推荐的状态管理库
- **Vue Router 5**: 路由管理
- **Element Plus**: 基于 Vue 3 的组件库，已配置按需导入
- **UnoCSS**: 即时原子化 CSS 引擎
- **ECharts 6**: 配合 `vue-echarts` 实现数据可视化

### 工程化配置

- **自动导入**:
  - `unplugin-auto-import`: 自动导入 Vue、Vue Router、Pinia、VueUse 等 API
  - `unplugin-vue-components`: 自动导入 Element Plus 组件、ECharts 图表组件
  - `unplugin-icons`: 自动导入 Iconify 图标（支持 Element Plus 图标集 `i-ep-*`）
- **样式系统**:
  - SCSS 预处理器，配置了自动注入全局变量
  - Normalize.css 重置样式
  - 字体文件自动分割与优化加载 (`vite-plugin-font`)
- **构建优化**:
  - 图片压缩 (`vite-plugin-image-optimizer`)
  - Gzip/Brotli 压缩 (`vite-plugin-compression2`)
  - 静态资源分类打包
- **代码规范**:
  - ESLint (Flat Config) + Oxlint (极速 Lint) + Oxfmt (代码格式化)
  - TypeScript 严格模式
  - CSpell 拼写检查
- **Git 工作流**:
  - Husky Git Hooks
  - Commitlint 提交信息规范
  - Lint-staged 提交前检查
  - Commitizen 交互式提交

### 测试

- **Vitest**: 单元测试框架，兼容 Vitest ESLint 规则

### 工具库

- **Axios**: 二次封装的请求工具，支持拦截器、取消请求、错误处理
- **VueUse**: 强大的 Vue 组合式工具集
- **Colord**: 颜色处理库

## 快速开始

### 环境要求

- Node.js 20.19+ 或 22.12+ (推荐使用 LTS 版本)
- 推荐使用 Bun 作为包管理器 (也可使用 npm/pnpm)

### 安装依赖

```bash
# 使用 Bun (推荐)
bun install

# 或使用 npm
npm install
```

### 启动开发服务器

```bash
bun dev
# 或
npm run dev
```

访问 http://localhost:5173 即可看到项目。

### 生产构建

```bash
bun run build
# 或
npm run build
```

构建产物位于 `dist/` 目录。

### 预览生产构建

```bash
bun preview
# 或
npm run preview
```

### 类型检查

```bash
bun run type-check
# 或
npm run type-check
```

### 运行单元测试

```bash
bun run test:unit
# 或
npm run test:unit
```

### 代码检查与格式化

```bash
# 运行 Lint (包含 Oxlint 和 ESLint)
bun lint

# 格式化代码 (使用 Oxfmt)
bun format

# 拼写检查
bun spell
```

### Git 提交

```bash
# 交互式提交 (推荐)
bun commit

# 或直接使用 git commit (需要符合 Conventional Commits 规范)
git commit -m "feat: 添加新功能"
```

## 目录结构

```
src/
├── api/             # 接口请求层
├── assets/          # 静态资源
│   ├── fonts/       # 字体文件
│   └── styles/      # 样式文件 (index.scss, variables.scss)
├── components/      # 公共组件 (自动注册)
├── config/          # 全局配置
├── directives/      # 自定义指令
├── router/          # 路由配置
├── stores/          # Pinia 状态管理
├── types/           # TypeScript 类型定义
├── utils/           # 工具函数 (request.ts 等)
├── views/           # 页面视图
├── App.vue          # 根组件
└── main.ts          # 入口文件
```

## 配置说明

### 环境变量

项目根目录支持 `.env` 文件配置：

```env
VITE_PORT=5173
VITE_BASE_API=/api              # HTTP 接口前缀
VITE_WEBSOCKET_BASE_API=/ws     # WebSocket 接口前缀
VITE_UE_BASE_API=/ue            # UE 接口前缀
```

### 自动导入使用示例

**Vue API** (无需 import):

```typescript
const count = ref(0)
const router = useRouter()
const store = useStore()
```

**组件** (无需 import):

```vue
<template>
  <el-button type="primary">按钮</el-button>
  <hello-world />
</template>
```

**图标** (无需 import):

```vue
<template>
  <!-- 使用 Element Plus 图标 -->
  <i-ep-search />
  <i-ep-edit />
</template>
```

**ECharts** (无需 import):

```vue
<template>
  <v-chart :option="chartOption" autoresize />
</template>
```

### 请求封装

使用 `src/utils/request.ts` 进行 API 请求：

```typescript
import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  })
}
```

## 推荐的 IDE 设置

- [VS Code](https://code.visualstudio.com/)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (禁用 Vetur)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Oxlint](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

## 推荐的浏览器设置

- Chromium 内核浏览器 (Chrome, Edge, Brave 等):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [开启 Chrome DevTools 的 Custom Object Formatter](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [开启 Firefox DevTools 的 Custom Object Formatter](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## TypeScript 支持

TypeScript 默认无法处理 `.vue` 文件的类型信息，因此我们使用 `vue-tsc` 替代 `tsc` 进行类型检查。在编辑器中，需要安装 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 扩展来让 TypeScript 语言服务识别 `.vue` 文件的类型。

## 依赖列表

| 依赖           | 版本     | 说明       |
| -------------- | -------- | ---------- |
| `vue`          | ^3.5.28  | 核心框架   |
| `vue-router`   | ^5.0.2   | 路由管理   |
| `pinia`        | ^3.0.4   | 状态管理   |
| `element-plus` | ^2.13.0  | UI 组件库  |
| `echarts`      | ^6.0.0   | 图表库     |
| `unocss`       | ^66.5.12 | 原子化 CSS |
| `axios`        | ^1.13.2  | HTTP 请求  |
| `typescript`   | ~5.9.3   | 类型支持   |
| `vite`         | ^7.3.1   | 构建工具   |
| `vitest`       | ^4.0.18  | 单元测试   |

## License

MIT
