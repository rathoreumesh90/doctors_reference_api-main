
<script>

import axios from 'axios';


export default {
  data(){
    return {
      apiURL: import.meta.env.VITE_APPOINTMENT_API_URL,
      dataInfo: '',
      isCreateSuccess: false,
      errorMessage: '',
      id: '',
      date: '12-12-2023',
      startTime: '5:00 PM',
      endTime: '6:00 PM',
      patientEmail: 'akash@akash.com',
      doctorEmail: 'corsin1@corsin.com',
      clinicName: 'any'
    };
  },
  methods: {
    getRandomDate() {
      const maxDate = Date.now();
      const timestamp = Math.floor(Math.random() * maxDate);
      console.log(new Date(timestamp));
      return new Date(timestamp);

    },
    createAppointment(){
      console.log("API URL: " + this.apiURL);
      let json = {
        date:this.date,
        startTime:this.startTime,
        endTime:this.endTime,
        patientEmail:this.patientEmail,
        doctorEmail:this.doctorEmail,
        clinicName:this.clinicName,                                         
      }
      console.log("Body: " + JSON.stringify(json));
      const options = {headers: {'Content-Type': 'application/json'}};
      axios.post(this.apiURL + "/appointment",JSON.stringify(json),options) 
      .then(
        res=>{
          this.dataInfo = res.data;
          console.log("Status for get Request: " + res.status);
          if (res.status===200){
            this.isCreateSuccess=true;
          }
        }
      ) .catch((error)=> {
            if (error.response) {
              // Request made and server responded
              console.log("Error Response Data:" + JSON.stringify(error.response.data));
              console.log("Error Response status:" + error.response.status);
              console.log("Error Response headers:" + JSON.stringify(error.response.headers));
              this.errorMessage = "Data:" + JSON.stringify(error.response.data) + " Status: " + error.response.status + " Headers: " + JSON.stringify(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
              this.errorMessage = error.request;
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
              this.errorMessage = error.message;
            }

          });
    }//end method
  }

}

</script>

<template>
  <div class="greetings">
    <h1 class="green">Create New Appointment</h1>
  </div>

  <form>
    <span v-if="isCreateSuccess===true" style="color:green;align:center; text-align:center">Created Successfully!</span>
    <ul>
      <li>
        <label for="name">Date:</label>
        <input v-model="Date" type="text">
      </li>
      <li>
        <label for="name">startTime:</label>
        <input v-model="startTime" type="text">
      </li>
      <li>
        <label for="name">endTime:</label>
        <input v-model="endTime" type="text" >
      </li>
      <li>
        <label for="name">patientEmail:</label>
        <input v-model="patientEmail" type="text">
      </li>
      <li>
        <label for="name">doctorEmail:</label>
        <input v-model="doctorEmail" type="text">
      </li>
      <li>
        <label for="name">clinicName:</label>
        <input v-model="clinicName" type="text">
      </li>
    </ul>
  </form>
          <!-- <button @click="createNewDoctor">Create Doctor</button> -->

  <button class="button button2" @click="createAppointment()">Create Appointment</button>


  <hr>
  <h2>Debug Point. API response: </h2>
  <div> {{doctorsInfo}}</div>
  <hr>
  <div>errors : {{errorMessage}}</div>

</template>

<style scoped>

form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 600px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: rgb(226, 234, 235);
}

form li + li {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  width: 150px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;

  /* Match form field borders */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
}

textarea {
  /* Align multiline text fields with their labels */
  vertical-align: top;

  /* Provide space to type some text */
  height: 5em;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button1 {background-color: #4CAF50;} /* Green */
.button2 {background-color: #008CBA;} /* Blue */
/* .button {

  padding-left: 90px;
}


button {
  margin-left: .5em;
} */

</style>
