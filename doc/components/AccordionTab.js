import React from 'react';
import Accordion from '../../src/accordion/accordion';




class AccordionTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var accordionData = {
            '大标题1': ['标题1-0', '标题1-1', '标题1-2'],
            '大标题2': ['标题2-0', '标题2-1', '标题2-2'],
            '大标题3': ['标题3-0', '标题3-1', '标题3-2'],
            '大标题4': ['标题4-0', '标题4-1', '标题4-2'],
        }
        return <div>
                    <a className="view-src" href="https://github.com/1451417401/React-cui/tree/master/src/accordion">view src---accordion</a>
                    <Accordion  accordionData={accordionData}></Accordion>
                </div>

    }
}

export default AccordionTab;
