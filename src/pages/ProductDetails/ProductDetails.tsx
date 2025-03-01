import { useParams } from "react-router-dom";
import productApi from "../../redux/features/products/productApi";
import { toast } from "react-toastify";
import Card from "../../components/ul/Card";

const ProductDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = productApi.useGetSingleProductQuery(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (isError) {
    toast.error("Something went wrong!");
  }

  return (
    <div>
      <h1 className="p-8 text-5xl text-[#111111] font-bold">Product Details</h1>
      <div className="mt-4 mb-12">
        <Card
          title={data?.data?.title}
          image={data?.data?.image}
          price={data?.data?.price}
          rating={data?.data?.rating}
          key={data?.data?._id}
          _id={data?.data?._id}
          category={data?.data?.category}
          description={data?.data?.description}
          quantity={data?.data?.quantity}
          isDeleted={data?.data?.isDeleted}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
