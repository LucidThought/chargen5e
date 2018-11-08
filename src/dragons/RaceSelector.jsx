import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class RaceSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            raceOpen: false,
            subRaceOpen: false
        }
    }

    componentDidMount() {

    }

    toggleRaceDropdown() {
        this.setState({
            raceOpen: !this.state.raceOpen
        });
    }

    toggleSubRaceDropdown() {
        this.setState({
            subRaceOpen: !this.state.subRaceOpen
        });
    }

    render() {
        return(
            <div>
                <Dropdown isOpen={this.state.raceOpen} toggle={this.toggleRaceDropdown.bind(this)}>
                    <DropdownToggle className="selector-component" caret>
                        {!!this.props.selectedRace ? this.props.selectedRace : "Select Race"}
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.races.map((race,idx) => {
                            return <DropdownItem hidden={!this.state.raceOpen} key={idx} onClick={() => {this.props.setRace(race)}}>{race}</DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={this.state.subRaceOpen} toggle={this.toggleSubRaceDropdown.bind(this)}>
                    <DropdownToggle className="selector-component" caret disabled={!["Dwarf","Elf","Halfling"].includes(this.props.selectedRace)}>
                        {!!this.props.selectedSubRace && ["Dwarf","Elf","Halfling"].includes(this.props.selectedRace) ? this.props.selectedSubRace : "Select SubRace"}
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.subRaces.map((subrace,idx) => {
                            return <DropdownItem hidden={!this.state.subRaceOpen} key={idx} onClick={() => {this.props.setSubRace(subrace)}}>{subrace}</DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default RaceSelector;