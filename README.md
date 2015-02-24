# Garage

Garage is the most amazing app ever created

## Configuring it

You need to create a `.env` file with the following configurations:

* **MONGO_URL**: Path to the Mongo database to use

You can see [.env.development](https://github.com/mgonto/garage/blob/master/backend/.env.development) file as an example

## Running the app

First, you need to install all dependencies. For that, just run `npm i`

You can run the app doing `node server`. If you want the app to restart on changes, I recommend using `nodemon`.

For that, just install it using `npm i -g nodemon` and then `nodemon server`

## Seeding data to the app

Before creating any product, you should seed the existing categories for the app. For that go to the [scripts](https://github.com/mgonto/garage/tree/master/backend/scripts) folder and run `npm i` to install all needed dependencies. After that, just run `node category-creator` **with the server running** (It uses the API to create the categories).
