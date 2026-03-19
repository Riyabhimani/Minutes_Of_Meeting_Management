"use client";

import React from "react";
import { DeleteDepartmentAction } from "../actions/DeleteDepartmentAction";

export default function DeleteDepartment({ id }: { id: number }) {
  async function deleteDepartment() {
    if (confirm("Are you sure you want to delete this department?")) {
      await DeleteDepartmentAction(id);
    }
  }

  return (
    <button
      onClick={deleteDepartment}
      className="px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Delete
    </button>
  );
}

