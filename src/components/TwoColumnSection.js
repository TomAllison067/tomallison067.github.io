import React from 'react';
import './styles/twocolumnsection.css';

function TwoColumnSection(props) {
    return <section className="container">
        <div className={props.type === "left-heavy" ? "left-wide" : "left-thin"}>
            {props.left}
        </div>
        <div className={props.type === "left-heavy" ? "right-thin" : "right-wide"}>
            {props.right}
        </div>
    </section>
}

export default TwoColumnSection