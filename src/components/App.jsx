import React, {} from "react";
import CardList from "./CardList.jsx";
import Form from "./Form.jsx";
import "babel-polyfill";
import "../styles/style.css";

/* eslint-disable react/react-in-jsx-scope */
/*GitHub usernames: zteater, imtav, GnuLegax*/

class App extends React.Component {
    state = { 
        profiles: []
    };
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    }
    
    render() {
    return (
        <div>
            <h3 className="header">{this.props.title}</h3>
            <Form onSubmit={this.addNewProfile} />
            <CardList profiles={this.state.profiles} />
        </div>
    )
        
    }
}
export default App;
