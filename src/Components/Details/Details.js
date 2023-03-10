import React from 'react';
import './Details.css';

const Details  = (props) => {
    const breakTime = localStorage.getItem('breakTime');
    const handleClickedValue = (e) => {
        localStorage.setItem('breakTime', e.target.innerText);
        document.getElementById("time").innerText = e.target.innerText
    }
    const {cart} = props;   
    let total = 0;
    for(const exercise of cart){
        total = total + exercise.time;
    }
    const clickedButtonFirst = () => {
        const addCompleteToast = document.getElementById('toast-success');
        addCompleteToast.classList.remove('hidden');
    }
    const clickedButtonSecond = () => {
        const addCompleteToast = document.getElementById('toast-success');
        addCompleteToast.classList.add('hidden');
    }
    return (
        <nav className=' card-contain hidden lg:block'>
        <div className='flex'>
            <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white my-5 mx-10" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div className='my-5'>
            <h1 className='font-bold'>Zahid Hossain</h1>
            <p>Sydney, Australia</p>
            </div>
        </div>
        <div className='flex bg-slate-100 m-10 rounded-md'>
            <div className='mx-8 my-2'>
                <h1><span className='font-extrabold'>75</span>Kg</h1>
                <p>Weight</p>
            </div>
            <div className='mx-8 my-2'>
                <h1 className='font-extrabold'>6.5</h1>
                <p>Height</p>
            </div>
            <div className='mx-8 my-2'>
                <h1><span className='font-extrabold'>25</span>yrs</h1>
                <p>Age</p>
            </div>
        </div>
        

        <div>
            <h1 className='font-bold mx-10'>Add A Break</h1>
        <div className='bg-slate-100 flex mx-10 my-5 rounded-md'>
        <div onClick={handleClickedValue} className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <button className='m-2'>10</button>
            </div>
            <div onClick={handleClickedValue}  className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <button className='m-2'>20</button>
            </div>
            <div onClick={handleClickedValue} className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <button className='m-2'>30</button>
            </div>
            <div onClick={handleClickedValue} className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <button className='m-2'>40</button>
            </div>
            <div onClick={handleClickedValue} className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <button className='m-2'>50</button>
            </div>
        </div>
        </div>


        <div>
            <h1 className='font-bold mx-10'>Exercise Details</h1>
            <div className='bg-slate-100 mx-10 my-5  rounded-md '>
                <p className='mx-5 p-2'>Exercise time: {total}s</p>
            </div>
            <div className='bg-slate-100 mx-10  rounded-md'>
                <p className='mx-5 p-2'>Break time: <span id='time'>{breakTime}s</span></p>
            </div>
        </div>


        <div>
        <button id='add-toast' className='active-btn p-3 bg-blue-700 mt-4 text-white rounded-md' onClick={clickedButtonFirst}>
            <p>Activity Completed</p>
        </button>

            <div id="toast-success" className="flex items-center m-10 p-4 mb-4 w-full max-w-xs hidden text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
                    <button  id='remove-toast'  type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onClick={clickedButtonSecond}>
                        <span className="sr-only">Close</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" ></path></svg>
                    </button>
                </div>
        </div>
        </nav>
    );
};

export default Details;