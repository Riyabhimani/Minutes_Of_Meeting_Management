"use client";
import React from 'react'
import { DeleteMeetingTypeAction } from '../actions/DeleteMeetingTypeAction';

export default function DeleteMeetingType({ id }: { id: number }) {

    async function deleteMeetingType() {
        if (confirm("Are you sure you want to delete this meeting type?")) {
            await DeleteMeetingTypeAction(id);
        }
    }

    return (
        <button
            onClick={deleteMeetingType}
            className="px-3 py-1.5 bg-white text-red-600 text-xs font-bold rounded-lg border border-red-100 hover:bg-red-50 transition shadow-sm"
        >
            Delete
        </button>
    )
}
