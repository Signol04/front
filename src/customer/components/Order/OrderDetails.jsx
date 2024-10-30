import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-lg py-7 text-left">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3}></OrderTraker>
      </div>
      <Grid className="space-y-5" container>
        {[1,1,1,1,1].map((item)=> <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://img.freepik.com/foto-gratis/sesion-estudio-
                        ropa-moda-hombre-camisa-verde-basica_53876-101197.jpg"
                alt=""
              />
              <div className="text-left space-y-2 ml-5">
                <p className="font-semibold">Camisa de Hombre Verde</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: green</span>
                  <span>Size: L</span>
                </p>
                <p>Provider: Gamarra</p>
                <p>$1099</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"2rem"}} lassName="px-2"/>
                <span>Rate & Review Products</span>

            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
