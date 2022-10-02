// main varabile
let theinput=document.querySelector(".get-respon input");
let getbutton=document.querySelector(".get-button");
let showdata=document.querySelector(".show-data");

getbutton.onclick = function(){
    getRepose()
}

//get repose funcation
    function getRepose() {
        if(theinput.value ==""){
            showdata.innerHTML ="<span> please write github username.</span"
        }
        else{
            fetch(`https://api.github.com/users/${theinput.value}/repos`)
            .then((response)=>{
                return response.json();
            })
            .then((repositories)=>{
                //emty container 
            showdata.innerHTML="";
            //loop data 
            repositories.forEach(repo => {
                //craete main div
                let maindiv=document.createElement("div")
                //ctreat repo name text
                let reponame=document.createTextNode(repo.name)
                //append the text to main div
                maindiv.appendChild(reponame)
                //create rpo url
                let thURL=document.createElement('a')
                  //create rpo url text
                let thURL_text=document.createTextNode(" visit");
                //append the text
                thURL.appendChild(thURL_text)
                //add the hypertext reference "href"
                thURL.href=`https://github.com/${theinput.value}/${repo.name}`
                //set attribute blank
                thURL.setAttribute('target','_blank')
                //append url to main div
                maindiv.appendChild(thURL)
                //create start count span 
                let startspan=document.createElement("span")
                //create the start count text
                let start_teaxt=document.createTextNode(` stars ${repo.stargazers_count}`)
                //add stars  count text to stars span
                startspan.appendChild(start_teaxt)
                //append span to main main div
                maindiv.appendChild(startspan)
                //add class in main div 
                maindiv.className="repo_div"
                //append the main div to container
                showdata.appendChild(maindiv)
                
            });
        })
    }
}





