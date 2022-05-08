import myImage from '../cartoon-ren.png'
import '../App.css'

function AboutMe() {
 return(  
    <aside className="side-profile">
        <img className="image-border" src={myImage} alt="cartoon me" width="150" />
        <h1>Hi! I'm Lauren!</h1>
        <p> I'm a Javascript developer from the New York City area. I started coding back in 2019, and my main focus is web development and building applications for various language learning solutions! I mainly work in front-end, but occasionally set up servers as well! Thanks for stopping by!
        </p>
    </aside>
 )
}

export default AboutMe;