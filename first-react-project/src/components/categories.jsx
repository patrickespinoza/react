export default function Categories() {
    

        const categories = ["All", "Music", "Gamming", "Cide", "Programing", "life style", "sports"];

        return ( 
         <div className="flex flex-row gap-4">
         {categories.map((category)=>{
            return (<span key={`category-${category}`} className="py-2 px-4 rounded-[20px] hover:bg-[#282828]">
                {category}
            </span>)
         })}
       </div>
    )
}