import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link className='flex items-center gap-1 ' href={'/'}>
            <Image alt='logo-heroKidz' className="w-auto h-auto" width={50} height={40} src={'/assets/logo.png'} ></Image>
            <h3 className='text-xl font-bold'>Hero <span className='text-primary'>Kidz</span></h3>
        </Link>
    );
}

export default Logo;
