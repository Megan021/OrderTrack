import CreateProductModel from "@/components/ForProduct/CreateProductModel";
import ProductList from "@/components/ForProduct/ProductList";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="font-semibold text-3xl">Product</h1>

      <div className="my-8 mb-14 flex justify-between">
        <div className="flex items-center justify-between w-96 border border-gray-300 rounded-2xl px-4">
          <input
            type="search"
            placeholder="Search Product..."
            className="py-3 w-[90%] focus:outline-none"
          //   value={searchTerm}
          //   onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state
          />
          <button>
            <IoSearchOutline className="text-gray-600 text-xl" />
          </button>
        </div>

        <div>
          <button onClick={() => setIsModalOpen(true)} className="p-3 px-6 border border-gray-300 shadow-lg hover:shadow-sm duration-300 rounded-xl text-sm flex items-center gap-1">
            <Plus />
            Add New Product
          </button>
        </div>
      </div>
      <ProductList />

      <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                <PaginationLink href="#">2</PaginationLink>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      {isModalOpen && <CreateProductModel onClose={handleModalClose} />}
    </>
  );
};

export default Product;
