export default function Doc({ params }) {
    return (
        <div className="flex flex-col items-center py-4">
            <h1 className="text-4xl">Docs</h1>
            <p>Required routes: {params.doc}</p>
            <p>Total wildcards: {params.doc?.length}</p>
            <p>Wildcards:</p>
            <ul>{params.doc?.map((wildcard, index) => (
                <li key={index}>{index + 1}. /{wildcard}</li>
            ))}
            </ul>
        </div>
    )
}

