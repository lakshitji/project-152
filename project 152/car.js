AFRAME.registerComponent(
  "car", {
    init: function () {
      var car = document.createElement("a-entity");

      car.setAttribute("gltf-model", "./car/scene.gltf");
      car.setAttribute("position", { x: -4, y: 0.00000000001, z: -8 });
      car.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      car.setAttribute("scale", { x: 7, y: 2, z: 2 });

      var sceneEl = document.querySelector("a-scene");

      sceneEl.appendChild(car);


      this.clickCounter = 0;




      car.addEventListener("click", function () {

        this.clickCounter++;


        if (this.clickCounter === 1) {
          car.setAttribute("rotation", { x: 0, y: 40, z: 0 });
        } else if (this.clickCounter === 2) {
          car.setAttribute("rotation", { x: 0, y: 80, z: 0 });
        } else if(this.clickCounter === 3){
          car.setAttribute("rotation", { x: 0, y: 120, z: 0 });
        } else if(this.clickCounter === 4){
          car.setAttribute("rotation", { x: 0, y: 160, z: 0 });
        } else if(this.clickCounter === 5){
          car.setAttribute("rotation", { x: 0, y: 200, z: 0 });
        } else if(this.clickCounter === 6){
          car.setAttribute("rotation", { x: 0, y: 240, z: 0 });
        } else if(this.clickCounter === 7){
          car.setAttribute("rotation", { x: 0, y: 280, z: 0 });
        } else if(this.clickCounter === 8){
          car.setAttribute("rotation", { x: 0, y: 320, z: 0 });
        } else if(this.clickCounter === 9){
          car.setAttribute("rotation", { x: 0, y: 360, z: 0 });
        }

         else {


          this.clickCounter = 0;
          car.setAttribute("position", { x: -4, y: 0.00000000001, z: -8 });
          car.setAttribute("rotation", { x: 0, y: 90, z: 0 });
        }
      });
    }
  }
);
