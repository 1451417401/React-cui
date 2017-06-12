import React from 'react';
import './tree.scss';
class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    compositeData() {
        var _this = this;
        return function recursion(data) {
            return data.map((value, index) => {
                return <div key={index} className="unit">
                            <p className={'tree-level'+value.level} onClick={_this.handleClick.bind(_this)} key={index}>{value.label}</p>
                                {   
                                    value.children?recursion(value.children):''
                                }
                        </div>
            })
        }
    }
    render() {
        var { data } = this.props;
        var compositeData = this.compositeData()(data);
        return <div className="tree-container">
            {
                compositeData
            }
        </div>
    }
    handleClick(event) {
        var target = event.target;
        var objArray = event.target.parentNode.children;
        console.dir(objArray);
        objArray = Array.prototype.slice.call(objArray, 1)
        console.dir(objArray);
        //objArray.shift();
        for (var i = 0; i < objArray.length; i++) {
            var dom = objArray[i];
            dom.style.display == 'none' ? dom.style.display = 'block' : dom.style.display = 'none';
        }


    }
}

export default Tree;
