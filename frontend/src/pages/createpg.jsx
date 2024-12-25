import Navbar from '@/components/Navbar2'
import UserInputForm from '@/components/UploadPgForm'
import RoomDetailsForm from '@/components/UserRoom'

import React from 'react'

const addPg = () => {
  return (
    <>
   <div className="mb-2">
   <Navbar></Navbar>
   </div>
   <div className="mt-4">
    <UserInputForm></UserInputForm>
    </div>
    </>
  )
}

export default addPg