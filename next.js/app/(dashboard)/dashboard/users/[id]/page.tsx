import React from 'react'

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    return (
        <div>
            Welcome user ID #{id}
        </div>
    )
}

export default UserDetails
