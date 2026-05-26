import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function InputText(
    { type = "text", className = "", isFocused = false, label, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <label
                // htmlFor=""
                className="block font-Manrope font-semibold text-black text-small"
            >
                {label}
            </label>
            <input
                {...props}
                type={type}
                className={
                    "focus:outline-none border border-gray rounded-xl px-5 py-2.5 font-Manrope font-normal text-small text-dark placeholder:font-Manrope placeholder:font-normal placeholder:small placeholder:text-[#4B4B4B] bg-transparent" +
                    className
                }
                ref={input}
            />
        </div>
    );
});

// function InputText({ type, label, placeholder }) {
//     return (
//         <div className="flex flex-col gap-3">
//             <label
//                 htmlFor=""
//                 className="block font-Manrope font-semibold text-black text-small"
//             >
//                 {label}
//             </label>
//             <input
//                 type={type}
//                 placeholder={placeholder}
//                 className="focus:outline-none border border-gray rounded-xl px-5 py-2.5 font-Manrope font-normal text-small text-dark placeholder:font-Manrope placeholder:font-normal placeholder:small placeholder:text-[#4B4B4B] bg-transparent"
//             />
//             <InputError />
//         </div>
//     );
// }

// export default InputText;
