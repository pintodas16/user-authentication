export default function InputError({message, className}) {

    return message ? (
        <span className={`${className} font-Manrope font-normal text-error-text text-error-red`}>
            { message }
        </span>
    ) : null;
};

