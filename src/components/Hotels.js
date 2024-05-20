import React from 'react'
import Navbar from './Navbar';
import Carusole from './Carusole';
import Shorts from './Shorts';


const Hotels = () => {
  return (
    <div>
      <Navbar 
      classBoot3="nav-link active navb-linker"
      classBoot2="nav-link navb-linker"
      classBoot1="nav-link navb-linker"
      classBoot4="nav-link navb-linker"
      classBoot5="nav-link navb-linker Boot"
      />
      <Carusole/>
      <Shorts />
    </div>
  )
}

export default Hotels