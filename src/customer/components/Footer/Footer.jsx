import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { Button } from "@headlessui/react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Empresa
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Acerca de
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Prensa
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Empleos
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Socios
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Soluciones
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Análisis
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Comercio
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Perspectivas
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Soporte
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentación
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guías
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Estado del API
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Reclamaciones
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacidad
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Términos
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            © 2024 Mi Empresa. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Elaborado para evaluación.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Íconos realizados por{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Grupo 6
            </Link>{" "}
            de{" "}
            <Link
              href="https://www.utp.com"
              color="inherit"
              underline="always"
            >
              www.utp.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};


export default Footer;
