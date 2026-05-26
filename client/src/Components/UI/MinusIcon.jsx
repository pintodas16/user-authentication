function MinusIcon({ height, width }) {
    return (
        <svg
            className={`h-${height ? height : "3.5"} w-${width ? width : "4"}`}
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 1H1"
                stroke="#121212"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default MinusIcon;
