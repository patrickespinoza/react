import clsx from "clsx"

export default function Video ({image, title, channel}) {

// if(!channel) {
//     return (
//         <article>
//             <p>incomplete</p>
//         </article>
//     );
// }


// const articleClassNames = "video-card" + (channel === "Marques Brownlee" ? "special" : "");

// let articleClassNames = [`video-card`]
// if(channel === "Marques Brownlee") {
//     articleClassNames.push("special")
// } se tiene que poner .join (" ")





return (   
     <article className= {clsx(`video-card`, { "special" : channel === "Marques Brownlee"})}>
        <img src={image} alt="" className="w-full rounded-[10px] object-cover aspect-[16/9]" />
        <footer className="grid gap-2 grid-cols-[2rem_1fr]">
            { channel && (
                <img src={`https://api.dicebear.com/8.x/personas/svg?seed=${channel}`} 
                 alt="" className="col-start-1 col-end-2 w-8 h-8 rounded-[50%]" />
            )}
            {
                !channel && (
                    <span>🤷🏻</span>
                )
            }
            
            
            <p className="video-card-title col-start-2 col-end-3" >{title}</p>
            <p className="video-card-channel col-start-2 col-end-3">{channel || "UNKNOWN"}</p>
        </footer>
    </article>
);
}

