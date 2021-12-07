import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  change_main_subjects,
  get_top_level_index,
  change_subject_type,
} from "../../../redux/actions/index";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import usePushDataToServer from "../../customHooks/usePushDataToServer";

export default function DeleteSubjectModal({
  modalIndex,
  closeDeleteSubjectModal,
}) {
  const { index } = modalIndex;
  const dispatch = useDispatch();
  const mainSubjects = useSelector((state) => state.mainSubjects);

  const { updateMainSubjectsInServer } = usePushDataToServer();

  const deleteSubject = (subjectIndex) => {
    const updatedMainSubjects = mainSubjects.filter(
      (subject, id) => id != subjectIndex
    );
    return updatedMainSubjects;
  };

  return (
    <div>
      <Container style={{ marginTop: 200, maxWidth: 400 }}>
        <Card>
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item>
              <IconButton onClick={closeDeleteSubjectModal}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item xs={9}>
              <Typography>
                Are you sure you want to delete this topic?
              </Typography>
              <Grid
                item
                container
                direction="row"
                justify="space-around"
                style={{ margin: "40px 0" }}
              >
                <Grid item>
                  <Button
                    onClick={() => {
                      const updatedSubject = deleteSubject(index);
                      updateMainSubjectsInServer(updatedSubject);
                      dispatch(change_main_subjects(updatedSubject));
                    }}
                    variant="outlined"
                  >
                    Yes
                  </Button>
                </Grid>

                <Grid item>
                  <Button onClick={closeDeleteSubjectModal} variant="outlined">
                    No
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
