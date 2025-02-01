export default function Exp({ image, title, link }){
    return ( 
        <div className="w-full mx-auto bg-current border border-gray-400 p-2 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-3 hover:shadow-lg flex flex-col min-h-full">
          
            <img className="rounded-lg h-64 w-full object-cover" src={image} alt={title} />
           
            <div className="p-3">
                <h5 className=" text-lg font-bold tracking-tight text-slate-700">{title}</h5>
            </div>
        </div>
                
    )
}