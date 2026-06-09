import React, {useEffect, useState} from 'react'
import {API_PATHS} from '../../utils/apiPaths'
import axiosInstance from '../../utils/axiosInstance'
import DashboardLayout from '../../components/layout/DashboardLayout.jsx'
import { LuFileSpreadsheet } from 'react-icons/lu'
import UserCard from '../../components/Cards/UserCard.jsx'
import axios from 'axios'


function ManageUsers() {
  const [allUsers, setAllUsers] = useState([])

  const getAllUsers = async () => {
    try{
      const responce = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS)
      console.log(responce)
      if(responce.data?.length > 0){
        setAllUsers(responce.data)
      }
    }catch(error){
      console.error("Error fetching users:", error)
    }
  }

  const handleDownloadReport = async () => {
    try{
      const responce = await axiosInstance.get(API_PATHS.REPORTS.EXPORT_USERS, {
        responseType: "blob"
      })
      const url = window.URL.createObjectURL(new Blob([responce.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute("download", "user_details.xlsx")
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
      window.URL.revokeObjectURL(url)
    }catch(error){
      console.error("Error Downloading user details", error)
      toast.error("Failed to download user details. Please try again.")
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <DashboardLayout activeMenu="Team Members">
      <div className='mt-5 mb-10'>
        <div className='flex md:flex-row md:items-center justify-center'>
          <h2 className='text-xl md:text-xl font-medium'>Team Members</h2>
          <button className='flex md:flex download-btn'
            onClick={handleDownloadReport}
          >
            <LuFileSpreadsheet className='text-lg'/>
            Download Report
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
          {allUsers.map((user) => (
            <UserCard key={user._id} userInfo={user}/>
          )) }
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ManageUsers
