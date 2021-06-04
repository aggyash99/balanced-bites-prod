import {Link} from 'react-router-dom'
import Rating from '@material-ui/lab/Rating'; 
import google from '../Image/Review/google.png'
const CardforReview =(props)=>{

    return (
        <>
        <div className="maincardsFOR" style={{cursor:"pointer", userSelect:"none"}}>
        <div className="reviewcards">
        <div className="goggleCards">
            <div className="goggleCardsimg2" style={{zIndex:"2"}}>{props.iconInitial}</div><span style={{height:"60px", width:"60px", color:"pink", backgroundColor:props.iconBG, position:"absolute", zIndex:"0", left:"57px", borderRadius:"50%"}}></span>

            <div className="Person">
                <span className="nameofperson">{props.name}</span>
            <Rating className="rating" value={5}  max={5}/>
            </div>
        </div>
        <div className="text-content">
        <p >
        {props.description}
        </p>
        <div className="ENDbutton">
        <a href={props.link}><img className="googleImage" src={google} alt="google "/></a>
        <Link to={props.link} className="buttonLink">Read More</Link>
        </div>
        </div>
        </div>
        </div> 
        </>
    );

}
export default CardforReview;

