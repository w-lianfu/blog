window.onload = () => {
  var scene = new THREE.Scene()
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  var renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMapEnabled = true

  var axis = new THREE.AxisHelper(20)
  scene.add(axis)

  var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)

  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 15
  plane.position.y = 0
  plane.position.z = 0

  plane.receiveShadow = true
  scene.add(plane)

  var cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
  var cubeMaterial = new THREE.MeshLambertMaterial(
    {color: 0xff0000, wireframe: true}
  )
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

  cube.position.x = -4
  cube.position.y = 3
  cube.position.z = 0

  cube.castShadow = true
  scene.add(cube)

  // 添加光源
  var spotLight = new THREE.SpotLight(0xffff)
  spotLight.position.set(-40, 60, -10)
  spotLight.castShadow = true
  scene.add(spotLight)

  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
  var sphereMaterial = new THREE.MeshLambertMaterial(
    {color: 0x7777ff, wireframe: true}
  )
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

  // sphere.position.x = 20
  // sphere.position.y = 4
  sphere.position.z = 2

  sphere.castShadow = true
  scene.add(sphere)

  camera.position.x = -30
  camera.position.y = 40
  camera.position.z = 30
  camera.lookAt(scene.position)

  var controls = new function() {
    this.rotationSpeed = 0.02
    this.bouncingSpeed = 0.03
  }

  var gui = new dat.GUI()
  gui.add(controls, 'rotationSpeed', 0, 0.5)
  gui.add(controls, 'bouncingSpeed', 0, 0.5)

  // 添加统计图形
  let initStats = () => {
    var stats = new Stats()
    stats.setMode(0)
    document.getElementById('stats').append(stats.domElement)
    return stats
  }

  var stats = initStats()

  var step = 0.4
  var animation = () => {
    stats.update()

    step += controls.bouncingSpeed
    sphere.position.x = 20 + 10 * Math.cos(step)
    sphere.position.y = 2 + 10 * Math.abs(Math.sin(step))

    cube.rotation.x += controls.rotationSpeed
    cube.rotation.y += controls.rotationSpeed
    cube.rotation.z += controls.rotationSpeed

    requestAnimationFrame(animation)
    document.getElementById('root').append(renderer.domElement)
    renderer.render(scene, camera)
  }
  animation()

  // document.getElementById('root').append(renderer.domElement)
  // renderer.render(scene, camera)
}
