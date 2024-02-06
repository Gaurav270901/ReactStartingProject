import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data.js";



export default function CoreConcepts(){
    return (<><section id="core-concepts">
    <h2>Core Concepts</h2>
    {/* { for(let concept of {CORE_CONCEPTS}){

      <CoreConcept {...concept}/>
     }
     } */}

    {/* {CORE_CONCEPTS.map((concept) => {
          return <CoreConcept {...concept} />;
        })} */}

    <ul>
      {CORE_CONCEPTS.map((concept) => (
        
          <CoreConcept key={concept.title} {...concept} />
       
      ))}
    </ul></section></>);
}