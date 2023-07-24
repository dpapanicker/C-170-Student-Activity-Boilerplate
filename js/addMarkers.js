AFRAME.registerComponent("create-markers", {
  
  init: async function() {

    

    //get the dishes collection from firestore database
    var dishes = await this.getDishes();
   
    dishes.map(dish => {
      


      //set the markerhandler component
      


      // Adding 3D model to scene
      



      // Ingredients Container
     



      // Dish title background plane
      var titlePlane = document.createElement("a-plane");
      titlePlane.setAttribute("id", `title-plane-${dish.id}`);
      titlePlane.setAttribute("position", { x: 0, y: 0.89, z: 0.02 });
      titlePlane.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      titlePlane.setAttribute("width", 1.69);
      titlePlane.setAttribute("height", 0.3);
      titlePlane.setAttribute("material", { color: "#F0C30F" });
      mainPlane.appendChild(titlePlane);

      // Dish title
      var dishTitle = document.createElement("a-entity");
      dishTitle.setAttribute("id", `dish-title-${dish.id}`);
      dishTitle.setAttribute("position", { x: 0, y: 0, z: 0.1 });
      dishTitle.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      dishTitle.setAttribute("text", {
        font: "monoid",
        color: "black",
        width: 1.8,
        height: 1,
        align: "center",
        value: dish.dish_name.toUpperCase()
      });
      titlePlane.appendChild(dishTitle);

      // Ingredients List
      var ingredients = document.createElement("a-entity");
      ingredients.setAttribute("id", `ingredients-${dish.id}`);
      ingredients.setAttribute("position", { x: 0.3, y: 0, z: 0.1 });
      ingredients.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      ingredients.setAttribute("text", {
        font: "monoid",
        color: "black",
        width: 2,
        align: "left",
        value: `${dish.ingredients.join("\n\n")}`
      });
      mainPlane.appendChild(ingredients);
    });
  },
  //function to get the dishes collection from firestore database
  



  
});
