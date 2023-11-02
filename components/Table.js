import React, { useState } from "react";
import data from "@/data/dummyData.json";
import Link from "next/link";

function Table() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4  flex flex-col">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>{item.status}</td>
                <td>
                
                <Link href={`/user/${item.id}`}>Details</Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-end justify-between">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous Page
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Table;
