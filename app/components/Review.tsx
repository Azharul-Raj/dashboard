import Image from 'next/image'
import React from 'react'

import user1 from '../../assets/course/user1.png'
import user2 from '../../assets/course/user2.png'
import { CommentForm } from './form/CommentForm'
export default function Review() {
    return (
        <div className='bg-white p-4 mt-1'>
            <h4 className='font-semibold py-4'>Reviews</h4>
            {/* Review Part */}
            {[1, 2].map(d => (
                <div key={d} className="py-2">
                    <div className="flex items-center">
                        <Image width={40} className='' src={d==2?user1:user2} alt='user-image' />
                        <div className="ml-2">
                            <h5 className='font-semibold'>{d==2?'Arlene McCoy':'Kristin Watson'}</h5>
                            <p className='text-sm'>about an hour ago</p>
                        </div>
                    </div>
                    <p className='ml-10 pt-2 text-[16px]'>Access to IBM Cloud modelling what is I was looking for and Aaron got me the solution.</p>
                </div>
            ))}
            {/* COMMENT */}
            <CommentForm />
        </div>
    )
}
