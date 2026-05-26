function Checkbox() {
    return (
        <div className="flex gap-2.5 items-center">
            <input
                id="remember"
                type="checkbox"
                // className="appearance-none w-4 h-4 rounded-full border border-light-dark checked:bg-dark checked:border-none cursor-pointer transition-all duration-300 ease-in-out"
                className="w-4 h-4 rounded-lg cursor-pointer accent-black"
            />
            <label
                className="font-Manrope font-normal text-small text-light-dark cursor-pointer"
                htmlFor="remember"
            >
                Remember Me
            </label>
        </div>
    );
}

export default Checkbox;
