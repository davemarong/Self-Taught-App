// IMPORTS

// React
import React, { useState } from "react";

// Material UI
import Menu from "@mui/material/Menu";
// Icon
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// Components
import MenuItems from "./MenuItems";

export default function ProjectModalButtons({
  project,
  toggleCreateProjectModal,
  toggleProjectModal,
  setBackdrop,
  setShowDeleteOption,
  setUpdate,
  update,
}) {
  // UseState
  const [anchorEl, setAnchorEl] = useState(null);
  // Variable
  const open = Boolean(anchorEl);

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("Modal buttons");

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItems
          handleClose={handleClose}
          setBackdrop={setBackdrop}
          toggleCreateProjectModal={toggleCreateProjectModal}
          project={project}
          toggleProjectModal={toggleProjectModal}
          update={update}
          setUpdate={setUpdate}
          setShowDeleteOption={setShowDeleteOption}
        />
      </Menu>
    </>
  );
}
