/**
 * 防抖函数，在指定时间间隔内，如果再次触发，则重新计时
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
export const debounce = (fn, delay = 200) => {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 节流函数，在指定时间间隔内，如果再次触发，则不执行
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
export const throttle = (fn, delay = 200) => {
  let timer = null
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

/**
 * 使用requestAnimationFrame实现的定时器
 * @param {Function} fn 回调函数
 * @param {Object} options 配置项
 * @param {number} options.interval 间隔时间
 * @param {boolean} options.immediate 是否立即执行
 * @returns {Function} 清除定时器的函数
 */
export const rAFInterval = (fn, { interval = 1000, immediate = false } = {}) => {
  let timer = null
  let lastTime = performance.now()
  let isStopped = false

  const loop = (timestamp) => {
    if (isStopped) return

    timer = requestAnimationFrame(loop)

    if (timestamp - lastTime >= interval) {
      lastTime = timestamp
      fn()
    }
  }

  if (immediate) {
    fn()
    lastTime = performance.now()
  }

  // 启动循环
  timer = requestAnimationFrame(loop)

  // 返回清理函数
  return () => {
    isStopped = true
    if (timer) cancelAnimationFrame(timer)
  }
}
