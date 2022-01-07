// IMPORTS

// React
import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";

// Components
import TransparentButton from "../../button/TransparentButton";
import RedButton from "../../button/RedButton";

// Icon
import DeleteIcon from "@material-ui/icons/Delete";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

export default function ProjectCardButtons({
  toggleProjectModal,
  showDeleteOption,
  toggleDeleteProjectModal,
}) {
  return (
    <Grid container direction="column" alignItems="flex-end" item>
      <TransparentButton
        func={toggleProjectModal}
        icon={<OpenInNewRoundedIcon />}
      >
        Open
      </TransparentButton>
      {showDeleteOption ? (
        <RedButton func={toggleDeleteProjectModal} icon={<DeleteIcon />}>
          Delete
        </RedButton>
      ) : null}
    </Grid>
  );
}
