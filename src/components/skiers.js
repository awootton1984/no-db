import React, { Component } from 'react';
import './skiers.css'


class Skiers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }
    edit() {
        const { skiers } = this.props;
        this.setState({
            editing: true
        });
        this.props.setEdit(skiers.name, skiers.type, skiers.status);
    }
    updateSkiers(id) {
        this.props.updateSkiers(id);

        this.setState({
            editing: false
        });
    }

    render() {
        const { skier } = this.props;
        return (
            <div className="skier-wrapper" key={skier.id}>
                <h2>{skier.name}</h2>
                <p>{skier.type}</p>
                <p>{skier.status}</p>
                {/* deleteSkiers={this.deleteSkiers}
          updateSkiers={this.updateSkierssetEdit={this.setEdit}} */}
                <button onClick={() => this.props.deleteSkiers(skier.id)}>Delete </button>

                <button onClick={() => this.updateSkiers(skier.id)}>Edit</button>
            </div>
        );
    }
}

export default Skiers;