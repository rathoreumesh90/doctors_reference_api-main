
<script>

import axios from 'axios';

export default {
  data(){
    return {
      apiURL: import.meta.env.VITE_PATIENT_API_URL,
      dataInfo: '',
      errorMessage: '',
      isCreateSuccess: false,
      id: '',
      name: 'Miss Rachel',
      age	: '34',
      email: 'rachel@rachel.com',
      phone: '32424',
      medicalConditions: 'BP'
    }
  },
  methods: {

    createNewPatient(){
      console.log("API URL: " + this.apiURL);
      let json = {
        name:this.name,
        age:this.age,
        email:this.email,
        phone:this.phone,
        medicalConditions:this.medicalConditions                                            
      }
      console.log("Body: " + JSON.stringify(json));
      const options = {headers: {'Content-Type': 'application/json'}};
      axios.post(this.apiURL + "/patient",JSON.stringify(json),options) 
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
    <h1 class="green">Add New Patient</h1>

  </div>

  <form>
    <span v-if="isCreateSuccess===true" style="color:green;align:center; text-align:center">Created Successfully!</span>
    <ul>
      <li>
        <label for="name">Name:</label>
        <input v-model="name" type="text">
      </li>
      <li>
        <label for="name">Age:</label>
        <input v-model="age" type="text">
      </li>
      <li>
        <label for="name">Email:</label>
        <input v-model="email" type="text" >
      </li>
      <li>
        <label for="name">Phone:</label>
        <input v-model="phone" type="text">
      </li>
      <li>
        <label for="name">medicalConditions:</label>
        <input v-model="medicalConditions" type="text">
      </li>
    </ul>
  </form>
          <!-- <button @click="createNewDoctor">Create Doctor</button> -->

        <button class="button button2" @click="createNewPatient()">Create patient</button>


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
