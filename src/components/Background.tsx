'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

const BackgroundCanvas = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // if (isMobile) return null; // Don't render on mobile

  return (
    <div className="fixed  bg-gradient-to-b from-gray-900 to-gray-950 inset-0 z-0">
      <Canvas>
        <OrbitControls enableZoom={false}  autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={5} />
        <pointLight position={[10, 10, 10]} />
        <Stars
          radius={100}
          depth={50}
          count={10000}
          factor={4}
          saturation={1}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;