import myImage from '../cartoon-ren.png'
import '../App.css'

function AboutMe() {
 return(  
    <aside className="aboutme-aside">
        <img className="image-border" src={myImage} alt="cartoon me" width="100" />
        <h4>Hi! I'm Lauren!</h4>
        <p> I'm a Javascript developer from the New York City area. 
        <p>I started coding back in 2019, and my main focus is web development and building applications for various language learning solutions!</p> 
        <p>I mainly work in front-end, but occasionally set up servers as well! Thanks for stopping by!</p>
        </p>
    </aside>
 )
}

export default AboutMe;