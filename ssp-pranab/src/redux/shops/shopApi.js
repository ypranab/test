import { api } from "../api/apiSlice";

const shopApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getShops: builder.query({
      query: () => "/api/ShopPage/getshoplist",
    }),
    getSingleShop: builder.query({
      query: (id) => `/api/ShopPage/GetShopCache/${id}`,
    }),
  }),
});

export const { useGetShopsQuery, useGetSingleShopQuery } = shopApi;
