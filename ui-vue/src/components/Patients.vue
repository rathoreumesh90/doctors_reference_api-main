
<script>

import axios from 'axios';

export default {
  props: {
    msg: String
  },
  data(){
    return {
      apiURL: import.meta.env.VITE_PATIENT_API_URL,
      dataList: '',
      errorMessage: '',
      id: '',
      name: '',
      age	: '',
      email: '',
      phone: '',
      medicalConditions: ''
    }
  },
  methods: {

    getListOfAllPatients(){
      console.log("API URL: " + this.apiURL);
      axios
      .get(this.apiURL + "/patient") 
      .then(
        res=>{
          this.dataList = res.data;
          console.log("Status for get Request: " + res.status);
        }
      ).catch(function (error) {
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
    }
  },
  components:{

  },
  emits: [],
  computed: {

  }
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">List of All Patients</h1>
    <button class="button button2" @click="getListOfAllPatients()">Get List of Patients</button>
  </div>

  <div>
    <table v-if="dataList">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>email</th>
        <th>phone</th>
        <th>medicalConditions</th>
      </tr>
      <tr v-for="data in dataList">
          <td>{{data.id}}</td>
          <td>{{data.name}}</td>
          <td>{{data.age}}</td>
          <td>{{data.email}}</td>
          <td>{{data.phone}}</td>
          <td>{{data.medicalConditions}}</td>                                      
      </tr>
    </table>
  </div>
    <hr>
    <h2>Debug Point. API response: </h2>
    <div> {{dataList}}</div>
    <hr>
    <div>errors : {{errorMessage}}</div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

div {
  text-align: center;
}

.greetings h3 {
  text-align: center;
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

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

/* .greetings h1,


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  } 
}*/
</style>
