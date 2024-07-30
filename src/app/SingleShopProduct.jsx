import { useParams } from "react-router-dom";
import MenuBar from "../components/MenuBar";
function SingleShopProduct() {
  const { id } = useParams();

  console.log("ID => ", id);

  return (
    <div>
      <MenuBar />
      <h1>Single Shop Product Page</h1>

      {id === "men" && (
        <div>
          <h1>Men Products</h1>
        </div>
      )}

      {id === "women" && (
        <div>
          <h1>WoMen Products</h1>
        </div>
      )}
    </div>
  );
}

export default SingleShopProduct;
