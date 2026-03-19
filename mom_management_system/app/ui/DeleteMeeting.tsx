"use client";
import React from "react";
import { DeleteMeetingAction } from "../actions/DeleteMeetingAction";

export default function DeleteButton({ id }: { id: number }) {
  async function deleteMeeting() {
    if (confirm("Are you sure you want to delete this meeting?")) {
      await DeleteMeetingAction(id);
    }
  }

  return (
    <button
      onClick={deleteMeeting}
      className="px-3 py-1.5 bg-white text-red-600 text-xs font-bold rounded-lg border border-red-100 hover:bg-red-50 transition shadow-sm"
    >
      Delete
    </button>
  );
}