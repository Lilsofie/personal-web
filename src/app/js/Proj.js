export default function Proj({ image, title, description, link }){
    return ( 
        <div className="w-full mx-auto bg-current border border-gray-400 p-2 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-3 hover:shadow-lg flex flex-col min-h-full">
            <a href={link}>
                <img className="rounded-lg h-64 w-full object-cover" src={image} alt={title} />
            </a>
            <div className="p-3 flex flex-col flex-grow ">
                <h5 className="mb-1 text-lg font-bold tracking-tight text-slate-700">{title}</h5>
                <p className=" text-sm text-slate-700 font-normal flex-grow break-words overflow-visible">{description}</p> 
                {/* <a href="#" className="inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                    Read more
                    <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}
            </div>
        </div>
                
    )
}