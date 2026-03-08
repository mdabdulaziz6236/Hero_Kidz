'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, className, children }) => {
    const path = usePathname();

    // 1. Create a simple logic check
    const isActive = path === href || (href !== '/' && path.startsWith(href));

    return (
        <Link 
            className={`${className} ${isActive ? 'text-primary' : ''} md:text-[16px] lg:text-[18px] font-medium`} 
            href={href}
        >
            {children}
        </Link>
    );
}

export default Navlink;