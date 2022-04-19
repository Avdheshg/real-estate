import './App.css';
import Showcase from "./Components/Showcase/Showcase";

function App() {

  const propertiesData = [
    {
      imageURL: "https://picsum.photos/200",
      price: 10000,
      address: [
        {
          add1: "987 Cantebury Drive",
          add2: "Golden Valley, MN 55427"
        }
      ],
      parameters: [
        {area: "860 m2"}, 
        {beds: 2},
        {baths: 3},
        {garage: 2}
      ]
    },
    {
      imageURL: "https://picsum.photos/200",
      price: 380000,
      address: [
        {
          add1: "987 Cantebury Drive",
          add2: "Golden Valley, MN 55427"
        }
      ],
      parameters: [
        {area: "860 m2"}, 
        {beds: 2},
        {baths: 3},
        {garage: 2}
      ]
    },
    {
      imageURL: "https://picsum.photos/200",
      price: 210000,
      address: [
        {
          add1: "987 Cantebury Drive",
          add2: "Golden Valley, MN 55427"
        }
      ],
      parameters: [
        {area: "860 m2"}, 
        {beds: 2},
        {baths: 3},
        {garage: 2}
      ]
    }
  ]

  return (
     <div className="showcase">
       <Showcase data={propertiesData[0]}/>
       <Showcase data={propertiesData[1]}/>
       <Showcase data={propertiesData[2]}/> 
     </div>
  );
}

export default App;
