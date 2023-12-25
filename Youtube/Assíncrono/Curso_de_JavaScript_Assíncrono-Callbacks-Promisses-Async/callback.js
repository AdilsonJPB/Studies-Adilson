//LOGIN USUÀRIO - CALLBACK
// O Problema - javascript quando temos um (setTimeout) ele pula esse código e vai direto para o console.log
/*const loginUser = (email, password) => {
    setTimeout(() => {
        console.log("user logged");
        return { email };
    },1500);

    console.log("after setTimeout");
}

const user = loginUser("Felipe@gmail.com", "123456");

console.log({ user })*/


// A solução - o código vai pular o seTimeOut, porém irá voltar pelo callback que é uma função e um parâmetro
/*const loginUser = (email, password, callback) => {
    setTimeout(() => {
    console.log("user logged");
    callback({email}); 
    },1500);

    console.log("after setTimeout");
}

const user = loginUser("felipe@gmail.com", "1234567", (user) => {
    console.log({ user });
});*/


// E se houver erros? - error é igual a true, então ao colocar return, entraráno return e parará ali
/*const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {    
    const error = true;
    if (error) {
        return onError(new Error("error in login!"));
    }

    console.log("user logged");
    onSuccess({ email });
    },1500)

    console.log("after setTimeout");
}

const user = loginUser(
    "Adilson@gmail.com", 
    "123456", 
    (user) => {
    console.log({ user });
}, (error) => {
    console.log({ error })
}
);*/

//QUAL O ERRO DO CALLBACK PARA SER NECESSÀRIO O PROMISSE?
// O código fica muito confuso, várias funções dentro de outas
const loginUser = (email, password, onSucces, onError) => {
    setTimeout(() => {
    const error = false;
    if (error) {
        return onError(new Error("Error in login"));
    }

    console.log("user logged");
    onSucces({ email });
    },1500);
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
    callback(['video1', 'video2', 'video3'])
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
    callback({ title: "video teste" })
    },2500);
}


const user = loginUser(
    "Adilson@gmail.com",
    "123456",
    (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({videos});
        getVideoDetails(videos[0], (videoDetails) => {
        console.log({videoDetails});
        })
    })
}, (error) => {
    console.log({ error });
}
);