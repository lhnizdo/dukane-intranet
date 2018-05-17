import React, { Component } from 'react';

class StyledRangeInput extends Component {
    constructor(props) {
        super(props);

        const parent = props.parent ? props.parent : this;

        this.onChange = props.onChange.bind(parent);
    }
    render() {
        return (
            <div className="styledRangeInput">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type="range" min={this.props.min} max={this.props.max} value={this.props.dayWidth} onChange={this.onChange} />
                <style global jsx>{`
                    input[type=range] {
                        -webkit-appearance: none;
                        margin: 18px 0;
                        width: 100%;
                    }
                    input[type=range]:focus {
                        outline: none;
                    }
                    input[type=range]::-webkit-slider-runnable-track {
                        width: 100%;
                        height: 8.4px;
                        cursor: pointer;
                        animate: 0.2s;
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                        background: #3071a9;
                        border-radius: 1.3px;
                        border: 0.2px solid #010101;
                    }
                    input[type=range]::-webkit-slider-thumb {
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                        border: 1px solid #000000;
                        height: 36px;
                        width: 16px;
                        border-radius: 3px;
                        background: #ffffff;
                        cursor: pointer;
                        -webkit-appearance: none;
                        margin-top: -14px;
                    }
                    input[type=range]:focus::-webkit-slider-runnable-track {
                        background: #367ebd;
                    }
                    input[type=range]::-moz-range-track {
                        width: 100%;
                        height: 8.4px;
                        cursor: pointer;
                        animate: 0.2s;
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                        background: #3071a9;
                        border-radius: 1.3px;
                        border: 0.2px solid #010101;
                    }
                    input[type=range]::-moz-range-thumb {
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                        border: 1px solid #000000;
                        height: 36px;
                        width: 16px;
                        border-radius: 3px;
                        background: #ffffff;
                        cursor: pointer;
                    }
                    input[type=range]::-ms-track {
                        width: 100%;
                        height: 8.4px;
                        cursor: pointer;
                        animate: 0.2s;
                        background: transparent;
                        border-color: transparent;
                        border-width: 16px 0;
                        color: transparent;
                    }
                    input[type=range]::-ms-fill-lower {
                        background: #2a6495;
                        border: 0.2px solid #010101;
                        border-radius: 2.6px;
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                    }
                    input[type=range]::-ms-fill-upper {
                        background: #3071a9;
                        border: 0.2px solid #010101;
                        border-radius: 2.6px;
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                    }
                    input[type=range]::-ms-thumb {
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                        border: 1px solid #000000;
                        height: 36px;
                        width: 16px;
                        border-radius: 3px;
                        background: #ffffff;
                        cursor: pointer;
                    }
                    input[type=range]:focus::-ms-fill-lower {
                        background: #3071a9;
                    }
                    input[type=range]:focus::-ms-fill-upper {
                        background: #367ebd;
                    }
                `}</style>
            </div>
        );
    }
}

export default StyledRangeInput;