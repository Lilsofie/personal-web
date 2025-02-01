import Exp from "./Exp"

export default function Experiences(){
    return (
        <section id="experience" className="min-h-screen scroll-mt-20 sm:px-8 md:px-16 lg:px-32">
            <div className="flex flex-col items-center py-10"> 
                <h2 className="w-full text-center text-3xl font-bold lg:mb-8">EXPERIENCES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl scale-90 md:scale-95 lg:scale-100">
                <Exp
                        image="/images/experience/htv.jpeg"
                        title="Web Developer @ Hack the Valley"
                        description=""

                    />
                <Exp
                        image="/images/experience/lotus.avif"
                        title="Cyber Security Intern, IT Infrastructure @ Lotus Pharmecuitical Co Ltd."
                        description=""
                    />
                
                <Exp
                        image="/images/experience/namun.png"
                        title="Crisis Analyst @ NAMUN "
                        description=""
                    />

                </div>
            </div>
        </section>
    )
}