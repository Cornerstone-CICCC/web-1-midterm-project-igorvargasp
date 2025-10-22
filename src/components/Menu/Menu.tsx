

const MenuItems = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Work Experiences", href: "#" },
]



const Profile = () => {
    return (
        <div className="flex flex-col md:my-20 my-6 w-full md:items-center items-start pl-2">
            <div className="flex flex-col gap-2">
                <img src="https://avatars.githubusercontent.com/u/104315951?v=4" alt="profile" className="w-20 h-20 rounded-2xl" />
                <h1 className="text-3xl font-bold text-white">Igor Vargas</h1>
                <p className="text-md text-gray-400 text-start font-normal">Fullstack Developer</p>
            </div>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className="flex flex-col md:my-20 my-6 w-full md:items-center items-start pl-2">
            <ul className="flex flex-col gap-4">
                {MenuItems.map((item, index) => (
                    <li key={index} className="text-gray-400 text-xl font-bold hover:text-white">
                        <a href={item.href} className="block py-2 ">{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export const Menu = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <div className={`${isMobile ? "flex flex-col w-full items-start h-auto" : "w-1/5 flex-col items-center h-full hidden md:flex"}`}>
            <Profile />
            <Sidebar />
        </div>
    )
}