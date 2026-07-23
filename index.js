import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv"
import { RestaurantsModel } from "./Restaurant-model.js";
dotenv.config()

const newRestaurant = [{
  name: "New Restaurant",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
},
{
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
},
{
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
}
];

const start =async()=>{
    try{
        await mongoose.connect(process.env.ConnectionURL);
        console.log("connected to the Database");
       await RestaurantsModel.deleteMany({});
        console.log("Restaurants data cleared");
       await      RestaurantsModel.insertMany(newRestaurant);
console.log("data inserted to the database")
    }
    catch(error){
         console.error("an error oqured",error)
    }
    finally{await mongoose.disconnect()
        console.log("disconnect from the database")
    }
}
start()

