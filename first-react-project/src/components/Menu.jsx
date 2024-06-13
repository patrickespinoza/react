function Menu () {

const menuItems = [
    {icon:"🏡", text: "Home"},
    {icon:"🩳", text: "Shorts"},
    {icon:"🎮", text: "Subscriptions"},
    {icon:"⭐️", text: "Favoritos"}
]

return (
<aside className="col-start-1 col-end-2 row-start-2 row-end-3 py-0 px-4">
  {/* <div className="menu-item">
    <span>🏡</span>
    <span>Home</span>
  </div> */}
 {
    menuItems.map((item)=> {
      return (
        <div key={`menu-item-${item.text}`} className="p-4 rounded-[20px] flex flex-row gap-2 items-center hover:bg-[#282828]">
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      )  
    })
 }
</aside>
)}
export default Menu