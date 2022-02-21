import React from "react";
import { Questionnaires, Dashboard } from "../pages";

export const routes = [
  { id: 1, path: "/dashboard", component: <Dashboard /> },
  { id: 2, path: "/questionnaires", component: <Questionnaires /> },
];
