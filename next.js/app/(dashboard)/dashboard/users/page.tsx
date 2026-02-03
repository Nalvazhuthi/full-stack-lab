import Link from 'next/link'
import React from 'react'

const Users = async () => {
    // FETCHING API
    // const response = await fetch("")
    // if (!response.ok) throw new Error("Failed to fetch")
    // const albums = response.json()
    return (
        <div>
            Welcome to Users page

            <ul>
                <li><Link href={"/dashboard/users/1"}>User 1</Link></li>
                <li><Link href={"/dashboard/users/2"}>User 2</Link></li>
                <li><Link href={"/dashboard/users/3"}>User 3</Link></li>
                <li><Link href={"/dashboard/users/4"}>User 4</Link></li>
            </ul>
        </div>
    )
}

export default Users
