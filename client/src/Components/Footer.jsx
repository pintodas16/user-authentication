import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");
    const location = useLocation();
    const path = location.pathname;

    const isMinimal = path === "/checkout" || path === "/add-seller";

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: wire up your newsletter API call here
        console.log("Subscribed:", email);
        setEmail("");
    };

    const socialLinks = [
        {
            href: "",
            icon: (
                <svg className="w-2 h-3.5 fill-dark group-hover:fill-white" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.47578 7.87456L7.89077 5.341H5.29677V3.69687C5.29677 3.00388 5.659 2.32794 6.82087 2.32794H8V0.171062C8 0.171062 6.9301 0 5.90687 0C3.7708 0 2.37461 1.21363 2.37461 3.41031V5.34144H0V7.875H2.37461V14H5.29677V7.875L7.47578 7.87456Z" />
                </svg>
            ),
            padding: "px-3.5 py-2.75",
        },
        {
            href: "",
            icon: (
                <svg className="h-3.5 w-3.5 fill-dark group-hover:fill-white" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00013 0C5.099 0 4.86061 0.00806517 4.11397 0.0421181C3.36889 0.0761086 2.86003 0.19446 2.41476 0.367476C1.95444 0.546369 1.56406 0.78574 1.17491 1.17489C0.78574 1.56404 0.546369 1.95446 0.367497 2.41478C0.19444 2.86003 0.0761294 3.36889 0.0420973 4.11397C0.00804434 4.86061 0 5.099 0 7.00013C0 8.90122 0.00804434 9.13962 0.0420973 9.88626C0.0761294 10.6313 0.19444 11.1402 0.367497 11.5854C0.54639 12.0458 0.785761 12.4361 1.17491 12.8253C1.56408 13.2145 1.95444 13.4539 2.41476 13.6328C2.86003 13.8058 3.36889 13.9241 4.11397 13.9581C4.86061 13.9922 5.099 14.0002 7.00013 14.0002C8.90122 14.0002 9.13962 13.9922 9.88626 13.9581C10.6313 13.9241 11.1402 13.8058 11.5854 13.6328C12.0458 13.4539 12.4361 13.2145 12.8253 12.8253C13.2145 12.4361 13.4539 12.0458 13.6328 11.5854C13.8058 11.1402 13.9241 10.6313 13.9581 9.88626C13.9922 9.13962 14.0002 8.90122 14.0002 7.00013C14.0002 5.099 13.9922 4.86061 13.9581 4.11397C13.9241 3.36889 13.8058 2.86003 13.6328 2.41478C13.4539 1.95446 13.2145 1.56404 12.8253 1.17489C12.4361 0.78574 12.0458 0.546369 11.5854 0.367476C11.1402 0.19446 10.6313 0.0761086 9.88626 0.0421181C9.13962 0.00806517 8.90122 0 7.00013 0ZM7.00013 1.26127C8.86921 1.26127 9.09062 1.26842 9.82876 1.3021C10.5113 1.33321 10.8819 1.44725 11.1286 1.54312C11.4553 1.67012 11.6885 1.82179 11.9335 2.06675C12.1784 2.3117 12.3301 2.54491 12.4571 2.87164C12.553 3.11831 12.667 3.48897 12.6981 4.17147C12.7318 4.90961 12.739 5.13101 12.739 7.00011C12.739 8.86921 12.7318 9.09062 12.6981 9.82876C12.667 10.5113 12.553 10.8819 12.4571 11.1286C12.3301 11.4553 12.1784 11.6885 11.9335 11.9335C11.6885 12.1784 11.4553 12.3301 11.1286 12.4571C10.8819 12.553 10.5113 12.667 9.82876 12.6981C9.09074 12.7318 8.86936 12.739 7.00011 12.739C5.13087 12.739 4.90952 12.7318 4.17147 12.6981C3.48895 12.667 3.11831 12.553 2.87166 12.4571C2.54489 12.3301 2.3117 12.1784 2.06677 11.9335C1.82181 11.6885 1.67012 11.4553 1.54312 11.1286C1.44725 10.8819 1.33323 10.5113 1.3021 9.82876C1.26842 9.09062 1.26127 8.86921 1.26127 7.00011C1.26127 5.13101 1.26842 4.90961 1.3021 4.17147C1.33323 3.48895 1.44725 3.11831 1.54312 2.87166C1.67012 2.54489 1.82181 2.3117 2.06675 2.06677C2.3117 1.82179 2.54491 1.67012 2.87164 1.54312C3.11831 1.44725 3.48897 1.33321 4.17147 1.3021C4.90961 1.26842 5.13101 1.26127 7.00011 1.26127" />
                    <path d="M7.00043 9.33416C5.71171 9.33416 4.66703 8.28948 4.66703 7.0008C4.66703 5.71208 5.71171 4.6674 7.00043 4.6674C8.28911 4.6674 9.33379 5.71208 9.33379 7.0008C9.33379 8.28948 8.28911 9.33416 7.00043 9.33416ZM7.00043 3.40613C5.01513 3.40613 3.40576 5.01549 3.40576 7.0008C3.40576 8.98606 5.01513 10.5954 7.00043 10.5954C8.9857 10.5954 10.5951 8.98606 10.5951 7.0008C10.5951 5.01549 8.9857 3.40613 7.00043 3.40613ZM11.5771 3.2641C11.5771 3.72805 11.201 4.10411 10.7371 4.10411C10.2732 4.10411 9.89708 3.72805 9.89708 3.2641C9.89708 2.80018 10.2732 2.42407 10.7371 2.42407C11.201 2.42407 11.5771 2.80018 11.5771 3.2641Z" />
                </svg>
            ),
            padding: "px-2.75 py-2.75",
        },
        {
            href: "",
            icon: (
                <svg className="fill-dark group-hover:fill-white" width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.42053C13.4758 1.66548 12.9197 1.82627 12.3503 1.89754C12.9434 1.52262 13.3988 0.928929 13.6132 0.221547C13.0494 0.574422 12.4326 0.823045 11.7893 0.956673C11.2654 0.367938 10.5189 0 9.69276 0C8.10649 0 6.82041 1.35639 6.82041 3.02933C6.82041 3.2668 6.84584 3.49798 6.89478 3.71975C4.50767 3.59338 2.39127 2.38736 0.974586 0.554531C0.727398 1.00195 0.585758 1.52239 0.585758 2.0775C0.585758 3.12854 1.09288 4.05574 1.86353 4.59902C1.40741 4.58395 0.961324 4.45402 0.562516 4.22007C0.562352 4.23276 0.562352 4.24545 0.562352 4.25819C0.562352 5.72597 1.55241 6.95039 2.86634 7.22869C2.44338 7.35001 1.99972 7.36777 1.56926 7.2806C1.93473 8.48414 2.99551 9.35995 4.25234 9.38446C3.26933 10.1969 2.03082 10.6813 0.68518 10.6813C0.453305 10.6813 0.224711 10.6669 0 10.6389C1.2711 11.4985 2.78086 12 4.40289 12C9.68609 12 12.5751 7.38385 12.5751 3.38066C12.5751 3.24926 12.5723 3.11862 12.5668 2.98872C13.1291 2.55998 13.6144 2.02894 14 1.42053Z" />
                </svg>
            ),
            padding: "px-2.75 py-3",
        },
        {
            href: "",
            icon: (
                <svg className="fill-dark group-hover:fill-white" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.2003 4.8783H7.8001V6.1733C8.1746 5.4285 9.135 4.7593 10.5777 4.7593C13.3434 4.7593 14 6.2419 14 8.9621V14H11.2V9.5816C11.2 8.0325 10.8255 7.1589 9.8721 7.1589C8.5498 7.1589 8.0003 8.1004 8.0003 9.5809V14H5.2003V4.8783ZM0.399 13.881H3.199V4.7593H0.399V13.881ZM3.6001 1.785C3.6002 2.01969 3.55366 2.25206 3.46317 2.46861C3.37268 2.68516 3.24006 2.88156 3.073 3.0464C2.73448 3.38284 2.27627 3.57116 1.799 3.57C1.32257 3.56968 0.865418 3.38184 0.5264 3.0471C0.359948 2.8817 0.22777 2.68508 0.137441 2.4685C0.047111 2.25193 0.000405392 2.01966 0 1.785C0 1.3111 0.189 0.8575 0.5271 0.5229C0.86582 0.187711 1.32317 -0.000209448 1.7997 1.75185e-07C2.2771 1.75185e-07 2.7349 0.1883 3.073 0.5229C3.4104 0.8575 3.6001 1.3111 3.6001 1.785Z" />
                </svg>
            ),
            padding: "px-2.5 py-.5 md:px-2.75 md:py-2.75",
        },
    ];

    return (
        <footer className={`mt-15 md:mt-21.5 ${isMinimal ? "bg-dark p-4.25 md:py-7.5 md:px-18.5" : "bg-[#FAFAFA] pt-11.5 px-4.25 pb-4.25 md:pt-25 md:px-18.5 md:pb-7.5"}`}>
            <div className="w-full max-w-7xl mx-auto">
                {isMinimal ? (
                    // Minimal footer for checkout/add-seller
                    <div className="flex flex-col-reverse items-center gap-7.5 md:gap-0 md:flex-row md:justify-between">
                        <p className="text-white font-Manrope font-normal text-small">
                            &copy; {new Date().getFullYear()} Company All rights reserved.
                        </p>
                        <div className="flex gap-4.25">
                            <Link to="/terms-conditions" className="font-Manrope font-normal text-small text-white">Terms & Conditions</Link>
                            <Link to="/privacy-policy" className="font-Manrope font-normal text-small text-white">Privacy Policy</Link>
                        </div>
                    </div>
                ) : (
                    // Full footer
                    <>
                        <div className="grid grid-cols-6 gap-7.5 lg:gap-4">
                            {/* Brand */}
                            <div className="order-2 lg:order-1 col-span-6 lg:col-span-2">
                                <div className="flex flex-col items-center lg:items-start gap-6">
                                    <Link to="/" className="text-dark text-heading-two font-extrabold font-Manrope">
                                        ShopHub
                                    </Link>
                                    <p className="max-w-[370px] text-medium text-light-dark font-Manrope font-normal text-center lg:text-start">
                                        Discover the power of Online Store to drive your sales growth and exceed your targets.
                                    </p>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="order-1 lg:order-2 col-span-6 lg:col-span-4">
                                <div className="grid grid-cols-4 gap-7.5 lg:gap-3.5">
                                    {/* Useful Links */}
                                    <div className="col-span-4 lg:col-span-1">
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-large text-dark capitalize font-Manrope font-semibold">Useful Links</h3>
                                            <ul className="text-medium text-light-dark font-Manrope font-normal space-y-4">
                                                {[
                                                    { label: "Home", to: "/" },
                                                    { label: "About Us", to: "/about-us" },
                                                    { label: "Partnership", to: "/seller/login" },
                                                    { label: "FAQ's", to: "/faq" },
                                                    { label: "Contact Us", to: "/contact-us" },
                                                ].map((item) => (
                                                    <li key={item.to}>
                                                        <Link to={item.to}>{item.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Company */}
                                    <div className="col-span-4 lg:col-span-1">
                                        <h3 className="text-large text-dark capitalize font-Manrope font-semibold mb-6">Company</h3>
                                        <ul className="space-y-4 text-medium text-light-dark font-Manrope font-normal">
                                            {[
                                                { label: "Terms & Conditions", to: "/terms-conditions" },
                                                { label: "Privacy Policy", to: "/privacy-policy" },
                                                { label: "Cookie Preferences", to: "/cookie-preference" },
                                            ].map((item) => (
                                                <li key={item.to}>
                                                    <Link to={item.to}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Newsletter */}
                                    <div className="col-span-4 lg:col-span-2">
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-large text-dark capitalize font-Manrope font-semibold">Subscribe Newsletter</h3>
                                            <form onSubmit={handleSubmit}>
                                                <div className="w-full lg:border border-grey rounded-xl flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between lg:pr-1.5 lg:py-1.5">
                                                    <div className="relative border border-grey rounded-xl lg:border-none">
                                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.2678 9.06104L13.0024 12.4953C12.1952 13.1282 11.0636 13.1282 10.2564 12.4953L5.95435 9.06104" stroke="#3F3F3F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z" stroke="#3F3F3F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Enter your Email address"
                                                            className="block w-full ps-10 focus:outline-none font-Manrope font-medium text-medium text-light-dark bg-transparent py-2.5 placeholder:font-Manrope placeholder:font-normal placeholder:text-medium lg:placeholder:text-small placeholder:text-light-dark"
                                                        />
                                                    </div>
                                                    <div>
                                                        <button type="submit" className="w-full lg:w-auto px-6 py-2.5 rounded-md font-Manrope font-semibold text-medium text-center black-btn">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray my-7"></div>

                        {/* Bottom Bar */}
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center lg:justify-between">
                            <p className="text-[#3F3F3F] text-[14px] leading-[24px]">
                                &copy; {new Date().getFullYear()} Company All rights reserved.
                            </p>
                            <div className="flex gap-[0.875rem]">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        to={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex items-center justify-center group ${social.padding} border border-gray rounded-md bg-white hover:bg-dark`}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </footer>
    );
}

export default Footer;