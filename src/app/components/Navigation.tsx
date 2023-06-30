import Link from "next/link"

export const Navigation = () => {
    return (
        <div>
            <nav className="bg-white">
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">
                    <Link href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
                        Aturcara
                    </Link>
                    <Link href="/borang" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
                        Borang Baju
                    </Link>
                    <Link href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
                        Markah
                    </Link>        
                    <Link href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
                        Aduan
                    </Link>
                </div>
            </nav>
        </div>
        )
    }