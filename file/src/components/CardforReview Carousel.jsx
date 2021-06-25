<<<<<<< HEAD
 
=======
>>>>>>> af41a2afe75d784f809b065cf7ec87929b6499f5
import Rating from '@material-ui/lab/Rating'; 
import google from '../Image/Review/google.png'
const CardforReview =(props)=>{

    return (
        <>
        <div className="maincardsFOR" style={{cursor:"pointer", userSelect:"none"}}>
        <div className="reviewcards">
        <div className="goggleCards">
        <div className="img">A</div>
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
        <a href={props.link} className="buttonLink">Read More</a>
        </div>
        </div>
        </div>
        </div> 
        </>
    );

}
export default CardforReview;

