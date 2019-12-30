import React from "react";

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{margin: '1rem'}}>
                <img src={profile.avatar_url} />
                <div className="info" style={{display: 'inline-block', marginLeft: '10px'}}> 
                    <div className="name" style={{fontSize: '125%'}} key={profile.id}>{profile.name}</div>
                    <div className="company" style={{color: Math.random() < 0.5 ? 'green' : 'red'}}>{profile.company}</div>   
                </div>
            </div>
        );
    }
}
export default Card;