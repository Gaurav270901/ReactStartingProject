import { EXAMPLES } from "../data.js";
import { useState } from "react";
import TabButton from "./TabComponent.jsx";
import Section from "./Section.jsx";


export default function Examples(){

    const [selectedTopic , setSelectedTopic ]= useState("");//we can call them directly on the top level of a component function

    var tabContent = <p>Plese Select Some Topic</p> ;
    if(selectedTopic){
      tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
     </div>}
    
    //use state return two elements thats why we are using array destructuring to store that value
    //first element manage the actual data
    //second element is always a function which is used to update the data
    // let tabContent = "Please Click The Button";
  
    function handleClick(selectedButton){
     // tabContent = selectedButton; will change the value but not reflect in the ui thats why we use state 
      setSelectedTopic(selectedButton);
    }
    return (<>
             <Section title = "Examples" id = "examples" className ="">
           <menu>
              <TabButton isSelected = {selectedTopic==="components"} onClick={()=>handleClick('components')}>Components</TabButton>
              <TabButton isSelected = {selectedTopic==="jsx"} onClick={()=>handleClick('jsx')}>JSX</TabButton>
              <TabButton isSelected = {selectedTopic==="props"} onClick={()=>handleClick('props')}>Props</TabButton>
              <TabButton isSelected = {selectedTopic==="state"} onClick={()=>handleClick('state')}>State</TabButton>
           </menu>

           {/* one of the way to use conditional rendering */}
            {/* {!selectedTopic ? <p>Plese Select Some Topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
           </div>} */}

       
       {/* //{!selectedTopic && <p>Plese Select Some Topic</p>} */}
       {/* // {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
           </div>}*/}
           {tabContent}
        </Section>
    </>);

}