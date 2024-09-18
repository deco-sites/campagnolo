function HeaderPsi() {
    return (
        <header className="flex h-24 w-full items-center justify-between fixed bg-white px-16 top-0 left-0 z-20">
            <div className="blur-none">
                <div className="bg-white p-16 rounded-br-full rounded-bl-full max-w-72">
                    <p className="font-black text-2xl text-center">
                        Fernanda Campagnolo
                    </p>
                </div>
            </div>
            <div className="blur-none">  
                <div>
                    <nav className="flex items-center gap-4">
                        <a href="/">Sobre</a>
                        <a href="/">Serviços</a>
                        <a className="bg-black p-4 text-white rounded-md font-bold" href="/">Entre em contato</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderPsi;