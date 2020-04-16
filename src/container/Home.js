import React from 'react';
import './Home.css';
import Form from '../componenets/Form/Form';
//import firebase from '../../config/firebase';

const Home = () => {
    /*
   firebase.firestore().collection('times').add({
       title: 'titulo',
       seconds: 34
   })*/

    const addTaskHandler = values => {
        console.log(values)
    }

    return (
        <div className='home-container'>
            <Form onAddTask={addTaskHandler} />
        </div>
    );
};

export default Home;