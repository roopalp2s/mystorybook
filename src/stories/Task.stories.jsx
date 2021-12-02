import React from "react";
import { Tasks } from "../components/Task";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Engage Core Ui/Tasks",
  component: Tasks,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tasks {...args} />;

export const Task = Template.bind({});

Task.args = {
  title: "Tasks",
 };
