import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage(){

const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://testing-22169-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/');
        });


    }

    return(
      <section>
          <h1>Add New Mettup</h1>
          <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
    )
}

export default NewMeetUpPage;