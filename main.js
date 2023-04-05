


// //getting all post


// async  function getPosts() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//               title: 'I am khalid Saifullah',
//               body: 'bar',
//               userId: 1,
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//   })
//   const data = await res.json()
//  return data
//             // .then((response) => response.json())
//             // .then((json) => console.log(json))
// }
// async function run() {
//    const post = await getPosts()
//  }



// const linkApi = {
  
//   //get
//   async get(url) {
//     const response = await fetch(url)
//     return response.json()
//   },

//   //post
//   async post(url,data) {
//     await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//   })
//     return response.json()
//   },

//   //update
//   async UpdatePost(url,data) {
//     await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//   })
//     return response.json()
//   },
//   //delete
//   async deletePost(url) {
//     await fetch(url, {
//             method: 'DELETE',
           
//   })
//     return response.json()
//   }

// }



// async function run() {

//   try {
//     const data = {
//       title: 'I am khalid Saifullah',
//       body: 'bar',
//       userId: 1,
      
//     }
//     const update = {
//       title: 'I am a Developer'
//     }
//     //get
//      const post = await linkApi.get('.....')
    
//     //post
//     const posts = await linkApi.post('https://jsonplaceholder.typicode.com/posts', data)
    
//     //Update
//     const UpdatePost = await linkApi.UpdatePost('https://jsonplaceholder.typicode.com/posts/2', update)
    
//     //delete
//     const deletePost = await linkApi.UpdatePost('https://jsonplaceholder.typicode.com/posts/2')
  
//   } catch (error) {
//     console.log(error)
// }
// }
// run()





// const getAll = {
  
   
//   async getPost(url){
//     const response = await fetch(url)
//      return response.json()
//   }
//  }


// async function runPost() {
//   const post = await getAll.getPost('https://github.com/public-apis/public-apis#animals')
//   console.log(post)
// }
// runPost()
// let firstName = []

// console.log(firstName)

const mYname = 'khalid'
const myAge = 24
const isDeveloper = true
const goingToBeDesigner = null



const mySelf = "I am " + mYname + " " +"I am" +" " + mYname+" " + isDeveloper+ " "+ goingToBeDesigner


console.log(mySelf)