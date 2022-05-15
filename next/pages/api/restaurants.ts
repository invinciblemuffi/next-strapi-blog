export async function fetchRestaurants(path: string) {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // const resp= await fetch('http://localhost:1337/api/categories')
    console.log("resp",resp)
    const respJSON = await resp.json();
    return respJSON.data
  } catch (error) {
    console.log("ERROR---", error)
    return "error"
  }
}
