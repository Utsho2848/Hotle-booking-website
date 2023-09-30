import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const BecomeAHost = () => {
    const { user } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)



    return (
        <>

            <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
                Request Sent, wait for admin approval
            </div>

        </>
    )
}

export default BecomeAHost