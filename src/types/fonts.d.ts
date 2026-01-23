// // src/fonts.d.ts

// 声明所有 .woff2 文件导出结构
declare module '*.woff2' {
  /**
   * vite-plugin-font 导出的对象结构
   * 包含 family (字体名) 和其他属性
   */
  export const css: {
    family: string
    // 如果你还用到了其他属性，可以在这里补上，例如 weight, style 等
    display: string
    family: string
    style: string
    weight: string
  }
}

// 如果你还有 .ttf 或 .woff，照葫芦画瓢复制一份
declare module '*.ttf' {
  export const css: {
    display: string
    family: string
    style: string
    weight: string
  }
}
