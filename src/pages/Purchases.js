import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PurchasesComponent from '../componentes/PurchasesComponent';
import { getPurchases } from '../store/slices/purchases.slice';
import '../assests/styles/purchases.css'


const Purchases = () => {
    const dispatch = useDispatch();

    const purchasesList = useSelector(state=>state.purchases);
    

    useEffect(()=>{
        dispatch(getPurchases())
    },[dispatch])

    return (
        <div>
            <h1>Purchases</h1>

            <div className='purchases-wrapper'>
                <div className='purchases-container'>
                {
                    purchasesList.map(purchases=>(
                        <PurchasesComponent purchases={purchases} key={purchases.id}/>
                    ))
                }
                </div>

            </div>
        </div>
    );
};

export default Purchases;