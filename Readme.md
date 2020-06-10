** The steps to locally host CHATUP (Web based chat application) are the same for windows and linux and are provided below. ** 

# Prerequisites
** You need to have these downloaded on your device. **
   1) Node: https://nodejs.org/en/download/.
   2) NPM: When you install Node, NPM gets installed automatically.

# Make an online mongodb database using Atlas. 
   1) Use this link (https://docs.atlas.mongodb.com/getting-started/) to know to exact steps to do so.
   2) Import all json format files to the databse from '_data' folder in the project directory.
   3) Once the database is created bind to the application. Refer sters below to do so.

# To connent Database to Application
   1) Click on connect for the mongodb application cluster and then head to 'connect with application'.
   2) There is link given, copy and paste it into "MONGO_URI" variable of ".env" file in "config" folder of the project directory.
   3) Make sure your ip has network access of the cluster and now the binding is complete.   

# To Set-Up Application
   1) To setup code you have to type "npm install" in terminal (command prompt in case of windows) in the project directory and then proceed to start the Application.

#  Start the Application
   
   1) Type "npm start" on the terminal in the project directory.
   2) After starting the application, go to your web browser and search : http://localhost:5000
   3) Use the Web application.

** 
   Regards,
   Rishabh Agrawal 2018IMG-046
   Prawar Mundra   2018IMG-037
   Rutvij Raut     2018IMG-049
   Prateek Verma   2018IMG-036
**