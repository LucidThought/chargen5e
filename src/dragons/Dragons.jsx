/* This component is meant to draw an outline of an intended D&D character,
// You will still need to consult the players handbook for specifics regarding character options
*/
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import RaceSelector from './RaceSelector';
import { races, subRaces, classes } from './models';
import ClassSelector from './ClassSelector';

class Dragons extends React.Component {
    constructor(props) {
        super(props);
        this.setRace = this.setRace.bind(this);
        this.state = {
            race: "Select Race",
            subRaces: [],
            selectedClass: "Choose Class",
            selectedClasses: []
        }
    }

    setRace(newRace) {
        this.setState({race: newRace, selectedSubRace: ""});
        if(newRace === "Dwarf") {
            this.setState({subRaces: subRaces.dwarf});
        } else if(newRace === "Elf") {
            this.setState({subRaces: subRaces.elf});
        } else if(newRace === "Halfling") {
            this.setState({subRaces: subRaces.halfling});
        } else {
            this.setState({subRaces: []});
        }
    }

    setSubRace(newSubRace) {
        this.setState({selectedSubRace: newSubRace});
    }

    addClass(newClass) {
        this.state.selectedClasses.push(newClass);
        this.setState({selectedClasses:this.state.selectedClasses});
    }



    render() {
        document.title = "D&D Character Mapper";

        return(
            <div style={{padding: '20px'}}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <RaceSelector 
                                races={races}
                                setRace={this.setRace.bind(this)} 
                                selectedRace={this.state.race} 
                                subRaces={this.state.subRaces} 
                                setSubRace={this.setSubRace.bind(this)} 
                                selectedSubRace={this.state.selectedSubRace}
                                />
                        </Col>
                        <Col md={6}>
                            <ClassSelector
                                classes={classes}
                                selectedClass={this.state.selectedClass}
                                addClass={this.addClass.bind(this)}
                                />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dragons;