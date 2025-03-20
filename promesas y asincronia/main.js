// Mediante la palabra async decimos que la función siemppre
/* devolverá una promesa.
async function f(){
    return 1;
}

f().then(alert);

async function f(){
    return Promise.resolve(1);
}

f().then(alert);
*/


async function showAvatar(){

    //let response = await fetch('/article/promise-chaining/user.json');
    //let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/albdom222`);
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    console.log(githubUser);
    //await new Promise((resolve, reject) => setTimeout(resolve,3000));

    //img.remove();

    return githubUser;
}

showAvatar();

async function loadJson(){

    try {
        let response = await fetch('./no-such-user.json');
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        alert(error);
    }
}

//loadJson();