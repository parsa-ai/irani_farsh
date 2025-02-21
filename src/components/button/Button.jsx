export default function Button({
    ColorBackground = 'bg-white',
    borderColor = 'border-primary',
    borderSize = 'border',
    color = 'text-primary',
    size = 'xl',
    children,
    className,
    isIcon = false,
    ...rest
}) {
    const sizes = {
        xl: isIcon ? 'h-14 w-14 text-lg px-4 rounded-xl' : 'h-14 text-lg px-4 rounded-xl',
        lg: isIcon ? 'h-12 w-12 text-lg px-4 rounded-xl' : 'h-12 text-lg px-4 rounded-xl',
        md: isIcon ? 'h-10 w-10 text-sm px-2 rounded-xl font-bold' : 'h-10 text-sm px-2 rounded-xl font-bold',
        sm: isIcon ? 'h-8 w-8 text-sm px-2 rounded-lg' : 'h-8 text-sm px-2 rounded-lg',
    };
    return (
        <button
            className={`${sizes[size]} ${borderSize} ${borderColor} ${color} ${ColorBackground}  flex transition-colors justify-center items-center gap-2 cursor-pointer  ${className || 'hover:text-white hover:bg-primary'}`}
            {...rest}
        >
            {children}
        </button>
    );
}
