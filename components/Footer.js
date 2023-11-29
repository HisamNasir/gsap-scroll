import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeModel from "./ThreeModal";
function Footer() {
  const controls = useRef();
  const [zoom, setZoom] = useState(5);
  const handleScroll = (event) => {
    setZoom((prevZoom) => prevZoom - event.deltaY * 0.005);
  };
  return (
    <footer
      className="font-semibold text-5xl text-amber-500 flex justify-center items-center h-screen"
      onWheel={handleScroll}
    >
      <Canvas style={{ width: '50vw', height: '50vh' }}>
        <ambientLight intensity={3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="white" />
        <ThreeModel />
        <OrbitControls ref={controls} enableDamping dampingFactor={0.25} />
        <perspectiveCamera position={[-5, -5, zoom]} fov={85} />
      </Canvas>
      <span>Basic Design</span>
    </footer>
  );
}

export default Footer;
