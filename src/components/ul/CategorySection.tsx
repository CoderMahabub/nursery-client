import { toast } from "react-toastify";
import categoryApi from "../../redux/features/products/categoryApi";

const CategorySection = () => {
  const { data, isError } = categoryApi.useGetAllCategoriesQuery(undefined);

  if (isError) {
    toast("Something went wrong!");
  }
  return (
    <div className="text-2xl bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#597E52]">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data[0]?.categories?.map((category: string) => (
          <div className="bg-[#F1E4C3] text-black py-2 px-4 rounded-md">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
