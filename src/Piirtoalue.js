import React, {Component} from 'react';
import LomakeTiedot from "./LomakeTiedot";

class Piirtoalue extends Component {

    state = {live_editori: ''};

    btnKlikattu = (tapahtuma) => {
        tapahtuma.preventDefault();
        if (this.props.callback) {
            this.props.callback(this.state);
        }
        this.setState({live_editori: ''});
    }

// TODO: Lähetä <input id="piirtoalue"> JSON-oliona osoitteeseen
// "proxy": "http://localhost:8080/ws"
    piirtoalueMuuttunut = (eventTapahtuma) => {this.setState({live_editori:eventTapahtuma.target.value})}

// TODO: Vastaanota JSON-olio osoitteesta
// registry.enableSimpleBroker("/channel");
// eli http://localhost:8080/channel
// TODO ja renderöi käyttäjälle näytettävä sivu

    // TODO: NextStep lienee ottaa kiinni tapahtumasta vain muutos (muuttunut merkki, sen sijainti koordinaatit) ja lähettää se osoitteeseen
    // "proxy": "http://localhost:8080/ws"

    render() {
        return(
            <form className="lomakeosa form-horizontal">
                <fieldset>
                    <legend>Live editor</legend>
                    <div className="form-group">
                        <label htmlFor="piirtoalue" className="control-label col-sm-2">Online muokkausta</label>
                        <div className="col-sm-10">


                            {/* Value kertoo, että React hallinnoi elementtiä eikä kukaan muu pysty syöttämään siihen mitään
                            Sen vuoksi Reactia täytyy auttaa kertomalla "onChange" (on mitä tahansa muutosta) */}
                            <input value={this.state.live_editori} onChange={this.piirtoalueMuuttunut} className="form-control" id="piirtoalue"/>


                        </div>
                    </div>

                </fieldset>
            </form>
        );
    }
}

export default Piirtoalue;