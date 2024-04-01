function Header(){
    return(
        <>
            <header className="bg-white container mx-auto">
                <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"></img>
                        </a>
                    </div>
                    <div className="flex mx-auto items-center justify-between">
                        <button>Element 1</button>
                        <button>Element 1</button>
                        <button>Element 1</button>
                    </div>
                </nav>    
            </header>
            <div className="border-b"></div>
        </>
    )
}

export default Header;