export async function fetchRestaurants(path: string) {
  console.log("api url",process.env.NEXT_PUBLIC_API_URL)
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checking url",resp.headers)
    const respJSON = await resp.json();
    return respJSON.data
  } catch (error) {
    console.log("ERROR---", error)
    return "error"
  }
}
