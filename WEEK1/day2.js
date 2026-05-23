// const promise = new Promise((resolve,reject)=> {
//     const success =false;

//     if(success){
//         resolve('Task Done.');
//     } else{
//         reject('Something failed');
//     }
// });

// promise
//     .then(result => console.log(result))
//     .catch(result => console.log(result));

// function fetchUser() {
//     return new Promise(resolve => {
//         setTimeout( () => resolve({name:'Spandana', age:18}),3000)
//     });
// }

// async function getUser() {
//     console.log('Fetching User...');
//     const user = await fetchUser();
//     console.log(`UserName: ${user.name}, Age: ${user.age}`);
// }

// getUser();

// function fetchData(fail) {
//     return new Promise((resolve,reject) =>{
//         if(fail) reject(new Error('Network Error !'));
//         else resolve('Data loaded');
//     });
// }

// async function loadData(){
//     try{
//         const data = await fetchData(false);
//         console.log(data);
//     }
//     catch(error){
//         console.log('Caught error:', error.message);
//     }
// }
// loadData();

const myPromise = new Promise(resolve => {
    setTimeout( () => resolve("Hello from myPromise!"),2000);
});

myPromise.then(result => console.log(result));