import Head from 'next/head'
import {AiOutlineGlobal} from "react-icons/ai"
import {FaUserAlt, FaUserPlus} from "react-icons/fa";

const Home = () => {
    return (
        <div className="w-full h-full">
            <Head>
                <title>Getir</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>

            <nav className="w-full h-11 flex justify-between bg-violet-800 text-gray-200 text-sm px-24">
                <div className="flex items-end pt-1 font-semibold gap-x-px">
                    <a href="#" className="h-full flex items-center bg-violet-700 px-4 rounded-t-md text-yellow-400">
                        getir
                    </a>
                    <a href="#" className="h-full flex items-center hover:bg-violet-700 px-4 rounded-t-md transition-colors">
                        getiryemek
                    </a>
                    <a href="#" className="h-full flex items-center hover:bg-violet-700 px-4 rounded-t-md transition-colors">
                        getirbüyük
                    </a>
                    <a href="#" className="h-full flex items-center hover:bg-violet-700 px-4 rounded-t-md transition-colors">
                        getirsu
                    </a>
                </div>
                <div className="flex items-center gap-x-10">
                    <a href="#" className="flex items-center gap-x-3 hover:text-white transition-colors">
                        <AiOutlineGlobal size={20}/>
                        Türkçe (TR)
                    </a>
                    <a href="#" className="flex items-center gap-x-3 hover:text-white transition-colors">
                        <FaUserAlt size={16}/>
                        Giriş Yap
                    </a>
                    <a href="#" className="flex items-center gap-x-3 hover:text-white transition-colors">
                        <FaUserPlus size={20}/>
                        Kayıt Ol
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Home;
