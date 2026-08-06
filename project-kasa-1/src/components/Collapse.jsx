import { useState } from "react";

const Collapse = ({ titleSpan, children}) => {

    const [open, setOpen] = useState(false);

    return(

        <div className={`collapse ${open ? "active" : ""}`}>

            <button className="collapse-header" onClick= {() => (setOpen(!open))}>

                <span className="title-span">{ titleSpan }</span>

                <div className="arrow">

                    <span></span>
                    <span></span>

                </div>

            </button>

            <div className="collapse-content">

                <div className="content">

                    { children }

                </div>

            </div>

        </div>

    );

}

export default Collapse;