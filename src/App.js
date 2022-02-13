import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Callback from './pages/callback';
import Logout from './pages/Logout';
import Error from './pages/Error';
import Submission from './pages/submit';
import Profile from './pages/profile';
import Bot from './pages/bot';
import Edit from './pages/edit.js'
import Settings from './pages/settings'

import { AnimatePresence, motion } from "framer-motion"
import {
  ChakraProvider,
  extendTheme,
  Box,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = extendTheme({
  styles: {
    global: (props) => ({
      fonts: {
        heading: 'Open Sans',
        body: 'Raleway',
      },
      body: {
        color: mode('black', 'whiteAlpha.900')(props),
        bg: mode('white', 'black')(props),
      },
    })
  }
  })

function App() {
  return (
    <ChakraProvider theme={config}>
    <BrowserRouter>
    <AnimatePresence>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/callback' element={<Callback/>} />
          <Route path='/error' element={<Error/>} />
          <Route path='/bot/:id/edit' element={<Edit/>} />
          <Route path='/bot/:id/edit/settings' element={<Settings/>} />
          <Route path='/add-bot' element={<Submission/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/bot/:id" element={<Bot />} />
          <Route path="*" element={<NoPage />} />
          </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </ChakraProvider>
  );
}

export default App;

