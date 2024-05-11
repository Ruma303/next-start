export default function UserId({ params }) {
  return (
    <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl">
            User {params.userId}
        </h1>
    </div>
  )
}