import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "../Card";
import { data } from "./taskData.json";
import moment from "moment";
import { TaskModal } from "../TaskModal";

const PendingTasks = ({
  data,
  handlePendingTask,
  modal,
  setModal,
  setModalTitle,
}) => (
  <React.Fragment>
    <ul>
      {data?.map(
        (item) =>
          !item?.completed && (
            <li className="bg-yellow-100 border-red-200 border-l-2  flex ">
              <div
                className="w-full flex pl-4 pt-4 pb-4 items-center border-b cursor-pointer"
                onClick={() => handlePendingTask(item._id)}
              >
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-3 mt-1"
                />
                <div>
                  <div className="text-base">{item.name}</div>
                  <div className="flex items-center">
                    <span className="flex items-center mr-5 text-gray-light100 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      {moment(item?.dueDate)?.format("HH:mm").toString()}
                    </span>{" "}
                    <span className="flex items-center  text-gray-light100 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {moment(item?.dueDate)?.format("MM/DD/YYYY").toString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b pt-5 pb-4 pr-5 flex items-center">
                <div className="text-red-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => {
                      setModal(!modal);
                      setModalTitle("Update a Task");
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </li>
          )
      )}
    </ul>
    {!modal && (
      <div
        className="flex mt-4 ml-5 text-blue-700 items-center cursor-pointer"
        onClick={() => setModal(!modal)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          />
        </svg>{" "}
        <span className="ml-2 text-gray-800 ">Add Task</span>
      </div>
    )}
  </React.Fragment>
);

const CompletedTasks = ({ data, handleCompletedTask }) => (
  <React.Fragment>
    <div className="flex mt-4 ml-5 text-blue-700 items-center justify-end pr-5 mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        />
      </svg>{" "}
      <span className="ml-2 text-gray-800">Clear All</span>
    </div>
    <ul>
      {data?.map(
        (item) =>
          item.completed && (
            <li
              className="border-gray-900 border-l-2  flex cursor-pointer"
              onClick={() => handleCompletedTask(item._id)}
            >
              <div className="w-full flex pl-4 pt-4 pb-4 items-center border-b">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-3 mt-1"
                />
                <div>
                  <div className="text-base line-through">{item.name}</div>
                  <div className="flex items-center">
                    <span className="flex items-center mr-5 text-gray-light100 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      {moment(item?.dueDate)?.format("HH:mm").toString()}
                    </span>{" "}
                    <span className="flex items-center  text-gray-light100 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {moment(item?.dueDate)?.format("MM/DD/YYYY").toString()}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          )
      )}
    </ul>
  </React.Fragment>
);
export const Tasks = ({ title }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [taskData, setTaskData] = useState(data);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add a Task");

  const handlePendingTask = (id) => {
    const updatedData = taskData?.map((item) => {
      if (id === item._id) {
        return {
          ...item,
          completed: true,
        };
      }
      return item;
    });
    setTaskData(updatedData);
  };

  const handleCompletedTask = (id) => {
    const updatedData = taskData?.map((item) => {
      if (id === item._id) {
        return {
          ...item,
          completed: false,
        };
      }
      return item;
    });
    setTaskData(updatedData);
  };
  return (
    <div className="relative">
      <Card title={title}>
        <div className="flex flex-wrap w-full">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap   pb-4 flex-row  px-8"
              role="tablist"
            >
              <li className="-mb-px  last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-sm px-5 py-3 bg-gray-light rounded rounded-r-none block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + "blue" + "-700"
                      : "text-" + "gray-light100" + " bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Pending
                </a>
              </li>
              <li className="-mb-px  last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-sm  px-5 py-3 bg-gray-light  rounded rounded-l-none block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + "blue" + "-600"
                      : "text-" + "gray-light100" + " bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Completed
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
              <div className=" py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <PendingTasks
                      data={taskData}
                      handlePendingTask={handlePendingTask}
                      modal={modal}
                      setModal={setModal}
                      setModalTitle={setModalTitle}
                    />
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <CompletedTasks
                      data={taskData}
                      handleCompletedTask={handleCompletedTask}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <TaskModal title={modalTitle} modal={modal} setModal={setModal} />
    </div>
  );
};

Tasks.prototype = {
  title: PropTypes.string,
};

Tasks.defaultProps = {
  title: "Tasks",
};
