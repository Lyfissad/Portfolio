import ProjTile from "./ProjTile";
import projects from "../project.json"

export default function Projects(props){
    const proJObj = projects[0].projects
    return(
        <div id="projects" className={`pl-9 md:relative md:left-[15%] mt-[30vh] md:mt-[60vh] mb-4 ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
            <h1 className="text-2xl
            text-green font-semiHead md:text-3xl animate-fadeInM">Some of my work<hr className="w-10/12 md:w-3/5 relative top-4 border-darkSlate
            border-y"/></h1>
            <div className="md:mx-auto absolute md:grid md:grid-cols-2 gap-x-6 w-11/12 md:w-4/6 mt-5">
                <ProjTile projName = {proJObj.DMS.title} details = {proJObj.DMS.det} stacks = {proJObj.DMS.sNt}/>

                <a href="https://anime-hub-ebon.vercel.app/" rel="noopener noreferrer" target="_blank">
                    <ProjTile projName = {proJObj.AnimeHub.title} details = {proJObj.AnimeHub.det} stacks= {proJObj.AnimeHub.sNt} gitAddress = {proJObj.AnimeHub.GitLink}/>
                </a>

                <a href="https://fit-log-indol.vercel.app/" rel="noopener noreferrer" target="_blank">
                    <ProjTile projName = {proJObj.FitLog.title} details = {proJObj.FitLog.det} stacks= {proJObj.FitLog.sNt} gitAddress = {proJObj.FitLog.GitLink}/>
                </a>               
                
                <ProjTile projName = {proJObj.Hospital.title} details = {proJObj.Hospital.det} stacks= {proJObj.Hospital.sNt}/>
            </div>
        </div>
    )
}