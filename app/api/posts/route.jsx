export async function GET(req) {
  return Response.json([
    {
      id: 1,
      title: 'Post 1',
      body: 'This is the body of post 1',
      category: 'Category 1'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'This is the body of post 2',
      category: 'Category 2'
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'This is the body of post 3',
      category: 'Category 3'
    }
  ]);
}

export async function POST(req) {
  const body = await req.json();
  return Response.json(body);
}