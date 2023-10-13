import json from "./home-mock.json";

export async function GET() {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(json);
    }, 3000);
  });
  return Response.json(response);
}
