import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Baby from '../Baby/Baby';
import Barbie from '../Barbie/Barbie';
import American from '../Amiricans/American';


const Categories = () => {
    const [categories, setCategories] = useState([])
    const [barbies, setBarbies] = useState([])
    const [americans, setAmericans] = useState([])
    useEffect(() => {
        fetch('https://toy-doll-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    useEffect(() => {
        fetch('https://toy-doll-server.vercel.app/barbie')
            .then(res => res.json())
            .then(data => {

                setBarbies(data)
            })
    }, [])
    useEffect(() => {
        fetch('https://toy-doll-server.vercel.app/americans')
            .then(res => res.json())
            .then(data => {

                setAmericans(data)
            })
    }, [])


    return (
        <div className='container gallery-title'>
            <h1 className='text-center fw-bold mb-5'>Our Doll Category</h1>
            <Tabs>
                <TabList>
                    <Tab>Baby Dolls</Tab>
                    <Tab>Barbie Doll</Tab>
                    <Tab>American girl Doll</Tab>
                </TabList>

                <TabPanel>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            categories.map(baby => <Baby key={baby._id} baby={baby}></Baby>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            barbies.map(barbie => <Barbie key={barbie._id} barbie={barbie}></Barbie>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            americans.map(american => <American key={american._id} american={american}></American>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Categories;