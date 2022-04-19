import Address from "./Address";
import Parameters from "./Parameters";
import Card from "./Card/Card";


function Showcase(props) {
    return(
        <div className="container">
            <Card className="showcase__container">
                <img src={props.data.imageURL} alt="" />
                <h1> {props.data.area} </h1>
                <p className="price"> ${props.data.price} </p>
                <Address addressData={props.data.address}></Address>
                <Parameters parameterData={props.data.parameters}></Parameters>
            </Card>
        </div>
    )
}

export default Showcase;








































