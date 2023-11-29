import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const ThreeModel = () => {
    const gltf = useLoader(GLTFLoader, '/TV/Television_01_1k.gltf');
  
    return <primitive object={gltf.scene} position={[0, 0, 0]} />;
  };
  

export default ThreeModel;
