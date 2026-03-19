"use client";
import React from 'react'
import { DeleteStaffAction } from '../actions/DeleteStaffAction';

export default function DeleteStaff({ id }: { id: number }) {

    async function deleteStaff() {
        if (confirm("Are you sure you want to delete this staff member?")) {
            await DeleteStaffAction(id);
        }
    }

    return (
        <button
            onClick={deleteStaff}
            className="px-3 py-1.5 bg-white text-red-600 text-xs font-bold rounded-lg border border-red-100 hover:bg-red-50 transition shadow-sm"
        >
            Delete
        </button>
    )
}
