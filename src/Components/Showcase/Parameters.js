

function Parameters(props) {
    return(
        <div >
            <p>Area: {props.parameterData[0].area} </p>
            <p>Beds: {props.parameterData[1].beds} </p>
            <p>Baths: {props.parameterData[2].baths} </p>
            <p>Garage: {props.parameterData[3].garage} </p>
        </div>
    )
}

export default Parameters;























