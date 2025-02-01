"use client";
import { Disclosure , DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
const navigation = [
    { name: 'Home', href: '#home', current: false },
    { name: 'About', href: '#about', current: false},
    { name: 'TechStack', href: '#techstack', current: false},
    { name: 'Experiences', href: '#experience', current: false },
    { name: 'Projects', href: '#projects', current: false },
  ];

const socialLinks = [
    { name: 'Resume', href: 'https://drive.google.com/file/d/19LP316pPfmiLyzBANi_x4dGrX4fWcJo1/view?usp=sharing', icon: '/images/social/resume-icon.png' },
    { name: 'GitHub', href: 'https://github.com/Lilsofie', icon: '/images/social/github-icon.png' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/katehuang-', icon: '/images/social/linkedin-icon.png' },
  ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const handleScroll = (href, closeMenu) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (closeMenu) closeMenu(); 
  };
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-slate-600 sm:bg-opacity-75 lg:bg-opacity-60">
     {({ open,close }) => (
       <>
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
           <div className="relative flex h-16 items-bottom justify-between">
             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
               {/* Mobile menu button */}
               <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                 <span className="absolute -inset-0.5" />
                 <span className="sr-only">Open main menu</span>
                 {open ? (
                   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                 ) : (
                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                 )}
               </DisclosureButton>
             </div>
             
             {/* Desktop Navigation */}
             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               <div className="hidden sm:ml-6 sm:block">
                 <div className="flex space-x-4 pt-2">
                   {navigation.map((item) => (
                     <a
                       key={item.name}
                       href={item.href}
                       onClick={(e) => {
                         e.preventDefault();
                         handleScroll(item.href);
                       }}
                       aria-current={item.current ? 'page' : undefined}
                       className={classNames(
                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-blend-darken hover:text-white',
                         'rounded-md px-3 py-2 text-lg font-medium left-0'
                       )}
                     >
                       {item.name}
                     </a>
                   ))}
                 </div>
               </div>
             </div>

             {/* Social Links */}
             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <div className="flex space-x-4 ml-auto">
                 {socialLinks.map((social) => (
                   <a
                     key={social.name}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-300 hover:scale-125"
                   >
                     <Image 
                       src={social.icon}    
                       alt={`${social.name} icon`}  
                       width={social.name === 'LinkedIn' ? 36 : 38} 
                       height={social.name === 'LinkedIn' ? 36 : 38}  
                     />
                   </a>
                 ))}
               </div>
             </div>
           </div>
         </div>

         {/* Mobile Navigation */}
         <DisclosurePanel className="sm:hidden">
           <div className="space-y-1 px-2 pb-3 pt-2">
             {navigation.map((item) => (
               <DisclosureButton
                 key={item.name}
                 as="a"
                 href={item.href}
                 onClick={(e) => {
                   e.preventDefault();
                   handleScroll(item.href,close);

                 }}
                 className={classNames(
                   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                   'block rounded-md px-3 py-2 text-base font-medium'
                 )}
               >
                 {item.name}
               </DisclosureButton>
             ))}
           </div>
         </DisclosurePanel>
       </>
     )}
   </Disclosure>
  )
}
