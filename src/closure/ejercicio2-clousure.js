function createPetList() {
  // Tu código aquí 👈
  let mascotas = [];
  function agregarMascota(animal) {
    if(typeof(animal) == 'undefined'){
        console.log(mascotas);
    }else{
        mascotas.push(animal);
        console.log(mascotas);
    }
  }
  return agregarMascota;
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();
myPetList([23, 45]);
myPetList({'raza': 'Pastor aleman', 'edad' : 22});
