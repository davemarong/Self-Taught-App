// IMPORTS

// React

import React from "react";

// Material UI
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";

export default function MaterialUI_modal({
  stateValue,
  modalFunction,
  children,
}) {
  return (
    <Modal
      open={stateValue}
      onClose={modalFunction}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Zoom timeout={300} in={stateValue}>
        <div
          style={{
            maxWidth: 900,
            margin: "auto",
          }}
        >
          {children}
        </div>
      </Zoom>
    </Modal>
  );
}
