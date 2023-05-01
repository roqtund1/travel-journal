import data from '../data/data';
import locationIcon from '../assets/location-icon.png'

export default function Card(prop){
    const objectLength = data.length;
    const props = prop.obj;
    return(

        <div style={{width: '100%'}}>
            <div className="card">
                <img src={`${props.imageLink}`} alt="Card Image" className='card--image'/>

                <div className="card--info--container">
                    <div className='location--icon--line'>
                        <img className='location--icon' src={locationIcon} alt="Location Icon"/>
                        <span className='country'>{props.country}</span>
                        <span className='view--on--map'><a className='map--link' href={`${props.mapLink}`}>view on google map</a></span>
                    </div>
                   
                    <h1 className='location'>{props.location}</h1>
                    <h5 className='time--stamp'>{props.timeStamp}</h5>
                    <p className='location--description'>{props.locationDescription}</p>
                </div>
            
            </div>
            {props.id < objectLength && <hr />}
            
        </div>

    )
}