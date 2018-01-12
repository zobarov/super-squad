import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeCharacterById} from '../actions';

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Heroes List</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return(
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">
                                    {hero.name}
                                </div>
                                <div className="list-item right-button"
                                    onClick={() => this.props.removeCharacterById(hero.id)}>
                                    X
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapHeroesToState(state) {
    return {
        heroes: state.heroes
    }
}
    
export default connect(mapHeroesToState, {removeCharacterById})(HeroList);