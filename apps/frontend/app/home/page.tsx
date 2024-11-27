'use client'
import Cards from '@/components/home/Card';
import GasChart from '@/components/home/GasChart';
import NavBar from '@/components/home/Navbar';
import RadarChart from '@/components/home/RadarChart';
import { Sidebar } from '@/components/home/Sidebar';
import TemperatureChart from '@/components/home/TemperatureChart';
import * as React from 'react';


export const Home: React.FC = () => {

    return (
        <div className="pr-5 pb-7 ">
            <div className="flex gap-5 ">
                <Sidebar />
                <div className='flex flex-col w-full h-full ml-[20%]'>
                    <NavBar />
                    <Cards />
                    <div className='flex flex-row w-full h-ful mt-20'>
                        <div className='flex flex-col gap-10 w-full justify-between h-full'>
                            <GasChart />
                            <TemperatureChart />
                        </div>
                        <RadarChart sensorId="esp32-001" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;