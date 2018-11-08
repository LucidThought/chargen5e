import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { classes } from './models';

class ClassSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classOpen: false,
            classPathOpen: false,
            selectedClass: "Select Class",
            levelDesired: null,
            levelSelectorOpen: false,
            classOptions: Object.values(classes)
        }
    }

    componentDidMount() {

    }

    toggleClassDropdown() {
        this.setState({
            classOpen: !this.state.classOpen
        });
    }

    toggleSubClassDropdown() {
        this.setState({
            classPathOpen: !this.state.classPathOpen
        });
    }

    toggleLevelSelect() {
        this.setState({
            levelSelectorOpen: !this.state.levelSelectorOpen
        });
    }

    setClass(name) {
        this.setState({selectedClass: name});
    }

    setClassLevel(i) {
        this.setState({levelDesired: i});
    }

    selectClassLevel() {
        let levelOptions = [];
        for(var i=1; i<=20; i++) {
            levelOptions.push(<DropdownItem key={i} onClick={this.setClassLevel.bind(this,i)}>{i}</DropdownItem>)
        }

        return levelOptions;
    }

    renderClassOptions() {
        let classMenuOptions = [];

        for (var i=0; i<this.state.classOptions.length; i++) {
            classMenuOptions.push(<DropdownItem key={i} onClick={this.setClass.bind(this,this.state.classOptions[i].name)}>{this.state.classOptions[i].name}</DropdownItem>);
        }
        
        return classMenuOptions;
    }

    render() {
        var levelOptions = this.selectClassLevel();
        var classOptions = this.renderClassOptions();
        return(
            <div>
                <Dropdown isOpen={this.state.classOpen} toggle={this.toggleClassDropdown.bind(this)}>
                    <DropdownToggle className="selector-component" caret>
                        {this.state.selectedClass}
                    </DropdownToggle>
                    <DropdownMenu>
                        {classOptions}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown isOpen={this.state.levelSelectorOpen} toggle={this.toggleLevelSelect.bind(this)}>
                    <DropdownToggle className="selector-component" caret>
                        {this.state.levelDesired ? this.state.levelDesired : "Select Class Level"}
                    </DropdownToggle>
                    <DropdownMenu>
                        {levelOptions}
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default ClassSelector;