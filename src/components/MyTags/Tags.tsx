export default function Tags(){
    return (
        <div className="animate-appearance-in relative flex justify-start gap-2 whitespace-nowrap overflow-x-auto pb-[10px] pl-[1rem] 2xl:pl-0 xl:py-1 xl:justify-end">
            <button className="transition duration-custom border-2 bg-blue-bg rounded-md border-blue-border hover:bg-blue-hover">
                <p className="text-xsm text-[#1c3e5f] dark:text-white px-2 opacity-70">Dev</p>
            </button>
            <button className="transition duration-custom border-2 bg-orange-bg rounded-md border-orange-border hover:bg-orange-hover">
                <p className="text-xsm text-[#4d2f1c] dark:text-white px-2 opacity-70">Tec Enthusiast</p>
            </button>
            <button className="transition duration-custom border-2 bg-green-bg rounded-md border-green-border hover:bg-green-hover">
                <p className="text-xsm text-[#133a23] dark:text-white px-2 opacity-70">Explorador</p>
            </button>
            <button className="transition duration-custom border-2 bg-pink-bg rounded-md border-pink-border hover:bg-pink-hover">
                <p className="text-xsm text-[#881f5c] dark:text-white px-2 opacity-70">Gamer</p>
            </button>
            <button className="transition duration-custom border-2 bg-gray-bg rounded-md border-gray-border hover:bg-gray-hover">
                <p className="text-xsm text-[#14181b] dark:text-white px-2 opacity-70">Mestre do Xadrez</p>
            </button>
        </div>
    )
}