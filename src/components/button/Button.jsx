
function Button({ backgrondColor = 'transparent', borderColor = 'border-primary', borderSize = 'border', color = 'text-primary', size = 'xl',children }) {
    let sizes = {
        xl: 'h-14 text-lg px-4 rounded-xl',
        lg: 'h-12 text-lg px-4 rounded-xl',
        md: 'h-10 text-sm px-2 rounded-xl font-bold',
        sm: 'h-8  text-sm px-2 rounded-lg',
    }
    return (
        <button className={`${sizes[size]} ${borderSize} ${borderColor} ${color} ${backgrondColor} flex justify-center items-center gap-2  `}>{children}</button>
    )
}

export default Button