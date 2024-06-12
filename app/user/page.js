export const metadata = {
    //title: "Layout Metadata",
    description: "This is the layout metadata",
    title: {
        absolute: "Absolute meta",
    }
};

export default function User() {
    return (
        <div className="flex flex-col items-center py-4">
            <h1 className="text-4xl">Componente User</h1>
        </div>
    )
}