import { RestaurantsModel } from "../Restaurant-model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectIntoTheDB = async () => {
  console.log("establising bd connection...");
  try {
    await mongoose.connect(process.env.ConnectionURL);
    console.log("connection establised!");
  } catch (error) {
    console.log(error);
  }
};
connectIntoTheDB();

const db_disconnect = async () => {
  console.log("//////////////////////////////////");

  await mongoose.disconnect();
  console.log("disconnected!");
};
//Read all Restaurants
const viewRestaurants = async () => {
  try {
    const allRestaurants = await RestaurantsModel.find();
    console.log(allRestaurants);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("//////////////////////////////////");
  }
};
viewRestaurants();

//read "New Restaurant"
const newRestaurant = async (restaurantName) => {
  try {
    connectIntoTheDB();
    const viewRestaurant = await RestaurantsModel.findOne({
      name: restaurantName,
    });
    console.log(viewRestaurant);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("////////////////////////////////////");
  }
};
newRestaurant("New Restaurant");

//find resurvable restaurants
const reservationOffer = async () => {
  try {
    const reservableRestaurant = await RestaurantsModel.findOne({
      reservationsNeeded: true,
    });
    console.log(reservableRestaurant);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("//////////////////////////////////////");
  }
};
reservationOffer();
//find the restaurant by phone number
const restaurantFindByPH_Number = async (number) => {
  try {
    const theRestaurant = await RestaurantsModel.findOne({
      phoneNumber: number,
    });
    console.log(theRestaurant);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("//////////////////////////////////");
  }
};
restaurantFindByPH_Number("+1288997392");

//show the restaurants by italian cuisin
const italianCuisineRestaurants = async (cuisine) => {
  try {
    const viewRestaurants = await RestaurantsModel.find({ cuisine: cuisine });
    console.log(viewRestaurants);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("//////////////////////////////////////");
  }
};
italianCuisineRestaurants("Italian");
