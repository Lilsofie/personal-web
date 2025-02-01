import Proj from "./Proj"

export default function Projects(){
    return (
        <section id="projects" className="min-h-screen scroll-mt-20 sm:px-8 md:px-16 lg:px-32">
            <div className="flex flex-col items-center py-10" > 
                <h2 className="w-full text-center text-3xl font-bold lg:mb-8">PROJECTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl scale-90 md:scale-95 lg:scale-100">
                <Proj
                        image="/images/project/analysis-tool.png"
                        title="IP, Domain & URL Analysis Tool"
                        description="Displays all information you need to investigate a cybersecurity incident"
                        link="https://github.com/Lilsofie/AnalysisTool"
                    />
                <Proj
                        image="/images/project/monitoring-tool.png"
                        title="System Monitoring Tool "
                        description="Reports different metrics of the utilization of a given system"
                        link="https://github.com/Lilsofie/System-Monitoring-Tool"
                    />
                <Proj
                        image="/images/project/eventful.png"
                        title="Eventful"
                        description="Simpliflies your event planning process"
                        link="https://github.com/conrad-mo/Eventful"
                    />
                <Proj
                        image="/images/project/search-engine.png"
                        title="Literature Search Engine"
                        description="Searches up literature articles efficiently"
                        link="https://www.youtube.com/watch?v=L-2fCBj8h5w"
                    />
                <Proj
                        image="/images/project/ace-your-day.png"
                        title="Ace Your Day"
                        description="Keeps your life Efficient"
                        link="https://github.com/Lilsofie/Ace-Your-Day"
                    />
                </div>
            </div>
        </section>
    )
}