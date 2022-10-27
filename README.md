#Mac Address API Command Line

###How to develop with it

Create an ```.env``` based on the ```.env.example``` and complete all the .env variables

First, run the command ```npm install``` in the directory root to install all the dependencies.

Once you have all the dependencies installed, you must run ```npm run build:watch``` to transpile all the typescript into crispy javascript.

###How to search for a mac address

``` npm run search mac=44:38:39:ff:ef:57```, or run the default test using ```npm run search:default```
you can also select the output using the param ``output``, like the following example ```npm run search output=xml mac=44:38:39:ff:ef:57 ```,
or maybe this one ```npm run search output=csv mac=44:38:39:ff:ef:57```.

There is a flag ```npm run search --full mac=44:38:39:ff:ef:57``` which is only compatible with the json outpot and allow the user obtain the entire json,
otherwise if that flag is not declared, the user will receive the company name. 

note: If the output is different of 'json' the application per default is not going to give you the company name.

###Docker