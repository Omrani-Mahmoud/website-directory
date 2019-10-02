import React from 'react';
import {} from 'semantic-ui-react';

function Frame(props){
    return(
        <div className="frame_div">
        <iframe height="400px" width="100%" name="iframe_a" src={props.link}></iframe>
        </div>
    )
}

export default Frame;