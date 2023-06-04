import React from 'react';
import ReactDOM from 'react-dom/client';
import Ustate from './usestate';
import Ueffect from './useeffect'
import Ueffect2 from './useeffect2';
import Umemo from './usememo'
import Uref from './useref'
import Ucontext from './usecontextfolder/usecontext'
import Ureducer from './usereducer'
import Ureducer2 from './usereducer2'
import Ucontextcustom from './usecontextfoldercustom/usecontext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "usestate",
    element: <Ustate/>
  },
  {
    path: "useeffect",
    element: <Ueffect/>
  },
  {
    path: "useeffect2",
    element: <Ueffect2/>
  },
  {
    path: "usememo",
    element: <Umemo/>
  },
  {
    path: "useref",
    element: <Uref/>
  },
  {
    path: "usecontext",
    element: <Ucontext/>
  },
  {
    path: "usereducer",
    element: <Ureducer/>
  },
  {
    path: "usereducer2",
    element: <Ureducer2/>
  },
  {
  path: "usecontextcustom",
  element: <Ucontextcustom/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
