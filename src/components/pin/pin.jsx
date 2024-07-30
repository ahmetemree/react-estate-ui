import { Link } from "react-router-dom";
import "./pin.scss";
import { Marker, Popup } from "react-leaflet";

function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
            <img src={item.img} alt="" />
            <div className="textContainer"></div>
            <Link to={`${item.id}`}>{item.title}</Link>
            <span className="bed">{item.bedroom} bedroom</span>
            <b>${item.price}</b>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin
