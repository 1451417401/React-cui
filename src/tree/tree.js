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
                var clsName = value.children ? ' has-children' : '';
                return <div key={index} className="unit">
                            <p className={'tree-level'+value.level+clsName} onClick={_this.handleClick.bind(_this)} key={index}>{value.label}</p>
                                {   
                                    value.children?<div className="children">{recursion(value.children)}</div>:''
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
        var tarReg = /has-children/g;
        if (tarReg.test(target.className)) {
            if (/close/g.test(target.className)) {
                target.className = target.className.replace(/close/g, '');
            } else {
                target.className += " close";
            }
        }

        var children = target.nextElementSibling;
        var childReg = /animat/g;
        if (children) {
            if (childReg.test(children.className)) {
                children.className = children.className.replace(childReg, '');
            } else {
                children.className += " animat";
            }
        }
        // var objArray = event.target.parentNode.children;
        // console.dir(objArray);
        // objArray = Array.prototype.slice.call(objArray, 1)
        // console.dir(objArray);
        // for (var i = 0; i < objArray.length; i++) {
        //     var dom = objArray[i];
        //     dom.style.display == 'none' ? dom.style.display = 'block' : dom.style.display = 'none';
        // }


    }
}

export default Tree;
