import StackIcon from "tech-stack-icons";
import Image from 'next/image';

export default function TechStack() {
 
  return (
    <section id="techstack" className="min-h-screen scroll-mt-20 px-4 py-12 md:p-28">
      <h2 className="w-full text-center text-2xl md:text-3xl font-bold mb-8">TECH STACK</h2>
      <div className="bg-gray-300 bg-opacity-80 rounded-2xl p-6 md:p-12 max-w-2xl mx-auto shadow-md text-center grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        <StackIcon name="java" />
        <StackIcon name="python" />
        <StackIcon name="azure" />
        <StackIcon name="reactjs" />
        <StackIcon name="tailwindcss" />
        
        <StackIcon name="docker" />
        <StackIcon name="figma" />

        <Image
          src="/images/neo4j.png"
          alt="Neo4j"
          width={50}
          height={50}
          className="rounded-lg w-80 md:w-100 lg:w-200"
        />
      </div>
     </section>  
  );
}