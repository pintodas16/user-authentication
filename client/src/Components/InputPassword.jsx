import { useState } from "react";
import HideIcon from "./UI/HideIcon";
import ShowIcon from "./UI/ShowIcon";
import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function InputPassword({
    type = 'text',
    className = '',
    isFocused = false,
    label,
    ...props
}, ref) {
    const input = ref ? ref : useRef();

    const [show, setShow] = useState(false);
    const handlePasswordShow = (e) => {
        setShow(!show);
    };

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <label
                htmlFor=""
                className="block font-Manrope font-semibold text-black text-small"
            >
                {label}
            </label>
            <div className="w-full flex items-center  rounded-xl border border-gray px-5 py-2.5">
                <input
                    {...props}
                    type={show ? "text" : "password"}
                    ref={input}
                    className="w-full bg-transparent focus:outline-none border-none font-Manrope font-normal text-small text-dark placeholder:font-Manrope placeholder:font-normal placeholder:small placeholder:text-[#4B4B4B] tracking-widest"
                />
                <span
                    className="block cursor-pointer"
                    onClick={handlePasswordShow}
                >
                    {!show && <HideIcon />}
                    {show && <ShowIcon />}
                </span>
            </div>
            <span className="hidden font-Manrope font-normal text-error-text text-error-red">
                Wrong password!
            </span>
        </div>
    );
});
