import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useMainSubjectData from "../useMainSubjectData";
import AddTopicModal_Logic from "./AddTopicModal_Logic";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
export default function AddTopicModal({ setRenderMainSubject }) {
  const topLevelIndex = useSelector((state) => state.topLevelIndex);

  const {
    handleAddExtraSkill,
    extraSkill,
    update_Title_LearnedSkills_TotalSkills,
    handleExtraSkill,
    focusInput,
    addTopicRef,
    addTopicSnackbar,
    setNewSkill,
  } = useMainSubjectData();
  useEffect(() => {
    focusInput(addTopicRef);
  }, []);
  const clickEnterExtraAddSkill = (event) => {
    if (event.key === "Enter") {
      handleAddExtraSkill(topLevelIndex);
      setNewSkill("");
      focusInput(addTopicRef);
      addTopicSnackbar();
      setRenderMainSubject(extraSkill);
    }
  };
  return (
    <Container maxWidth="sm">
      <Card>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item>
            <CardContent>
              <Typography>Add topic</Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <TextField
              onKeyPress={clickEnterExtraAddSkill}
              inputRef={addTopicRef}
              onChange={handleExtraSkill}
              variant="outlined"
              label="Add skill..."
              value={extraSkill}
            ></TextField>
          </Grid>

          <Grid item>
            <Button
              onClick={() => {
                handleAddExtraSkill(topLevelIndex);
                update_Title_LearnedSkills_TotalSkills(topLevelIndex);
                focusInput(addTopicRef);
                addTopicSnackbar();
                setRenderMainSubject(extraSkill);
              }}
              variant="outlined"
            >
              Add skill
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
