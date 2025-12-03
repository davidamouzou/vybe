const Button = ({type, children}: { type?: 'submit' | 'button' | 'reset', children: React.ReactNode }) => {
    return (
        <button type={type}
                className={`mt-4 px-5 py-2 rounded-full bg-red-500 text-white transition-colors duration-300 hover:bg-red-600`}>
            {children}
        </button>
    )
}

export default Button;