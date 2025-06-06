export async function GET(req) {
  console.log("Api route called");
  return Response.json({message: "Hello, Next.js!"});
}