import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function FavDetailPage() {
  const { productId } = useParams(); // Get the productId from the URL
  const [searchParams] = useSearchParams(); // Get query parameters from the URL
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <p className="font-bold">Your favourite post is {searchParams.get("q")}.</p>
      <p className="font-bold">Post ID is {productId}.</p>
      <p className="font-bold">Size is {searchParams.get("size")}</p>
    </div>
  );
}

export default FavDetailPage;
