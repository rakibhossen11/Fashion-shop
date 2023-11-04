import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <form className='shadow-lg rounded-lg bg-[#F7F9F9] p-10'>
            <h2 className='font-medium text-2xl'>Post A Job</h2>
            <div className='mt-4 shadow-md rounded-lg'>
                <input {...register('jobTitle')} className='w-full bg-[#EAEDED] rounded-lg text-2xl font-medium p-2' placeholder='Job Tittle' />
            </div>
            <div className='mt-4 shadow-md rounded-lg'>
                <input {...register('jobDescription')} className='w-full bg-[#EAEDED] rounded-lg text-2xl font-medium p-2' placeholder='Job Description' />
            </div>
            <div className='mt-4 shadow-md rounded-lg'>
                <input {...register('educationQualification')} className='w-full bg-[#EAEDED] rounded-lg text-2xl font-medium p-2' placeholder='Education Qualification' />
            </div>
            <input className='w-full bg-[#3498DB] font-medium text-xl p-2 mt-10 rounded-lg text-white' type="submit" value='Post Job' />
        </form>
    );
};

export default Home;