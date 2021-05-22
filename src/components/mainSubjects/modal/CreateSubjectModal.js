import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CardActions from "@material-ui/core/CardActions";
import useAddTopics from "../../customHooks/useAddTopics";
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { motion } from "framer-motion";

export default function CreateSubjectModal({
  subjectsType,
  closeCreateSubjectModal,
}) {
  const {
    currentSkills,
    newSkill,
    setNewSkill,
    handleNewSkill,
    handleAddNewSkill,
    clickEnterAddSkill,
    focusInput,
    addSkillInputRef,
    handlePushInfoToRedux,
    mainSubjectName,
    handleMainSubjectName,
    setMainSubjectName,
  } = useAddTopics();
  const mainSubjectNameRef = useRef();
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  useEffect(() => {
    focusInput(mainSubjectNameRef);
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: 100 }}>
      <Card>
        <Grid container direction="row" style={{ maxHeight: 400 }}>
          <Grid container justify="flex-end" item xs={12}>
            <IconButton onClick={closeCreateSubjectModal}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid
            container
            justify="center"
            item
            xs={12}
            style={{ position: "relative", bottom: 20 }}
          >
            <TextField
              inputRef={mainSubjectNameRef}
              label="Name"
              onChange={handleMainSubjectName}
              variant="outlined"
              value={mainSubjectName}
            ></TextField>
          </Grid>
          <Grid container item style={{ padding: 15 }}>
            <Grid container item xs={7}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={addSkillInputRef}
                  onKeyPress={clickEnterAddSkill}
                  onChange={handleNewSkill}
                  variant="outlined"
                  label="Add skill..."
                  value={newSkill}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <List
                  style={{ minHeight: 100, maxHeight: 200, overflowY: "auto" }}
                >
                  {currentSkills.map((item, index) => {
                    return (
                      <ListItem key={item.title}>
                        <ListItemText>{item.title}</ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
            <Grid container direction="column" xs={5}>
              <Grid item>
                <Button
                  style={{
                    margin: 10,
                    background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
                  }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  variant="outlined"
                  onClick={() => {
                    handleAddNewSkill(currentSkills);
                    setNewSkill("");
                    focusInput(addSkillInputRef);
                  }}
                >
                  Add
                </Button>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="flex-end"
                item
                style={{ marginTop: "auto" }}
              >
                <Button
                  style={{
                    width: 100,
                    background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
                  }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  variant="outlined"
                  onClick={() => {
                    if (subjectsType === "mainSubjects") {
                      handlePushInfoToRedux(mainSubjects);
                    } else {
                      handlePushInfoToRedux(secondarySubjects);
                    }
                    setMainSubjectName("");
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
