import React from 'react';
import Document from '../containers/Document';
import Tabs from '../containers/Tabs';
import Header from './Header';
import '../reset.css';

export default function App() {
  return (
    <>
      <Header />
      <Document />
      <Tabs />
    </>
  );
}
