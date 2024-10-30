import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://img.freepik.com/foto-gratis/sesion-estudio-ropa-moda-
              hombre-camisa-verde-basica_53876-101197.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Camisa de Hombre Verde</p>
              <p className="opacity-50 text-xs font-semibold text-left">
                Size: L
              </p>
              <p className="opacity-50 text-xs font-semibold text-left">
                {" "}
                Color: Green
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  xs={{ width: "15px", height: "15px" }}
                  className="text-green-600
                mr-2 text-sm"
                />
                <span>Delivered On October 10</span>
              </p>
              <p className="text-xs">
                Your Item Has Been Delivered
              </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On October 10</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
