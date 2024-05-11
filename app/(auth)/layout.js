export default function layout({ children }) {
    return (
        <div className="flex flex-col gap-2 items-center py-4 w-screen bg-slate-500 h-48">
            <h1 className="text-2xl bg-violet-400 w-screen text-center py-2">
                No Layout Auth</h1>
            {children}
        </div >
    )
}
