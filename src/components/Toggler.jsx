import React, { useState } from "react";

const Toggler = ({ onChange, className }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        onChange(!toggle);
    };

    return (
        <span
            className={`toggler flex flex-col gap-y-1 ${className || ""}`}
            onClick={handleToggle}
        >
            <span
                className={`w-[25px] h-[2px] bg-white inline-block relative transition-all duration-300 ${
                    toggle ? "rotate-45 top-[6px]" : ""
                }`}
            ></span>
            <span
                className={`w-[25px] h-[2px] bg-white inline-block relative transition-all duration-300 ${
                    toggle ? "opacity-0" : ""
                }`}
            ></span>
            <span
                className={`w-[25px] h-[2px] bg-white inline-block relative transition-all duration-300 ${
                    toggle ? "-rotate-45 -top-[6px]" : ""
                }`}
            ></span>
        </span>
    );
};

export default Toggler;
