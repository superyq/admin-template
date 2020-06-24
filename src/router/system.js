import { menuList } from '@/datas/menu.js'
import systemModel from './systemModel'

let system = []

function loopMenu(arr) {
  arr.forEach(item => {
    const { list = [], type } = item;
    if(list.length && !type) {
      loopMenu(list)
    } else {
      let obj = new systemModel(item)
      system.push(obj)
    }
  })
}

loopMenu(menuList)

export default system