//Accessing the form
const inputfields = document.querySelector('.input-fields')

//Accessing the resume preview
const output = document.querySelector('.output')

let inputShow = true
async function TextEditor(element){
//Texteditor
const newEditor = await ClassicEditor
//We have used async await to handle promise
.create(element,{
    toolbar: [ 'heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
})

return newEditor
}

let workExpdetails
TextEditor(inputfields["workexp"]).then(nEditor=>{
    workExpdetails = nEditor
})
let Academic
TextEditor(inputfields["academics"]).then(nEditor=>{
    Academic = nEditor
})
let Objective
TextEditor(inputfields["objective"]).then(nEditor=>{
    Objective = nEditor
})
let Skill
TextEditor(inputfields["skills"]).then(nEditor=>{
    Skill = nEditor
})
let Project
TextEditor(inputfields["projects"]).then(nEditor=>{
    Project = nEditor
})
let Achievement
TextEditor(inputfields["achievements"]).then(nEditor=>{
    Achievement = nEditor
})






//On click preview will disappear inputs and on clicking again it shows inputs

function toggle(){
    if(inputShow){
        //Changing the html
        inputfields.style.display = "none"
        
        output.innerHTML=`
        <div class='Heading'>
        <h1>${inputfields["name"].value}</h1>
        <h3>${inputfields["title"].value}</h3>
        <div class="links">
        <a class="link"><i class="fa fa-github"></i>${inputfields["github"].value}</a>
        <a class="link"><i class="fa fa-linkedin-square"></i>${inputfields["linkedin"].value}</a>
        <a class="link"><i class="fa fa-at"></i>${inputfields["email"].value}</a>
        
        </div>
        </div>
        <div class='main'>
        
        <div>
            <h2>OBJECTIVE</h2>
            ${Objective.getData()}
            <h2>SKILLS</h2>
            ${Skill.getData()}
            <h2>ACHIEVEMENTS</h2>
            ${Achievement.getData()}
            <h2>CONTACTS</h2>
            <p>${inputfields["contact"].value}
        </div>
        <div>
            <h2>WORK-EXPERIENCE</h2>
            ${workExpdetails.getData()}
            <h2>ACADEMIC-DETAILS</h2>
            ${Academic.getData()}
            <h2>PROJECTS</h2>
            ${Project.getData()}

        </div>
        </div>
        <div class="btnprint">
            <button onclick="print()">Print Resume</button>
        </div>
        `
        inputShow = false
    }
    else{
        inputfields.style.display = "block"
        inputShow = true
        output.innerHTML=""
    }
}

