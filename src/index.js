import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes, useParams} from "react-router";
import Index from "./pages";
import Request from "./pages/request";
import CreateRequest from "./pages/createRequest";
import {Privacy} from "./pages/privacy";
import {Terms} from "./pages/terms";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Index/>}/>
            <Route path={"/create"} element={<CreateRequest/>}/>
            <Route path={"/privacy"} element={<Privacy/>}/>
            <Route path={"/terms"} element={<Terms/>}/>
            <Route path={"/request/:id"} element={<RequestWithId/>}/>
        </Routes>

    </BrowserRouter>
);

function RequestWithId() {
    let {id} = useParams()
    return <Request id={id}/>
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
