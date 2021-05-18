import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
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
        <IconButton onClick={closeCreateSubjectModal}>
          <CloseIcon />
        </IconButton>
        <CardContent>
          <TextField
            inputRef={mainSubjectNameRef}
            label="Name"
            onChange={handleMainSubjectName}
            variant="outlined"
            value={mainSubjectName}
          ></TextField>
        </CardContent>
        <CardContent>
          <TextField
            inputRef={addSkillInputRef}
            onKeyPress={clickEnterAddSkill}
            onChange={handleNewSkill}
            variant="outlined"
            label="Add skill..."
            value={newSkill}
          ></TextField>

          <Button
            onClick={() => {
              handleAddNewSkill(currentSkills);
              setNewSkill("");
              focusInput(addSkillInputRef);
            }}
          >
            Add
          </Button>
        </CardContent>
        <List>
          {currentSkills.map((item, index) => {
            return (
              <ListItem key={item.title}>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            );
          })}
        </List>
        <CardActions>
          <Button
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
        </CardActions>
      </Card>
    </Container>
  );
}
