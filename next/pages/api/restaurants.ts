export async function fetchRestaurants(path: string) {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const respJSON = await resp.json();
    return respJSON.data
  } catch (error) {
    console.log("ERROR---", error)
    return "error"
  }
}
