import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const Dashboard = () => {
  useFirestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"]
    }
  ]);
  useFirestoreConnect([
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ]);
  const projects = useSelector(state => state.firestore.ordered.projects);
  const notifications = useSelector(
    state => state.firestore.ordered.notifications
  );

  return (
    <div className='dashboard container'>
      <div className='row'>
        <div className='col s12 m6'>
          <ProjectList projects={projects} />
        </div>
        <div className='col s12 m5 offset-m1'>
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
