import React, { useState } from 'react'
import Login from '../Login'
import AddHarv from './AddHarv'
import Transport from './Transport'
import Update from './Update'
// import Top from '../Top'

const Harv = () => {
    const [state,setState]=useState(false)
	const [reg,setReg]=useState(false)
const [harv,setHarv]=useState(false)
const [trans,setTrans]=useState(false)
const [update,setUpdate]=useState(false)

    const handleReg=()=>{
        setReg(!reg)
    }

    if(reg){
        return <Login/>
    }

    const handleHarv=()=>{
        setHarv(!harv)
    }

    if(harv){
        return <AddHarv/>
    }

    const handleTrans=()=>{
        setTrans(!trans)
    }
    if(trans){
        return <Transport/>
    }

	const handleUpdate=()=>{
		setUpdate(!update)
	}

	if(update){
		return <Update/>
	}

    const hanldeApp=()=>{
        setState(!state)
    }
    if(state){
        return <Msg/>
    }
    
  return (
    <>
    {/* navbar */}
	
    <ul class="flex bg-gray-400 md:gap-4  py-4">
  <li class="md:mr-6 mr-2">
    <button class="text-green-700   hover:text-green-800 " onClick={handleReg}>Register</button>
  </li>
  <li class="md:mr-6 mr-2">
    <button class="text-green-700   hover:text-green-800 " onClick={handleHarv} >Add Harvest</button>
  </li>
  <li class="md:mr-6 mr-2">
    <button class="text-green-700   hover:text-green-800 " onClick={handleTrans} >Add Transport</button>
  </li>
  <li class="md:mr-6 mr-2">
    <button class="text-green-700   hover:text-green-800 " onClick={handleUpdate} >Update</button>
  </li>

</ul>
{/* navbar */}

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Enter Your Harvestry</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Farmer Name</label>
						</div>
            <div className="relative">
							<input required autocomplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer email" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Farmer Email</label>
						</div>
            <div className="relative">
							<input required autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> Farmer Password</label>
						</div>

						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Address</label>
						</div>
						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="number" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Farmer Contact</label>
						</div>
						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Crop Name</label>
						</div>
						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Harvester Name</label>
						</div>

						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="number" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Harvester Number</label>
						</div>

						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Harvester Email</label>
						</div>

						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Transporter Name</label>
						</div>
						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Transporter Email</label>
						</div>

						<div className="relative">
							<input required autocomplete="off" id="farmer" name="farmer" type="number" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Farmer Name" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Transporter Phone</label>
						</div>


						<div className="relative">
							<button className="bg-green-500 text-white rounded-md px-2 py-1 " onClick={hanldeApp}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</>
  )
}

export default Harv