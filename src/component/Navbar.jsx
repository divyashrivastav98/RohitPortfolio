export default function Navbar() {
    return(
        <>
         <nav className="flex justify-end gap-4 p-4 ">
                <a className="text-white font-bold hover:bg-amber-200 hover:text-black p-2 rounded" href="/Dashboard"><li>Dashboard</li></a>
                <a className="text-white font-bold hover:bg-amber-200 hover:text-black p-2 rounded" href="/Project"><li>Project</li></a>
                <a className="text-white font-bold hover:bg-amber-200 hover:text-black p-2 rounded" href="/Contact"><li>Contact</li></a>
            </nav>
        </>
    )
}