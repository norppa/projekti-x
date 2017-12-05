import React, {Component} from 'react';

class LomakeTiedot extends Component {
    render() {
        return(
            <div className="lomakeosa">
                <h2>Aiemmin raapustellut turinat</h2>
                <p>{this.props.hlo.etunimi} {this.props.hlo.sukunimi}</p>
            </div>
        );
    }
}
LomakeTiedot.defaultProps = {hlo: {etunimi:'Oletus tekstiä', sukunimi:'tsättihuoneessa'}}
export default LomakeTiedot;