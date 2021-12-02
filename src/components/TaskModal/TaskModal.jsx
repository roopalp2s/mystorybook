import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Buttons/Button";

export const TaskModal = ({ title, modal, setModal }) => {
  return (
    modal && (
      <div className="rounded-md overflow-hidden shadow-outer w-full absolute bg-white top-0 left-0">
        <div className="flex px-8 py-3 card-header flex justify-between">
          <p className="text-gray-900 text-lg capitalize">{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setModal(!modal)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="card-body px-8 py-3 pb-9">
          <div class="grid grid-rows-3 grid-flow-col gap-4 ">
            <div class="row-span-3 ...">
              <label>Due Date</label>
              <input
                type="date"
                placeholder="Due Date"
                className="border border-gray-600 w-full px-2 py-1 rounded"
              />
            </div>
            <div class="row-span-3 ...">
              <label>Due Time</label>
              <input
                type="time"
                placeholder="Due Time"
                className="border border-gray-600 w-full px-2 py-1 rounded"
              />
            </div>
          </div>
          <div class="row-span-12 mt-3">
            <input
              type="text"
              placeholder="Note"
              className="border border-gray-600 w-full px-2 py-1 rounded mb-5"
            />
            <Button label="Add" size="large" />
          </div>
        </div>
      </div>
    )
  );
};

TaskModal.prototype = {
  title: PropTypes.string,
};

TaskModal.defaultProps = {
  title: "Add a Task",
};
