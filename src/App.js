import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks=['Manna', 'Joshim', 'shakib', 'Shuvo', 'Rahim'];
    const products=[
        {name: 'Photoshop', price:'$69.96'},
        {name: 'Illastator', price:'$40.96'},
        {name: 'PDF Reader', price:'$10.00'},
        {name: 'PDF Editor', price:'$06.50'},
        {name: 'Microsoft', price:'$439.40'}
    ]
    return ( 
    <div className = "App">
        <header className = "App-header" >
            <h3>I am a react person</h3>
            <Counter></Counter>

            <Users></Users>

            <ul>
                {
                    nayoks.map(nayok => <li>{nayok}</li>)
                }
                {
                    products.map(product => <li>{product.name}, {product.price}</li>)
                
                }
                {
                    products.map(pd=><Product product={pd}></Product>)
                }
            </ul>

            {/* <Product name={products[0].name} price={products[0].price}></Product>
            <Product name={products[1].name} price={products[1].price}></Product>
            <Product name={products[2].name} price={products[2].price}></Product>
            <Product name={products[3].name} price={products[3].price}></Product> */}
            <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
            <Product product={products[2]}></Product>
            <Product product={products[3]}></Product>

            <Person name = "Nahiyaan" type = "Baby" hobby="Watching Cartoon"></Person>
            <Person name = "Krishaan" type = "Actor" hobby="Acting"></Person>
            <Person name = "Betu" type = "Cricketer" hobby="Playing Cricket"></Person>
            <Person name = "Moyna" type = "Footballer" hobby="Watching Footballer"></Person>
            <Person name = "Sarwar" type = "Body Builder" hobby="Doing GYM"></Person>
        </header>
        
    </div>
    );
}

function Person(props) {
    const stylePerson={
        backgroundColor: 'gray',
        border: '5px solid yellow',
        borderRadius:'10px',
        margin: '10px',
        color: 'white',
        width:'700px'
    }
return (
    <div style={stylePerson}>
        <h2 style={{backgroundColor: 'black'}}>Name : {props.name}</h2>
        <p style={{color:'yellow', fontSize: 'bold'}}>Type: {props.type}</p>
        <p style={{color:'gold'}}>Hobby: {props.hobby}</p>
    </div>
)    
}

function Product(props) {
    const productsStyle={
        border: '1px solid gray',
        borderRadius:'10px',
        backgroundColor: 'lightgray',
        margin: '5px',
        float: 'left',
        height: '200px',
        width: '200px',
        color: 'green'
    }
    const {name, price} = props.product;
return (
    // <div style={productsStyle}>
    //     <h3>{props.name}</h3>
    //     <h5>{props.price}</h5>
    //     <button>Buy Now</button>
    // </div>
    <div style={productsStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy Now</button>
</div>
)    
}

function Counter() {
    const [count, setCount] =useState(0);
    const handleCount = () => setCount(count + 1);
    //  const newCount = count + 1;
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrise</button>
            <button onClick={() => setCount(count - 1)}>Decrise</button>
        </div>
    )
}

function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
       
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    return(
        <div>
            <h3>Dynamic Users: {users.length}</h3>
               <ul>
                   {console.log(users)}
                   {
                       users.map(user => <li>{user.name} = {user.phone}</li>)
                   }
               </ul>
            
        </div>
    )
}



export default App;