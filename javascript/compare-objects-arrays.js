//Array
var dogs = ["Rusty", "Lucky", "Bubba"];
dogs //["Rusty", "Lucky", "Bubba"]
dogs[1] //Lucky

dogs.push("Wyatt");
dogs //["Rusty", "Lucky", "Bubba", "Wyatt"]

dogs[1] = "Lucy";
dogs //["Rusty", "Lucy", "Bubba"]


//Objects
var dog = {
  name: "Bubba",
  breed: "Lab"
}
dog // Object {name: "Bubba", breed: "lab"}
dog["name"] //Bubba

dog.name //Bubba
dog["age"] = 6;
dog.age = 6;

dog.breed = "black lab";
