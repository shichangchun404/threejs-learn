import * as THREE from "three"

// SphereGeometry(radius, widthSegments, heightSegments)
const geometry = new THREE.SphereGeometry(60)
const material = new THREE.MeshLambertMaterial({
  color: "0xff0000",
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
