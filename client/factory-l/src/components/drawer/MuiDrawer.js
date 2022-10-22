import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./MuiDrawer.module.css";

const MuiDrawer = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <div className={classes.iconButton}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          // aria-label="logo"
          onClick={() => {
            setDrawerIsOpen(true);
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.drawer}>
        <Drawer
          anchor="left"
          open={drawerIsOpen}
          onClose={() => setDrawerIsOpen(false)}
        >
          <Box p={0} width="100vw" textAlign="center" role="presentation">
            <Typography variant="h6" component="div">
              <div
                className={classes.header}
                onClick={() => setDrawerIsOpen(false)}
              >
                Factory L
              </div>
            </Typography>
            <div className={classes.links}>
              <p
                onClick={() => {
                  setDrawerIsOpen(false);
                }}
              >
                <Link to="/"> HOME </Link>{" "}
              </p>
              <p
                onClick={() => {
                  setDrawerIsOpen(false);
                }}
              >
                <Link to="marketplace"> MARKETPLACE </Link>{" "}
              </p>
              <p
                onClick={() => {
                  setDrawerIsOpen(false);
                }}
              >
                {" "}
                <Link to="about"> ABOUT </Link>
              </p>
              <p
                onClick={() => {
                  setDrawerIsOpen(false);
                }}
              >
                {" "}
                <Link to="materials"> MATERIALS </Link>
              </p>
            </div>
            <div className={classes.close}>
              <button
                onClick={() => {
                  setDrawerIsOpen(false);
                }}
              >
                {" "}
                X
              </button>
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default MuiDrawer;
