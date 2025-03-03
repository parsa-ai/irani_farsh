import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FloatingInput({ title, text, inputType = 'text', children, ...rest }) {
    const [isOpenEye, setIsOpenEye] = useState(false);
    const isPassword = inputType === 'password';

    return (
        <div className="relative w-full">
            <input
                type={isPassword && isOpenEye ? 'text' : inputType}
                id={title}
                className={`peer w-full border border-neutral6 rounded-lg px-8 pt-4 pb-3 text-neutral11 
                focus:border-primary focus:ring-1 focus:ring-primary outline-none ${!isOpenEye ? 'font-sans' :''}`}
                placeholder=" "
                {...rest}
            />
            {isPassword && (
                <button
                    type="button"
                    className="absolute left-3 top-[18px] text-gray-500 peer-focus:text-primary"
                    onClick={() => setIsOpenEye(!isOpenEye)}
                >
                    {isOpenEye ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
            )}
            {children}
            <label
                htmlFor={title}
                className="absolute right-10 top-2 text-neutral10 text-sm transition-all 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary peer-focus:bg-white px-1
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-neutral10 peer-not-placeholder-shown:bg-white"
            >
                {text}
            </label>
        </div>
    );
}
