"use client";
import React from 'react'
import { DeleteMeetingMemberAction } from '../actions/DeleteMeetingMemberAction';

export default function DeleteMeetingMember({ id }: { id: number }) {

    async function deleteMember() {
        if (confirm("Are you sure you want to remove this member?")) {
            await DeleteMeetingMemberAction(id);
        }
    }

    return (
        <button
            onClick={deleteMember}
            className="px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-400"
        >
            Delete
        </button>
    )
}
