window.addEventListener('load', () => {
  const isMobile = window.matchMedia('(max-width: 375px)').matches
  let controls
  let renderer
  let scene
  let camera
  let pivot
  let immersiveMode = false
  const startBtn = document.getElementById('startbtn')
  const init = () => {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100)
    scene = new THREE.Scene()
    if (isMobile) {
      controls = new THREE.DeviceOrientationControls(camera)
    } else {
      controls = new THREE.PointerLockControls(camera, document.body)
      controls.addEventListener('unlock', () => {
        document.body.addEventListener('click', () => {
          controls.lock()
        })
      })
      scene.add(controls.getObject())
    }
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    const loader = new THREE.TextureLoader()
    const texture = loader.load('/assets/img/bridge-to/bridge-equirect.png', () => {
      const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
      rt.fromEquirectangularTexture(renderer, texture)
      scene.background = rt
    })
    document.getElementById('container').appendChild(renderer.domElement)
    window.addEventListener('resize', onWindowResize, false)
  }

  const animate = () => {
    window.requestAnimationFrame(animate)
    if (immersiveMode) {
      controls.update()
    }
    renderer.render(scene, camera)
  }

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  startBtn
    .addEventListener('click', async () => {
      // In immersive mode we read the (mobile) device orientation
      // to move the camera, like a VR device!
      // When not in it, we just use PointerLockControls to move the 
      // camera like a PC first-person shooter
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        alert('This experience requires immersion. We\'re about to ask for permission to read your device\'s orientation!')
        const permission = await DeviceOrientationEvent.requestPermission()
        if (permission === 'granted') {
          console.log('Orientation mode permission granted')
          immersiveMode = true
        } else {
          console.log('Orientation mode permission not granted.')
        }
      } else {
        console.log('Device doesn\'t allow orientation access.')
      }
      if (isMobile && !immersiveMode) {
        alert('Aw..you didn\'t give us access. Okay, try again later!')
        return
      }
      document.getElementById('preface-text').remove()
      init()
      if (!immersiveMode) {
        controls.lock()
      }
      animate()
    })
})