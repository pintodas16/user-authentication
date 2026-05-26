function PlusIcon({ height, width }) {
    return (
        <svg
            className={`h-${height ? height : "3.5"} w-${
                width ? width : "3.5"
            }`}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 7H1"
                stroke="#121212"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 1L7 13"
                stroke="#121212"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default PlusIcon;
