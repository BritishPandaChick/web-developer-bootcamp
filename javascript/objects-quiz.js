//Exercise one
var someObject = {};

/* Which are valid */
someObject._name = "Hedwig"; //true

someObject.age = 6; //true

var prop = "color"
someObject[prop] = "red"; //true

someObject.123 = true; //false

//Exercise 2
var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};
/*retrieve Malfoy from someObject */
//Go one layer at the time.
someObject.friends[0].name;
