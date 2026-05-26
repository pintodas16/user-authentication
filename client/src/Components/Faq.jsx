import PlusIcon from "../Components/UI/PlusIcon";
import MinusIcon from "../Components/UI/MinusIcon";
import { useState, useRef } from "react";

function Faq() {
    const [disclouserOpen, setDisclouserOpen] = useState([true, false, false]);
    const contentRefs = [useRef(null), useRef(null), useRef(null)];

    const toggleDisclouser = (index) => {
        setDisclouserOpen((prev) =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };
    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="py-7.5 px-7.5 border-b border-grey">
                    <div
                        onClick={() => toggleDisclouser(0)}
                        className="flex gap-4.25 cursor-pointer"
                    >
                        <h5 className="w-full font-Manrope font-bold text-medium lg:text-tiny-xl text-dark">
                            How much does it cost to open a store?
                        </h5>
                        <div
                            className={`flex-none h-[28px] w-[28px] lg:h-[34px] lg:w-[34px] rounded-full border border-grey flex justify-center items-center ${
                                disclouserOpen[0]
                                    ? "bg-black border-transparent"
                                    : "bg-transparent"
                            }`}
                        >
                            {disclouserOpen[0] ? (
                                <svg
                                    width="14"
                                    height="2"
                                    viewBox="0 0 14 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 1H1"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <PlusIcon />
                            )}
                        </div>
                    </div>
                    <div
                        ref={contentRefs[0]}
                        className="overflow-hidden transition-height duration-500 ease-in-out"
                        style={{
                            height: disclouserOpen[0]
                                ? `${contentRefs[0]?.current?.scrollHeight}px`
                                : "0px",
                        }}
                    >
                        <div className="pt-4.25">
                            <p className="inline font-Manrope font-normal text-small lg:text-medium text-light-dark">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Qui molestiae perferendis
                                alias excepturi impedit modi similique optio
                                libero quis eaque.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-7.5 px-7.5 border-b border-grey">
                    <div
                        onClick={() => toggleDisclouser(1)}
                        className="flex gap-4.25 cursor-pointer"
                    >
                        <h5 className="w-full font-Manrope font-bold text-medium lg:text-tiny-xl text-dark">
                            Can I use my own domain name?
                        </h5>
                        <div
                            className={`flex-none h-[28px] w-[28px] lg:h-[34px] lg:w-[34px] rounded-full border border-grey flex justify-center items-center ${
                                disclouserOpen[1]
                                    ? "bg-black border-transparent"
                                    : "bg-transparent"
                            }`}
                        >
                            {disclouserOpen[1] ? (
                                <svg
                                    width="14"
                                    height="2"
                                    viewBox="0 0 14 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 1H1"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <PlusIcon />
                            )}
                        </div>
                    </div>
                    <div
                        ref={contentRefs[1]}
                        style={{
                            height: disclouserOpen[1]
                                ? `${contentRefs[1]?.current?.scrollHeight}px`
                                : "0px",
                        }}
                        className={`transition-height duration-500 ease-in-out overflow-hidden`}
                    >
                        <div className="pt-4.25">
                            <p className="inline font-Manrope font-normal text-small lg:text-medium text-light-dark">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Optio quidem, corrupti
                                consequuntur odit deleniti labore voluptatem?
                                Totam odio illum doloremque.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-7.5 px-7.5 ">
                    <div
                        onClick={() => toggleDisclouser(2)}
                        className="flex gap-4.25 cursor-pointer"
                    >
                        <h5 className="w-full font-Manrope font-bold text-medium lg:text-tiny-xl text-dark">
                            How do I get paid?
                        </h5>
                        <div
                            className={`flex-none h-[28px] w-[28px] lg:h-[34px] lg:w-[34px] rounded-full border border-grey flex justify-center items-center ${
                                disclouserOpen[2]
                                    ? "bg-black border-transparent"
                                    : "bg-transparent"
                            }`}
                        >
                            {disclouserOpen[2] ? (
                                <svg
                                    width="14"
                                    height="2"
                                    viewBox="0 0 14 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 1H1"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <PlusIcon />
                            )}
                        </div>
                    </div>
                    <div
                        ref={contentRefs[2]}
                        style={{
                            height: disclouserOpen[2]
                                ? `${contentRefs[2]?.current?.scrollHeight}px`
                                : "0px",
                        }}
                        className={`transition-height duration-500 ease-in-out overflow-hidden`}
                    >
                        <div className="pt-4.25">
                            <p className="inline font-Manrope font-normal text-small lg:text-medium text-light-dark">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Adipisci, accusantium?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
