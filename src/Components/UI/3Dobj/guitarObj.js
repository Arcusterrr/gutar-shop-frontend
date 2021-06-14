function init()
    {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        
        let renderer = new THREE.WebGL1Renderer({alpha: true, antialias: true});
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(1280, 720);
        renderer.domElement.setAttribute("id", "Guitar3Dobj");
        document.body.insertBefore(renderer.domElement, document.body.firstChild);

        const alight = new THREE.AmbientLight(0x404040, 1.2);
        scene.add(alight);
        
        const plight = new THREE.AmbientLight(0xFFFFFF, 1.2);
        plight.position.set(0, -3, 7);
        scene.add(plight);

        let loader = new GLTFLoader();
        let obj = null;

        loader.load("Guitar/scene.gltf", function(gltf){
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
    
    }