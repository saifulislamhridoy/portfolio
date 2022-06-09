import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from '../node_modules/next/link';
import { useRouter } from '../node_modules/next/router';

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}>=({activeItem,name,route,setActiveItem})=>{
    return (
            activeItem !== name ? (
                <Link href={route}>
                    <a>
                        <span className='hover:text-green' onClick={()=>setActiveItem(name)}>{name}</span>
                    </a>
                </Link>
            ):null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    const {pathname}=useRouter()

    useEffect(()=>{
        if(pathname === '/') setActiveItem('About')
        if(pathname === '/Projects') setActiveItem('Projects')
        if(pathname === '/Resume') setActiveItem('Resume')
    },[])
    return (
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='font-bold text-green border-b-4 border-green md:text-2xl'>{activeItem}</span>
            <div className=' text-lg flex space-x-5'>
             <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'></NavItem>
             <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/Projects'></NavItem>
             <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/Resume'></NavItem>
            </div>
        </div>
    );
};

export default Navbar;