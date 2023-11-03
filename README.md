# doctor-everywhere-reference-app

# To Run the app using Docker Compose
* Build the app by running Docker build commands. 
  * ```docker build -f doctor-api.Dockerfile -t doctor-api:latest .```
  * ```docker build -f patient-api.Dockerfile -t patient-api:latest .``` 
  * ```docker build -f appointments.Dockerfile -t appointments-api:latest .```
    
or

just run below command if ur on mac or linux
  * ```sh appBuild.sh```
   
* Run Docker Compose Up: ```docker-compose up```

### Spring Security Impl
1. Add Spring Security Starter Pack in POM
2. Add Security Config File, annotate it with @Configuration and @EnableWebSecurity Class

### Run Ui App
* npm install
* npm run dev