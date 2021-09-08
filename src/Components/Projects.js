import React from "react";

function Projects () {
    return(
        <>
         <div id="mywork" className="search">
                <button id="refactor"><a href="https://absk786.github.io/Assignment1/"><img src="/CSS/coderefactor.png" alt="coderefactor - link to my project" className="float-right" /></a> </button>
                <h2 className="headertwo">Code Refactor - Project</h2>
                <p>
                    Abdul has recently started his Full Stack Web developer course at University of Toronto. Click the image on the right to check out his latest projects where he refactored code 
                    and demosntrated good practices by organising code in a concise, legiable and coherant manner which is easy to read and follow.
                </p>
            </div>
            <div id="mywork" className="search">
                <h2 className="headertwo">Front End - Group Project</h2>
                <p>
                    Abdul has completed his first group front end project where in a team environment they built a calorie tracker. The group successfully managed to integrate multiple API's, used local storage for data preservance and further more  used various CSS libraries to render a modern UI.
                    <a href="https://uot-project-grp.github.io/project01-calorie-tracker/">Click here to view deployed project</a> Abdul has successfully completed his first full stack project where the team incorporated an entire backend functionality and linked with a modern UI <a href="https://obscure-river-98687.herokuapp.com/dashboard">Click here to view deployed project</a> </p>
            </div>
        </>
    )
}

export default Projects