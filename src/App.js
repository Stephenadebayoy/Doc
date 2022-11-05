import React from 'react';
// import Login from '../src/component/GetStarted';
import Home from '../src/component/Start';
import Splash from '../src/Screen/Splash';
import Signup from './component/SignUp';
import Login from '../src/component/Login';
import Dashboard from '../src/component/Dashboard';
import { Routes, Route, Link, Outlet, Router } from 'react-router-dom';
import { useState } from 'react';
import Account from '../src/Screen/Account';
import Instant from '../src/Screen/Instant';
import Budget from './Screen/Budget';
import Homepage from './Screen/Homepage/Homepage';
//import RecipeReviewCard from './Card';
import Profile from './Screen/Homepage/Profile/Profile';
import AccountSettings from './Screen/Homepage/Profile/AccountSettings';
import PhoneNumber from './Screen/Homepage/Profile/PhoneNumber';
import Identity from './Screen/Homepage/Profile/identityFolder/Identity';
import Identity_2 from './Screen/Homepage/Profile/identityFolder/identity_2';
import Identity_3 from './Screen/Homepage/Profile/identityFolder/identity_3';
import Identity_4 from './Screen/Homepage/Profile/identityFolder/identity_4';
import Identity_5 from './Screen/Homepage/Profile/identityFolder/identity_5';
import Identity_6 from './Screen/Homepage/Profile/identityFolder/identity_6';
import Verification from './Screen/Homepage/Profile/identityFolder/Verification';
import Passport from './Screen/Homepage/Profile/identityFolder/Passport';
import Help from './Helpcenter/GetHelp';
import CallUs from './Helpcenter/CallUs';
import Faqs from './Helpcenter/Faqs';
import Security from './Security/Security';
import Confirmpin from './Security/Confirmpin';
import Transactionpin from './Security/Transactionpin';
import Transaction from './Security/Transaction';
import Transaction_2 from './Security/Transaction_2';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='account' element={<Account />} />
        <Route path='instant' element={<Instant />} />
        <Route path='budget' element={<Budget />} />
        <Route path='homepage' element={<Homepage />} />
        <Route path='profile' element={<Profile />} />
        <Route path='accountsettings' element={<AccountSettings />} />
        <Route path='phonenumber' element={<PhoneNumber />} />
        <Route path='identity' element={<Identity />} />
        <Route path='identity_2' element={<Identity_2 />} />
        <Route path='identity_3' element={<Identity_3 />} />
        <Route path='identity_4' element={<Identity_4 />} />
        <Route path='identity_5' element={<Identity_5 />} />
        <Route path='identity_6' element={<Identity_6 />} />
        <Route path='verification' element={<Verification />} />
        <Route path='passport' element={<Passport />} />
        <Route path='gethelp' element={<Help />} />
        <Route path='callus' element={<CallUs />} />
        <Route path='faq' element={<Faqs />} />
        <Route path='security' element={<Security />} />
        <Route path='confirmpin' element={<Confirmpin />} />
        <Route path='transactionpin' element={<Transactionpin />} />
        <Route path='transaction' element={<Transaction />} />
        <Route path='transaction_2' element={<Transaction_2 />} />
        {/* <Route path='recipereviewcard' element={<RecipeReviewCard />} /> */}

        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup setUser={setUser} />} />
        <Route path='dashboard' element={<Dashboard user={user} />} />
      </Routes>
    </>
  );
}

export default App;
