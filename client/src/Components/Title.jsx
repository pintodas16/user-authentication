function Title({ title, content }) {
    return (
        <div>
            <h5 className="font-Manrope font-bold capitalize text-2xl text-center">
                {title}
            </h5>
            <p className="font-Manrope font-normal text-medium text-light-dark text-center mt-4.25 max-w-md mx-auto">
                {content}
            </p>
        </div>
    );
}

export default Title;
