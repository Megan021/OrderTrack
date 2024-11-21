import SalesChart from '@/components/ForDashboard/SalesChart';
import SalesPerson from '@/components/ForDashboard/SalesPerson';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
// import SideBarMenu from '../components/SideBarMenu';
// import SidebarLayout from '../layout/SidebarLayout';
// import Orders from '../components/ForHome/Orders';
// import SalesPerson from '../components/ForHome/SalesPerson';

const Dashboard = () => {
  return (
    <>
    <div className='w-full '>
     {/* <div className='flex gap-5'>
          <div className='w-[55%]'>
          <Orders />
          </div>

          <div className='w-[45%]'>
               <SalesPerson />
          </div>
     </div> */}

     <h1 className='font-semibold text-3xl mb-5'>Dashboard</h1>

     <div className='grid grid-cols-4 gap-4'>

      <div className='bg-white border border-gray-300 shadow rounded-xl p-5'>
        <div className='flex justify-between items-center pb-1'>
          <h2 className='font-medium'>Total Revenue</h2>
          <i><DollarSign strokeWidth={1.2} size={20} /></i>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>$45,321</h2>
          <p className='text-sm font-light'>Lorem ipsum dolor sit amet. </p>
        </div>
      </div>
      <div className='bg-white border border-gray-300 shadow rounded-xl p-5'>
        <div className='flex justify-between pb-1'>
          <h2 className='font-medium'>Orders</h2>
          <i><Users size={20} strokeWidth={1.25} /></i>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>+230</h2>
          <p className='text-sm font-light'>Lorem ipsum dolor sit amet. </p>
        </div>
      </div>
      <div className='bg-white border border-gray-300 shadow rounded-xl p-5'>
        <div className='flex justify-between pb-1'>
          <h2 className='font-medium'>Shipments</h2>
          <i><CreditCard size={20} strokeWidth={1.25} /></i>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>+250</h2>
          <p className='text-sm font-light'>Lorem ipsum dolor sit amet. </p>
        </div>
      </div>
      <div className='bg-white border border-gray-300 shadow rounded-xl p-5'>
        <div className='flex justify-between pb-1'>
          <h2 className='font-medium'>Active Now</h2>
          <i><Activity size={20} strokeWidth={1.25} /></i>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>+350</h2>
          <p className='text-sm font-light'>Lorem ipsum dolor sit amet. </p>
        </div>
      </div>

     </div>

     <div className='flex gap-5 mt-5'>
      <div className='w-[55%]'><SalesChart /></div>
      <div className='w-[45%] bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 border border-gray-300 shadow'><SalesPerson /></div>
     </div>

    </div>
    </>
  )
}

export default Dashboard;