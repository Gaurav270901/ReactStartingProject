export default function TabButton({ isSelected ,children , ...props }){//onClick can have any name 
    return <li><button className = {isSelected ? "active":""}  {...props}>{children}</button></li>;
}


// <TabButton>Component</TabButton> as we are calling this component like this 
// it will not add component inside the button as we are not passing it as a props
// but every component return props out of it one property is childred 
// props.children stored the value between the opening and closing tag of the component
// <TabButton>Component</TabButton> will be stored in props.children
//children name is a keyword so you have to mention it as children always 
//  we can pass function to the component using props


//in jsx we use className instead of class 