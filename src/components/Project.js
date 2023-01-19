const Project = (props) => {
    return (
        <>
        <h1>
            {props.title}
        </h1>
        <img src={props.gif}alt="screenshot of project" className=" mx-auto animate-spin-once"></img>
        <p>Description of the project</p>
        </> );
}
 
export default Project;