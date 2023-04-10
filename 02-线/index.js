import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

import mode from "./mode.js"

/**
 * 1 创建场景对象Scene
 */
const scene = new THREE.Scene()

/**
 * 2 创建相机Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(100, 100, 100)
camera.lookAt(0, 0, 0)

/**
 * 3 创建渲染器Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
document.body.appendChild(renderer.domElement)

/**
 * 将模型放入sence
 */
scene.add(mode)

// 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
var axisHelper = new THREE.AxesHelper(100)
scene.add(axisHelper)
const render = () => {
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}
// 增加鼠标控件
var controls = new OrbitControls(camera, renderer.domElement) //创建控件对象
// 已经通过requestAnimationFrame(render);周期性执行render函数，没必要再通过监听鼠标事件执行render函数
// controls.addEventListener("change", render) //监听鼠标、键盘事件

render()
