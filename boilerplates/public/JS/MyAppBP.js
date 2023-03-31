const deleteButton = document.querySelector('#deleteButton');
const postButton = document.querySelector('#postButton');
const userNamePost = document.querySelector('#usernamePost');
const commentPost = document.querySelector('#commentPost');

let data = {}



// -------Create CRUD --------------------------------//
if (postButton != null){
        postButton.addEventListener('click', () => {
        console.log('clicked');
        try {
            if (userNamePost.value.length != 0 && commentPost.value.length !=0){ 
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "database.json", true);
                xhr.setRequestHeader("Content-Type", "application/JSON")
                data.username = userNamePost.value;
                data.comment = commentPost.value;
                console.log('xhr:', xhr)
                xhr.send(JSON.stringify(data))
                window.location.href = './allComments'
            }
            else {
                throw "Input Validation Error:"
            }
        }
        catch (e){
            if (userNamePost.value.length === 0 || commentPost.value.length === 0 ){ 
                const validWarning =  document.createElement('h1');
                const thrownError = document.createElement('h2');
                thrownError.innerText = `${e}`
                validWarning.innerText = "Please Enter a UserName and Comment";
                userNamePost.style.backgroundColor = 'yellow';
                commentPost.style.backgroundColor = 'yellow';
                validWarning.style.color = 'red';
                thrownError.style.color = 'red';
                document.body.append(thrownError);
                document.body.append(validWarning);
            }
        }
    })
}

// -----------------------------------------------------------//
//-------------Delete CRUD -----------------------------------//
if (deleteButton != null){
    deleteButton.addEventListener('click', ()=>{
            const xhr = new XMLHttpRequest();
            xhr.open("DELETE", "/allComments");
            xhr.setRequestHeader("Content-Type", "application/JSON");
            xhr.send()
            window.location.href = '/allComments'
    })
}
