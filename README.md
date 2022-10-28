#macaddress.io API CLI

##Installation

###Node.js + Typescript stand alone

Create an ```.env``` based on the ```.env.example``` and complete all the environment variables , Then run the command ```npm install``` in the directory root to install all the dependencies.

Once you have all the dependencies installed, you must run ```npm run build``` to transpile all the typescript into javascript,
you can also use ```npm run build:watch``` to keep a terminal waiting for changes in the code, and in another terminal you can run any script referred in the "how to make a search" section.

###Docker

You must create an image of the application using the command ```docker build -t {YOUR_IMAGE_NAME} .``` and then execute the command ```docker run {YOUR_IMAGE_NAME}``` followed by the script.

The complete command looks like the following ```docker run {YOUR_IMAGE_NAME} npm run search mac={MAC_ADDRESS}```

##How to search for a mac address

You can use ```npm run search mac={MAC_ADDRESS}``` to get information about a specific mac address, or run the default search using ```npm run search:default```

You can also select the output using the param ```output``` just like the following example ```npm run search output=xml mac={MAC_ADDRESS}```, 
the valid output parameters are ```json```, ```xml``` and ```csv```, if the output parameter is not a valid one, the system is going to assign ```json``` 
which is also the default value, and also if the output is not ```json``` per default the app is going to print all the response, not just the company name. 

There is a flag called ```full```, which is only compatible with the json output and allow the user obtain the entire json,
otherwise if that flag is not declared and the output is ```json``` the user will receive the company name only.

This is a complete example with the flag active: ```npm run search full mac={MAC_ADDRESS}``` 

### A short list of scripts

- ```npm run search mac=44:38:39:ff:ef:57```
- ```npm run search full mac=44:38:39:ff:ef:57```
- ```npm run search output=csv mac=44:38:39:ff:ef:57```
- ```npm run search output=xml mac=44:38:39:ff:ef:57```
- ```npm run search output=csv mac=127.0.0.1``` (This one has an invalid mac address)
