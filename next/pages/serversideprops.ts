import { fetchRestaurants } from "./api/restaurants";
const blog = ({}) => {

blog.getInitialProps = async (_ctx: any) => {
    try {
      const d = await fetchRestaurants('/categories');
      console.log("data in index---", d);
      return { restaurants: d };
    } catch (error) {
      return { error };
    }
  };
}
export default blog;