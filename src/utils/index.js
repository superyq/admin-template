// 判断是否电话
export function isPhone(str) {
  return /^1[0-9]{10}$/.test(str)
}

// 判断是否为email
export function isEmail(str) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(str);
}

// 判断是否对象
export const isObject = value => typeof value === 'object' && value !== null;

// 判断是否数组
export const isArray = value => Array.isArray(value);

// 判断对象是否有key键
export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// 深拷贝
export const deepClone = src => {
  if(!isObject(src)) return src
  const target = isArray(src) ? [] : {} 

  for(const key in src) {
    const v = src[key]
    target[key] = v && isObject(v) ? deepClone(v) : v;
  }

  return target
}

// 防抖
export function debounce(func, wait) {
  let timer;
  return function() {
    // let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e
       
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

// 节流
export function throttle(fn, wait) {
  let timer
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this)
        timer = null
      }, wait)
    }
  }
}