import { PerspectiveCamera } from "three";

// const fov = 2 * Math.atan(30 / (2 * 10)) * (180 / Math.PI); // in degrees
const CAMERA = new PerspectiveCamera(
  // fov,
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
CAMERA.position.set(10, 10, 0);
CAMERA.lookAt(0, 0, 0);

export default CAMERA;
