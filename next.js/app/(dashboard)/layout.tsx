import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            Local Navbar
            {children}
        </div>
    )
}

export default DashboardLayout
