import * as THREE from "three"

const points = []
points.push(new THREE.Vector3(-50, 0, 0))
points.push(new THREE.Vector3(0, 50, 0))
points.push(new THREE.Vector3(50, 0, 0))

const geometry = new THREE.BufferGeometry().setFromPoints(points)
const material = new THREE.LineBasicMaterial({ color: 0x00ffff })

const line = new THREE.Line(geometry, material)

export default line
