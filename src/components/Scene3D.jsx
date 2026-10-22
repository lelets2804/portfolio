
import { Component } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";

class Scene3DErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="scene-3d scene-3d-fallback" role="img" aria-label="Composição geométrica abstrata">
          <div className="fallback-orbit fallback-orbit-one" />
          <div className="fallback-orbit fallback-orbit-two" />
          <div className="fallback-core" />
          <div className="scene-label"><span className="status-dot" /> CREATIVE TECHNOLOGY / 01</div>
        </div>
      );
    }

    return this.props.children;
  }
}

function OrbitalRing({ rotation, scale, color, opacity = 0.6 }) {
  return (
    <mesh rotation={rotation} scale={scale}>
      <torusGeometry args={[1, 0.006, 6, 96]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function FloatingObjects() {
  return (
    <group>
      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.55}>
        <mesh rotation={[0.3, 0.2, 0.1]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial color="#b8a4ff" metalness={0.55} roughness={0.2} clearcoat={1} clearcoatRoughness={0.15} transparent opacity={0.9} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[1.35, 0.8, 0.1]} scale={0.25}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#91e7ff" metalness={0.8} roughness={0.2} emissive="#2879a8" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.7}>
        <mesh position={[-1.25, -0.85, 0.4]} rotation={[0.5, 0.5, 0]} scale={0.3}>
          <torusGeometry args={[0.7, 0.15, 12, 32]} />
          <meshStandardMaterial color="#f472b6" metalness={0.75} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh position={[-1.15, 0.95, -0.5]} scale={0.2}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.22} emissive="#48218a" emissiveIntensity={0.25} />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.6}>
        <mesh position={[1.05, -1.05, -0.4]} scale={0.16}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#f9a8d4" metalness={0.7} roughness={0.25} />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.7}>
        <mesh position={[0.1, 1.5, -0.7]} scale={0.12}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshBasicMaterial color="#80dfff" />
        </mesh>
      </Float>

      <OrbitalRing rotation={[1.1, 0.4, 0.2]} scale={1.55} color="#a995ff" opacity={0.75} />
      <OrbitalRing rotation={[0.6, -0.4, 0.8]} scale={1.85} color="#80dfff" opacity={0.45} />
      <OrbitalRing rotation={[0.2, 1.1, 0.5]} scale={1.35} color="#f472b6" opacity={0.4} />

      <Sparkles count={45} scale={4.5} size={1.8} speed={0.3} color="#c9b9ff" />
      <Sparkles count={18} scale={3.2} size={2.5} speed={0.2} color="#80dfff" />
    </group>
  );
}

function SceneContent() {
  return (
    <div className="scene-3d" role="img" aria-label="Escultura 3D com formas geométricas flutuantes, partículas e anéis orbitais">
      <Canvas dpr={1} camera={{ position: [0, 0, 5.5], fov: 42 }} gl={{ alpha: true, antialias: false, powerPreference: "low-power", failIfMajorPerformanceCaveat: false }}>
        <ambientLight intensity={1.1} />
        <pointLight position={[3, 3, 4]} intensity={18} color="#c3a6ff" />
        <pointLight position={[-3, -2, 2]} intensity={12} color="#76ddff" />
        <pointLight position={[0, 2, -2]} intensity={8} color="#f472b6" />
        <FloatingObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.7} />
      </Canvas>
      <div className="scene-label"><span className="status-dot" /> CREATIVE TECHNOLOGY / 01</div>
    </div>
  );
}

export default function Scene3D() {
  return (
    <Scene3DErrorBoundary>
      <SceneContent />
    </Scene3DErrorBoundary>
  );
}
