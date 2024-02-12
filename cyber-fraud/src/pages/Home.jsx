import {motion} from 'framer-motion'
import img1 from "../images/card1.png"
import img2 from "../images/cloude.jpg"
import img3 from "../images/hack.jpg"
import img4 from "../images/info.jpg"
import img5 from "../images/privacy.png"
import CardBanner from '../components/CardBanner';
function Home(){
    const data=[
        {   
            image:img1,
            title:"Security indeed is required",
            description:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks..So tyou do need to maintain it..."
        },
        {   
            image:img2,
            title:"Cloude security",
            description:"Well your all data ffrom social media is stored here, so indeed it is important to acknowledge this..."
        },
        {   
            image:img3,
            title:"Avoid being hacked!!",
            description:"Because they steal your money and open credit card and bank accounts in your name so you better avoid it.  "
        },
        {   
            image:img4,
            title:"Now whats information hacking?!",
            description:"Well the act of compromising digital devices and networks through unauthorized access to an account or computer system."
        },
        {   
            image:img5,
            title:"You know why privacy is needed..",
            description:"The massive stores of personal data that social media platforms collect and retain are vulnerable to hacking, and data breaches, particularly if platforms fail to institute critical security measures and access then they can steal your personal pics...."
        },
    ]
    return(
        <div>
            <CardBanner data={data}/>
        </div>
    )
}


export default Home;