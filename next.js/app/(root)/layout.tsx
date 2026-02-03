import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>Global Nav Bar</div>
            {children}
        </div>
    )
}

export default RootLayout
