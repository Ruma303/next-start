export default function layout({ children }) {
    return (
        <div className="flex flex-col items-center py-4 w-screen">
            <h1 className="text-2xl text-black bg-white w-screen text-center py-2">
                Layout User</h1>
                {children}
        </div>
    )
}
