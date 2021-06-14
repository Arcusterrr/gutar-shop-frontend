import React, { ReactNode, useEffect, useRef } from 'react';
import {
   Scene,
   PerspectiveCamera,
   WebGL1Renderer,
   AmbientLight,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import './3Dobj.scss';

type Obj3DProps = {
   aboutCompany: ReactNode
}


export const Obj3D: React.FC<Obj3DProps> = (props) => {
   const sceneRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      let scene = new Scene();
      let camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 45;

      let renderer = new WebGL1Renderer({ alpha: true, antialias: true });
      renderer.setClearColor(0xffffff, 0);
      renderer.setSize(700, 400);
      renderer.domElement.setAttribute("id", "Guitar3Dobj");
      sceneRef.current!.append(renderer.domElement);

      const alight = new AmbientLight(0x404040, 1.2);
      scene.add(alight);

      const plight = new AmbientLight(0xFFFFFF, 1.2);
      plight.position.set(0, -3, 7);
      scene.add(plight);

      let loader = new GLTFLoader();
      let obj: any = null;

      loader.load("/app/Guitar/scene.gltf", function(gltf){
          obj = gltf;
          obj.scene.scale.set(1.3, 1.3, 1.3);

          scene.add(obj.scene);
      });

      function animate(){
          requestAnimationFrame(animate);

          if(obj)
              obj.scene.rotation.y += 0.03;

          renderer.render(scene, camera);
      }
      animate()
   }, [sceneRef.current]);

   return (
      <div className="MainContent">
         <div className="Guitar3D" ref={sceneRef}>
         
         </div>
         <div className="About">
            <p className="bigWord">О Компании</p>
            
            {props.aboutCompany}
         </div>
      </div>
   );
}