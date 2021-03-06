import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import useUpdateSubjectInfo from "../../customHooks/useUpdateSubjectInfo";
import useAddTopics from "../../customHooks/useAddTopics";
import MainSubjects from "../MainSubjects";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { motion } from "framer-motion";

export default function AddTopicModal({
  setRenderMainSubject,
  closeAddTopicModal,
}) {
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const subjectType = useSelector((state) => state.subjectType);

  const { update_Title_LearnedSkills_TotalSkills } = useUpdateSubjectInfo();

  const {
    handleAddExtraSkill,
    extraSkill,
    handleExtraSkill,
    focusInput,
    addTopicRef,
    addTopicSnackbar,
    setNewSkill,
  } = useAddTopics();
  useEffect(() => {
    focusInput(addTopicRef);
  }, []);
  const clickEnterExtraAddSkill = (event) => {
    if (event.key === "Enter") {
      handleAddExtraSkill(topLevelIndex, subjectType);
      setNewSkill("");
      update_Title_LearnedSkills_TotalSkills(topLevelIndex, subjectType);
      focusInput(addTopicRef);
      addTopicSnackbar(subjectType);
      setRenderMainSubject(extraSkill);
    }
  };
  return (
    <Container maxWidth="sm" style={{ marginTop: 200 }}>
      <Card>
        <Grid
          style={{ height: 300 }}
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid
            container
            justify="flex-end"
            item
            style={{ paddingBottom: 0, marginTop: 10 }}
          >
            <IconButton onClick={closeAddTopicModal}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h4">Add topic</Typography>
          </Grid>
          <Grid item>
            <TextField
              onKeyPress={clickEnterExtraAddSkill}
              inputRef={addTopicRef}
              onChange={handleExtraSkill}
              variant="outlined"
              label="Topic..."
              value={extraSkill}
            ></TextField>
          </Grid>

          <Grid item>
            <Button
              style={{
                marginBottom: 20,
                background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
              }}
              component={motion.div}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              onClick={() => {
                handleAddExtraSkill(topLevelIndex, subjectType);
                update_Title_LearnedSkills_TotalSkills(
                  topLevelIndex,
                  subjectType
                );
                focusInput(addTopicRef);
                addTopicSnackbar(subjectType);
                setRenderMainSubject(extraSkill);
              }}
              variant="outlined"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
