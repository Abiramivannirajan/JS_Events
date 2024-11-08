//promises
// 3 states= fullfilled ,rejected ,pending

const { error, log } = require("console");

const myProject= new Promise((resolve, reject) => {
const error=false;
  if(!error){
    resolve("yes! its resolved the promise")
  }else{
    reject("no! its rejected the promise")
  }
  
})
console.log(myProject);



myProject.then(value=>{  //thenables  
    console.log(value)

})

myProject.error((error)=>{
    console.log(error);  //catch
});
