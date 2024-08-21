var incomingName

function revealLinkedIn(){
    if(document.getElementById("linkedIn").style.display === 'none'){
        document.getElementById("linkedIn").style.display = 'block';
    }else{
        document.getElementById("linkedIn").style.display = 'none';
    }
}

function revealGitHub(){
    if(document.getElementById("gitHub").style.display === 'none'){
        document.getElementById("gitHub").style.display = 'block';
    }else{
        document.getElementById("gitHub").style.display = 'none';
    }
}

function revealProjects(){
    if(document.getElementById("projects").style.display === 'none'){
        document.getElementById("projects").style.display = 'block';
    }else{
        document.getElementById("projects").style.display = 'none';
    }
}

function revealBlog(){
    if(document.getElementById("blog").style.display === 'none'){
        document.getElementById("blog").style.display = 'block';
    }else{
        document.getElementById("blog").style.display = 'none';
    }
}

function talkToUser(){
    if(document.getElementById("talk").style.display === 'none'){
        incomingName = prompt("What's your name? ");
        if(incomingName === null || incomingName === ""){
            document.getElementById("talk").innerHTML = "<p> Good day to you, Sir! </p>";
        }else{
            document.getElementById("talk").innerHTML = "<p> Hello "+incomingName+" </p>";
        }

        document.getElementById("talk").style.display = 'block';

    }else{
        document.getElementById("talk").style.display = 'none'
    }
}

function makeWindow(){
    NewWin = window.open('','NewWin','toolbare=no,status=no,width=200,height=100')
}

function showDate(){
    let date = new Date();
    document.getElementById("date").innerHTML = date;
}

function Greet(who){
    alert('Greetings '+who);
}