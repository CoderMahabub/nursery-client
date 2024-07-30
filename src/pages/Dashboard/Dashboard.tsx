/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import productApi from "../../redux/features/products/productApi";
import { toast } from "react-toastify";
import { TProduct } from "../Products/Products";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "../../components/ul/Modal";
import ProductModal from "../../components/ul/ProductModal";

const Dashboard = () => {
  const [id, setId] = useState("");

  const { data, isLoading } = productApi.useGetAllProductsQuery(undefined);
  const [deleteProduct] = productApi.useDeleteProductMutation();
  const [createProduct] = productApi.useAddProductMutation();
  const [editProduct] = productApi.useUpdateProductMutation();

  const handlerDelete = (productId: string) => {
    setId(productId);
    (document.getElementById("my_modal_1") as HTMLDialogElement).showModal();
  };

  const handlerAddProduct = () => {
    setId("");
    (document.getElementById("my_modal_2") as HTMLDialogElement).showModal();
  };

  const handlerUpdate = (productId: string) => {
    setId(productId);
    (document.getElementById("my_modal_2") as HTMLDialogElement).showModal();
  };

  const confirmDelete = async () => {
    try {
      const res = await deleteProduct(id).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const addProduct = async (data: TProduct) => {
    try {
      const res = await createProduct(data).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const updateProduct = async (data: TProduct) => {
    try {
      const res = await editProduct(data).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  return (
    <div className="pt-6">
      <h1 className="flex justify-center text-[#111111] sm:text-3xl text-xl font-bold p-2">
        Product and Category Management
      </h1>

      <div className="sm:container">
        <div className="flex justify-end mt-4">
          <button
            onClick={handlerAddProduct}
            className="btn bg-[#597E52] text-white sm:text-xl font-bold hover:bg-black"
          >
            Add Product
          </button>
        </div>

        {/* table*/}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-1xl text-black font-extrabold">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-black">
                {/* row 1 */}
                {data?.data?.map((product: TProduct) => (
                  <tr key={product?._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox bg-white" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={product?.image} alt={product?.title} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{product.title}</td>
                    <td>$: {product.price}</td>
                    <td>{product.category}</td>
                    <th>
                      <button
                        onClick={() => handlerUpdate(product?._id)}
                        className="btn bg-[#597E52] text-white"
                      >
                        <FaEdit />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handlerDelete(product?._id)}
                        className="btn text-white btn-error"
                      >
                        <FaTrash />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <Modal confirmDelete={confirmDelete} />
      <ProductModal
        updateProduct={updateProduct}
        productId={id}
        setId={setId}
        addProduct={addProduct}
      />
    </div>
  );
};

export default Dashboard;
