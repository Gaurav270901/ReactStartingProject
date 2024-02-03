// export default function CoreConcept(...props){
//     return (
//       <li>
//         <img src={props.image} alt = "..."/>
//         <h3>{props.title}</h3>
//         <p>{props.description}</p> 
//       </li>
//     )
      
//   }
  
  // we can write the same function using object desrtucturing 
  //{image , title , description}= {props.image , props.title , props.description}

  import './CoreConcept.css';
 export default function CoreConcept({image, title, description}){
      return (
      <li>
        <img src={image} alt = "..."/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }