import './style.css'
import './x.scss'
import './y.less'
import './z.styl'
import png from './assets/1.png'

const div = document.getElementById('app')
div.innerHTML = `
  <img src="${png}">
`

const button = document.createElement('button')
button.innerText ='懒加载'
button.onclick = ()=>{
  const promise = import('./lazy')
  promise.then((module)=>{
    const fn = module.default
    fn()
  }, ()=>{
    console.log('模块加载错误')
  })
}

div.appendChild(button)