

import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <div className="flex gap-3 items-center justify-center">
                <span className="">
                    <svg
                        className="h-12 w-[2.625rem] fill-dark"
                        viewBox="0 0 74 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7.75369 31.0684L37 31.0684L33.1912 37.7748C26.3897 49.6821 13.739 57.0729 0 57.0729L0 62H33.4632C44.3456 62 54.4118 55.7042 59.1728 45.713L66.2463 30.9316H37L40.8088 24.2252C47.6103 12.3179 60.261 4.92714 74 4.92714V0L40.5368 0C29.6544 0 19.5882 6.2958 14.8272 16.287L7.75369 31.0684Z" />
                    </svg>
                </span>
                <h5 className="font-Manrope font-bold text-2.5xl">ShopHub</h5>
            </div>
        </Link>
    );
}

export default Logo;
