"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      // Show static gradient fallback
      containerRef.current.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      return
    }

    const container = containerRef.current

    let renderer: THREE.WebGLRenderer | null = null

    try {
      const vertexShader = `
        void main() {
          gl_Position = vec4( position, 1.0 );
        }
      `

      const fragmentShader = `
        #define TWO_PI 6.2831853072
        #define PI 3.14159265359

        precision highp float;
        uniform vec2 resolution;
        uniform float time;

        void main(void) {
          vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
          float t = time*0.05;
          float lineWidth = 0.002;

          vec3 color = vec3(0.0);
          for(int j = 0; j < 3; j++){
            for(int i=0; i < 5; i++){
              color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
            }
          }
          
          gl_FragColor = vec4(color[0],color[1],color[2],1.0);
        }
      `

      const camera = new THREE.Camera()
      camera.position.z = 1

      const scene = new THREE.Scene()
      const geometry = new THREE.PlaneGeometry(2, 2)

      const uniforms = {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() },
      }

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)

      container.appendChild(renderer.domElement)

      const handleResize = () => {
        const width = container.clientWidth
        const height = container.clientHeight
        if (renderer) {
          renderer.setSize(width, height)
          uniforms.resolution.value.x = renderer.domElement.width
          uniforms.resolution.value.y = renderer.domElement.height
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize, false)

      const animate = () => {
        const animationId = requestAnimationFrame(animate)
        uniforms.time.value += 0.05
        renderer?.render(scene, camera)

        if (sceneRef.current) {
          sceneRef.current.animationId = animationId
        }
      }

      sceneRef.current = {
        camera,
        scene,
        renderer,
        uniforms,
        animationId: 0,
      }

      animate()

      return () => {
        window.removeEventListener("resize", handleResize)

        if (sceneRef.current && renderer) {
          cancelAnimationFrame(sceneRef.current.animationId)

          if (container && renderer.domElement) {
            try {
              container.removeChild(renderer.domElement)
            } catch (e) {
              // Element may already be removed
            }
          }

          renderer.dispose()
          if (sceneRef.current.scene) {
            sceneRef.current.scene.clear()
          }
        }
      }
    } catch (error) {
      console.error("Failed to initialize WebGL:", error)
      // Fallback to static gradient
      container.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      return () => { }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full pointer-events-none"
      style={{
        background: "#000",
        overflow: "hidden",
      }}
    />
  )
}

