import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardActions from "@material-ui/core/CardActions";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import useMainSubjectData from "./useMainSubjectData";
import IconButton from "@material-ui/core/IconButton";

import { ListItemText } from "@material-ui/core";
export default function MainSubjects() {
  const {
    mainSubjects,
    handleMainSubjectName,
    mainSubjectName,
    setMainSubjectName,
    handleNewSkill,
    newSkill,
    setNewSkill,
    handleFilterRemoveOneItem,
    handleAddNewSkill,
    currentSkills,
    handlePushInfoToRedux,
    focusInput,
    clickEnterAddSkill,
    addSkillInputRef,
    handleToggleLearnedSkill,
    setRender,
    extraSkill,
    handleExtraSkill,
    handleAddExtraSkill,
    update_Title_LearnedSkills_TotalSkills,
  } = useMainSubjectData();
  const mainSubjectNameRef = useRef();

  useEffect(() => {
    focusInput(mainSubjectNameRef);
  }, []);

  return (
    <div>
      <Card>
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
              handlePushInfoToRedux();
              setMainSubjectName("");
            }}
          >
            Save
          </Button>
        </CardActions>
        <CardContent>
          <List>
            {mainSubjects.map((item, topLevelIndex) => {
              return (
                <ListItem key={item[0].title}>
                  <ListItemText>Name: {item[0].title}</ListItemText>
                  <ListItemText>
                    Tasks:
                    {item[1].map((task, lowLevelIndex) => {
                      return (
                        <div key={task.title}>
                          {task.title}
                          <Button
                            variant="outlined"
                            onClick={() => {
                              handleFilterRemoveOneItem(
                                topLevelIndex,
                                task.title
                              );
                              update_Title_LearnedSkills_TotalSkills(
                                topLevelIndex
                              );
                              setRender(task.title);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            onClick={() => {
                              handleToggleLearnedSkill(
                                topLevelIndex,
                                task.title,
                                lowLevelIndex
                              );
                            }}
                            variant="outlined"
                          >
                            Learned
                          </Button>
                        </div>
                      );
                    })}
                    <TextField
                      onChange={handleExtraSkill}
                      variant="outlined"
                      label="Add skill..."
                      value={extraSkill}
                    ></TextField>
                    <Button
                      onClick={() => {
                        handleAddExtraSkill(topLevelIndex);
                        update_Title_LearnedSkills_TotalSkills(topLevelIndex);
                      }}
                      variant="outlined"
                    >
                      Add skill
                    </Button>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
