import React from 'react'

const layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center py-4 w-screen">
            <h1 className="text-2xl text-white bg-blue-600 w-screen text-center py-2">
                Layout Docs</h1>
                {children}
        </div>
    )
}

export default layout