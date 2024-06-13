import YouTube from "./YouTubeLogo";

function NavBar () {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
          <div className="flex flex-row items-center gap-[0.5rem] pl-4">
            <YouTube height="1.8rem" width="3rem"/>
            <span>YouTube</span>
          </div>
          <div >
            <input className="w-full p-[0.5rem_1rem] border-[1px_solid_#282828] rounded-2xl bg-transparent text-[#f0f0f0]" type="text" placeholder="Search" />
          </div>
          <div className="flex justify-end">
            <img className="w-12 h-12 rounded-[50%]" src="https://api.dicebear.com/8.x/personas/svg?seed=Spooky" alt="user" />
          </div>  
        </nav>
    );
}
export default NavBar;