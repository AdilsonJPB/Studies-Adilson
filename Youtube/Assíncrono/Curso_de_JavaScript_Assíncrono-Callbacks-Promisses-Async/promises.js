//LOGIN USUÀRIO PROMISSE
// Diferente de callback, promise tem resolve e reject, se for resolve é acionado a função .then
/*const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true;

        if (error) {
            reject(new Error('error in login'))
        }

        console.log("user logged!")
        resolve({ email })
    })
}

loginUserPromise("Adilson@gmail.com", "1234567").then((user) => {
    console.log({ user });
})*/


// E QUANTO A ERRO?
// no caso de reject, temos uma função com o nome de catch
/*const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true;

        if(error){
            reject(new Error("error in login!"));
        }

        console.log("user logged");
        resolve({ email });
    })
}

loginUserPromise("Adilson@gmail.com.br", "1234567").then((user) => {
    console.log({ user });
}).catch((error) => {
    console.log( {error} )
});*/

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const erro = false;

        if (erro) {
            reject(new Error("Error in login!"));
        }

        console.log("user logged");
        resolve({ email });
    })
}


const getUserVideosPromise = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideos")
            resolve(['video1', 'video2', 'video3'])
        }, 2000);
    })
}

const getVideoDetailsPromise = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideoDetails")
            resolve({ title: "video teste" })
        }, 2500);
    })
}

loginUserPromise(
   "Adilson@gmail.com",
    "1234567")
    .then((user) => getUserVideosPromise(user.email))
    .then((videos)=> getVideoDetailsPromise(videos[0]))
    .then((videoDetails) => console.log({videoDetails}))
    .catch((error) => console.log({ error }))

// Promise.all  