
import Header from "./components/Header/Header.jsx"; 
import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";




function App() {
  //we cannot return more than one element from component thats why we wrap our code in one div tag thats why we got unnecessary tag  instead of this we can write <fragment> or <></> for wrapping tag

 
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts/>
        <Examples/>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;



// when we change the value of the component it will not change the entire app function it will only call the value that is 
// changed thats why even if we change the value of the component it will not change the entire app function it will only call the value that is
//changed and we cannot see the change the ui


//thats why we use state 
//
