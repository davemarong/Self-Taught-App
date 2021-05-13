import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { get_top_level_index } from "../../redux/actions/index";
import { ListItemText } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import MainSubjectModal from "./modal/MainSubjectModal";
import useAddTopics from "../customHooks/useAddTopics";

export default function MainSubjects() {
  const {
    currentSkills,
    setCurrentSkills,
    extraSkill,
    newSkill,
    setNewSkill,
    handleNewSkill,
    handleAddNewSkill,
    handleAddExtraSkill,
    setRender,
    clickEnterAddSkill,
    focusInput,
    addSkillInputRef,
    handlePushInfoToRedux,
    mainSubjectName,
    handleMainSubjectName,
    setMainSubjectName,
  } = useAddTopics();
  const dispatch = useDispatch();
  const mainSubjectNameRef = useRef();
  const mainSubjects = useSelector((state) => state.mainSubjects);

  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const [mainSubjectModal, setMainSubjectModal] = useState(false);
  const [renderMainSubject, setRenderMainSubject] = useState("hei");
  useEffect(() => {
    focusInput(mainSubjectNameRef);
  }, []);

  const openMainSubjectModal = () => {
    setMainSubjectModal(true);
  };
  const closeMainSubjectModal = () => {
    setMainSubjectModal(false);
  };
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
                <Card>
                  <Modal
                    open={mainSubjectModal}
                    onClose={closeMainSubjectModal}
                  >
                    <MainSubjectModal
                      setRenderMainSubject={setRenderMainSubject}
                    />
                  </Modal>
                  <CardActions
                    onClick={() => {
                      dispatch(get_top_level_index(topLevelIndex));
                      openMainSubjectModal();
                    }}
                  >
                    {mainSubjects[topLevelIndex][0].title}
                  </CardActions>
                  <CardContent>
                    {mainSubjects[topLevelIndex][0].learnedSkills} of{" "}
                    {mainSubjects[topLevelIndex][0].totalSkills} skills learned
                  </CardContent>
                </Card>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
