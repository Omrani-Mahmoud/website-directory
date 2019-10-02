import React, {useState, createRef, useEffect} from "react";
import {Image, Popup, Rating, Button,Loader} from 'semantic-ui-react';
import {gql} from 'apollo-boost';
import { graphql} from 'react-apollo';
import Frame from './Frame';


const getElements = gql`{
  elements{
    id
    img
    text
    name
    rate
    link
  }
}`;



function Element(props){
    const reff= createRef()
    const [togeled,setTogeled] = useState(false);

    useEffect(()=>{
        if(togeled)
        reff.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

  console.log(props.data);
    },[togeled])
    const [link,setLink] = useState('');
    let src='../img/elements/';
    if(props.data.loading){
        return(
            <Loader active inverted>loading ... </Loader>    
        )}
    else
        return(
            <React.Fragment>
                
            <div className="elements">
            
             {props.data.elements.map(elem =>{
                 return(
                    <div id="element"  key={elem.id}>
                    <Popup
                        trigger={<Image  src={src +elem.img} size="tiny" className="img"></Image>}
                        on='click'
                        hideOnScroll>
                            
                        <Popup.Content>
                            <span>
                                <h3>{elem.name}</h3>
                                <p>{elem.text}</p>
                                <Rating defaultRating={elem.rate} maxRating={5} disabled />
                                <div className="btn_nav"><Button circular size="mini" icon="linkify" onClick={()=>{setTogeled(!togeled);setLink(elem.link)  }} color="facebook" color="facebook"/></div>
                            </span>
                        </Popup.Content>
                    </Popup>
                    </div>
             
             )})} 
            </div>
             <div ref={reff}>
                {togeled && [<Frame link={link} gg={true}/>,<a className="close_btn"onClick={()=>setTogeled(!togeled)}>close</a>]}
            </div>
            </React.Fragment>
    )
}
export default graphql(getElements)(Element);

//onClick={()=>navigate(elem.link)} color="facebook"