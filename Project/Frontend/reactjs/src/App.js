import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginUi from './pages/LoginUi';
//import Register from './components/Register';
import Re1 from './components/Re1';
import MultipleSelect from './components/MultipleSelect';
//import Register from './components/Register';
//import ForgotPassword from './components/ForgotPassword';
//import Register from './components/Register';
//import LoginUi from './pages/LoginUi';
import Apps from './components/Apps';
import Start from './Pro.jsx/Start';
//import AddUser from './components/AddUser';
//import BasicTable from './components/BasicTable';
//simport Total from "./components/Total";

import AddUser from './components/AddUser';
import BasicTable from './components/BasicTable';
import UpdateUser from './components/UpdateUser';
import Total from './components/Total';
import De1 from './components/De1';
import Pro1 from './components/Pro1';
import Te1 from './components/Te1';
import Dep1 from './components/Dep1';
//import BasicTable1s from './image/BasicTable1';
//import BasicTable1s from './image/BasicTable1';
//import Appbar from './components/Appbar';
//import SignUp from './components/SignUp';
//import MultilineTextFields4 from './components/MultiLineTextFields4';
//import Testing from './components/Testing';
//import MultipleSelect from './components/MultipleSelect';
//import Designing from './components/Designing';
//import Research from './components/Research';
//import Programming from './components/Programming';
//import Deployment from './components/Deployment';

function App() {
  return(
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Start/>}/>
          <Route path="/LoginUi" element={<LoginUi/>}/>
          <Route path="/MultipleSelect" element={<MultipleSelect/>}/>
          <Route path="/Total" element={<Total/>}/>
          <Route path="/Re1" element={<Re1/>}/>
          <Route path="/Apps" element={<Apps/>}/>
          <Route path="/Start" element={<Start/>}/>
          <Route path="/LoginUi" element={<LoginUi/>}/>
          <Route path="/MultipleSelect" element={<MultipleSelect/>}/>
          <Route path="/Total" element={<Total/>}/>
          <Route path="/De1" element={<De1/>}/>
          <Route path="/Apps" element={<Apps/>}/>
          <Route path="/Start" element={<Start/>}/>
          <Route path="/LoginUi" element={<LoginUi/>}/>
          <Route path="/MultipleSelect" element={<MultipleSelect/>}/>
          <Route path="/Total" element={<Total/>}/>
          <Route path="/Pro1" element={<Pro1/>}/>
          <Route path="/Apps" element={<Apps/>}/>
          <Route path="/Start" element={<Start/>}/>
          <Route path="/LoginUi" element={<LoginUi/>}/>
          <Route path="/MultipleSelect" element={<MultipleSelect/>}/>
          <Route path="/Total" element={<Total/>}/>
          <Route path="/Te1" element={<Te1/>}/>
          <Route path="/Apps" element={<Apps/>}/>
          <Route path="/Start" element={<Start/>}/>
          <Route path="/LoginUi" element={<LoginUi/>}/>
          <Route path="/MultipleSelect" element={<MultipleSelect/>}/>
          <Route path="/Total" element={<Total/>}/>
          <Route path="/Dep1" element={<Dep1/>}/>
          <Route path="/Apps" element={<Apps/>}/>
          <Route path="/Start" element={<Start/>}/>
          <Route path="/LoginUi" element={<LoginUi/>}/>
          <Route path="/MultipleSelect" element={<MultipleSelect/>}/>
          <Route path="/Total" element={<Total/>}/>
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/BasicTable" element={<BasicTable/>} />
          <Route path="/UpdateUser" element={<UpdateUser/>}/>
        </Routes>
        </BrowserRouter>
        
  );
          
}
export default App;