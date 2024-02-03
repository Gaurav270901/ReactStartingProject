//add header.css file
import './Header.css';


const reactDescription =['crucial','core','fundamental'];

function getRandomInt(max){
    return Math.floor(Math.random() * (max+1));
  }

export default function Header(){
    return (
      <header>
          <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }

  