import React ,{useState}from 'react';
import {Image,Input,  Icon} from 'semantic-ui-react';
import Element from './components/Element';
import Pop from './components/Popupp';
import ApolloClient,{gql} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri:'http://localhost:4004/graphql'
});

function App() {

  const [loading,setLoading]=useState(true);
    setInterval(()=>{setLoading(true)},2000);
  if(loading){
    return (
    <ApolloProvider client={client}>
    <div className="app">
      <Pop/>
        <div className="header">
              <div className='logo'>
                <Image src='../img/catalogue.png' size='small'/>
              </div>
            
                <nav>
                  <ul className="nav_links" >
                    <div className="nav_content">
                    <li>Home</li>
                    <div className="categoriesDrop">
                    <li>Categories</li>
                    <div className="dropdown-content">
                      <a>test</a>
                    </div>
                    </div>
                    </div>
                  </ul>
                </nav>
                <div className="menu_low_resolution">
                    <Icon  name='list ul' color="grey" size="large"/>
                    <div className="dropdown-content">
                      <a>test</a>
                    </div>
                    
                </div>
                <div>
                <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
                </div>
                
        </div>
        
        <div className="body">
            <Element />    
        </div>
        
    </div>
    </ApolloProvider>
  );}

} 

export default App;
