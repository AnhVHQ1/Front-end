import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  console.log(data);
  const response = await axios.get(
    `${base_url}product?${
      data?.category ? `category=${data?.category}&&` : ""
    }${data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""}${
      data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""
    }${data?.minFat ? `nutrition.fat[gte]=${data?.minFat}&&` : ""}${
      data?.maxFat ? `nutrition.fat[lte]=${data?.maxFat}&&` : ""
    }${
      data?.minSaturates
        ? `nutrition.saturatedFat[gte]=${data?.minSaturates}&&`
        : ""
    }${
      data?.maxSaturates
        ? `nutrition.saturatedFat[lte]=${data?.maxSaturates}&&`
        : ""
    }${data?.minSugar ? `nutrition.sugar[gte]=${data?.minSugar}&&` : ""}${
      data?.maxSugar ? `nutrition.sugar[lte]=${data?.maxSugar}&&` : ""
    }${data?.minSalt ? `nutrition.salt[gte]=${data?.minSalt}&&` : ""}${
      data?.maxSalt ? `nutrition.salt[lte]=${data?.maxSalt}&&` : ""
    }${data?.sort ? `sort=${data?.sort}&&` : ""}`
  );
  if (response.data) {
    return response.data;
  }
};
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};
const searchProduct = async (data) => {
  let url = `${base_url}product/search/${data?.key}?`;
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getAllCat = async () => {
  const response = await axios.get(`${base_url}category`, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
  searchProduct,
  getAllCat,
};
