function Container({children ,className}) {
  return (
    <div className={`w-full flex justify-center items-center ${className}`} >
        <div className="w-[85%]">
          {children}
        </div>
    </div>
  )
}

export default Container