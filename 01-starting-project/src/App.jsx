import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabComponent.jsx";'./assets/TabButton';
import {useState} from 'react'; //all the components starting from "use" known as react hooks 
import { EXAMPLES } from "./data.js";



function App() {

  const [selectedTopic , setSelectedTopic ]= useState("");//we can call them directly on the top level of a component function

  
  //use state return two elements thats why we are using array destructuring to store that value
  //first element manage the actual data
  //second element is always a function which is used to update the data
  // let tabContent = "Please Click The Button";

  function handleClick(selectedButton){
   // tabContent = selectedButton; will change the value but not reflect in the ui thats why we use state 
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* { for(let concept of {CORE_CONCEPTS}){

            <CoreConcept {...concept}/>
           }
           } */}

          {/* {CORE_CONCEPTS.map((concept) => {
                return <CoreConcept {...concept} />;
              })} */}

          <ul>
            {CORE_CONCEPTS.map((concept,index) => (
              <li key={index}>
                <CoreConcept {...concept} />
              </li>
            ))}
          </ul>
        </section>
        <section id = "examples">
           <h2>Examples</h2>
           <menu>
              <TabButton onSelect = {()=>handleClick('components')}>Components</TabButton>
              <TabButton onSelect={()=>handleClick('jsx')}>JSX</TabButton>
              <TabButton onSelect={()=>handleClick('props')}>Props</TabButton>
              <TabButton onSelect={()=>handleClick('state')}>State</TabButton>
           </menu>
            {!selectedTopic ? <p>Plese Select Some Topic</p> : null}
           {selectedTopic ? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
           </div>:null}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;



// when we change the value of the component it will not change the entire app function it will only call the value that is 
// changed thats why even if we change the value of the component it will not change the entire app function it will only call the value that is
//changed and we cannot see the change the ui


//thats why we use state 
//
