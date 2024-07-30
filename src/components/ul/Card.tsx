import { useNavigate } from "react-router-dom";
import { TProduct } from "../../pages/Products/Products";
import { useAppDispatch } from "../../redux/hooks";
import { addProduct } from "../../redux/features/productCartSlice";

const Card = ({
  title,
  image,
  price,
  rating,
  category,
  description,
  _id,
  quantity,
  isDeleted,
}: TProduct) => {
  //   const { title, image, price, rating } = product.product;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const data = {
    title,
    image,
    price,
    rating,
    category,
    description,
    _id,
    quantity,
    isDeleted,
  };

  const handleCart = () => {
    dispatch(addProduct(data));
    navigate("/cart");
  };

  return (
    <div
      className={`card card-compact bg-[#FFFFEC] w-full text-black ${
        description ? "" : "shadow-xl"
      }`}
    >
      <figure>
        <img src={image} className="mx-4 border rounded-md" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Price: {price}</h2>
        {category ? <h2 className="card-title">Category: {category}</h2> : ""}

        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#597E52]"
            defaultChecked={rating === 1 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#597E52]"
            defaultChecked={rating === 2 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#597E52]"
            defaultChecked={rating === 3 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#597E52]"
            defaultChecked={rating === 4 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#597E52]"
            defaultChecked={rating === 5 ? true : false}
          />
        </div>
        {description ? <p>{description}</p> : ""}
        <div className="card-actions justify-end">
          {description ? (
            ""
          ) : (
            <button
              onClick={() => navigate(`/product/${_id}`)}
              className="btn text-xl font-normal bg-black text-white hover:bg-[#597E52]"
            >
              See Details
            </button>
          )}
          <button
            onClick={handleCart}
            className="btn text-xl font-normal bg-[#597E52] text-white hover:bg-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
