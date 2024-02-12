import NewCard from "../components/NewCard";
import "./Types.css" 
import img1 from '../images/sql.gif'
function Types(){
    const data={
        image:img1,
        title:"asfdafddaad",
        body:"safdafd"
    }
    return(
        <div className="b">
            
                <NewCard data={data}/>

                
        </div>
    )

}
export default Types;