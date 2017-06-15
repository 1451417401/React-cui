import React from 'react';
import { render } from 'react-dom';

import Tree from '../../src/tree/tree';


var data = [{
    label: 'Animal',
    level: 0,
    children: [{
        label: 'Dog',
        level: 1,
    }, {
        label: 'Cat',
        level: 1,
    }, {
        label: 'Hippopotamus',
        level: 1,
    }, {
        label: 'Chicken',
        level: 1,
        children: [
            { label: 'White Leghorn', level: 2 },
            { label: 'Jersey Giant', level: 2 }
        ]
    }]
}, {
    label: 'Vegetable',
    level: 0,
    children: [{
        label: 'Oranges',
        level: 1,
    }, {
        label: 'Apples',
        level: 1,
        children: [{
            label: 'Granny Smith',
            level: 2,
        }, {
            label: 'Red Delicous',
            level: 2,
        }, {
            label: 'Fuji',
            level: 2,
        }]
    }]
}, {
    label: 'Mineral',
    level: 0,
    children: [{
        label: 'Rock',
        level: 1,
        children: [
            { label: 'Igneous', level: 2 },
            { label: 'Sedimentary', level: 2 },
            { label: 'Metamorphic', level: 2 }
        ]
    }, {
        label: 'Metal',
        level: 1,
        children: [
            { label: 'Aluminum', level: 2 },
            { label: 'Steel', level: 2 },
            { label: 'Copper', level: 2 }
        ]
    }, {
        label: 'Plastic',
        level: 1,
        children: [{
            label: 'Thermoplastic',
            level: 2,
            children: [
                { label: 'polyethylene', level: 3 },
                { label: 'polypropylene', level: 3 },
                { label: 'polystyrene', level: 3 },
                { label: 'polyvinyl chloride', level: 3 },
            ]
        }, {
            label: 'Thermo Polymer',
            level: 2,
            children: [
                { label: 'polyester', level: 3 },
                { label: 'polyurethane', level: 3 },
                { label: 'vulcanized rubber', level: 3 },
                { label: 'bakelite', level: 3 },
            ]
        }]
    }]
}];

class TreeTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        return <div>
                    <a className="view-src" href="https://github.com/1451417401/React-cui/tree/master/src/tree">view src---tree</a>
                    <Tree data={data} ></Tree>
                </div>

    }
}

export default TreeTab;
