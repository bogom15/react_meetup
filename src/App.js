import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
// } from "react-router-dom";

import { Route,Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetUpPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
//import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
  <Layout>
<Routes>
    <Route path="/" element={<AllMeetupsPage/>} />
    <Route path="/new-meetup" element={<NewMeetUpPage/>} />
    <Route path="/favourite" element={<FavouritesPage/>} />
</Routes>
  </Layout>
  );
}
export default App;


