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

function showDate(){
    let date = new Date();
    document.getElementById("date").innerHTML = date;
}
