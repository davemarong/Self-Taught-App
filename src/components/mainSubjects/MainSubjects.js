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

import {
  get_top_level_index,
  change_subject_type,
} from "../../redux/actions/index";
import { ListItemText } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import MainSubjectModal from "./modal/MainSubjectModal";
import useAddTopics from "../customHooks/useAddTopics";
import CreateSubjectModal from "./modal/CreateSubjectModal";
import SecondarySubjects from "../secondarySubjects/SecondarySubjects";

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
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const subjectType = useSelector((state) => state.subjectType);

  const mainSubjectNameRef = useRef();
  const [mainSubjectModal, setMainSubjectModal] = useState(false);
  const [createSubjectModal, setCreateSubjectModal] = useState();
  const [renderMainSubject, setRenderMainSubject] = useState("hei");
  const [subjectsType, setSubjectsType] = useState();
  const openMainSubjectModal = () => {
    setMainSubjectModal(true);
  };
  const closeMainSubjectModal = () => {
    setMainSubjectModal(false);
  };
  const openCreateSubjectModal = () => {
    setCreateSubjectModal(true);
  };
  const closeCreateSubjectModal = () => {
    setCreateSubjectModal(false);
  };

  return (
    <div>
      <Modal open={createSubjectModal} onClose={closeCreateSubjectModal}>
        <CreateSubjectModal subjectsType={subjectsType} />
      </Modal>

      <Card>
        <CardContent>
          <List>
            <Button
              onClick={() => {
                setSubjectsType("mainSubjects");
                openCreateSubjectModal();
              }}
            >
              Create new (main)
            </Button>

            <Grid container direction="row" spacing={4}>
              {mainSubjects.map((item, topLevelIndex) => {
                return (
                  <Grid item>
                    <Modal
                      open={mainSubjectModal}
                      onClose={closeMainSubjectModal}
                    >
                      <MainSubjectModal
                        setRenderMainSubject={setRenderMainSubject}
                      />
                    </Modal>
                    <Typography align="center">50%</Typography>
                    <CardActionArea
                      onClick={() => {
                        dispatch(get_top_level_index(topLevelIndex));
                        dispatch(change_subject_type(mainSubjects));
                        openMainSubjectModal();
                      }}
                    >
                      <Card
                        style={{
                          width: 200,
                          height: 110,
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <CardContent>
                          <Typography align="center">
                            {mainSubjects[topLevelIndex][0].title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                    <Typography align="center">
                      {mainSubjects[topLevelIndex][0].learnedSkills} of{" "}
                      {mainSubjects[topLevelIndex][0].totalSkills} skills
                      learned
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </List>

          <List>
            <Button
              onClick={() => {
                setSubjectsType("secondarySubjects");

                openCreateSubjectModal();
              }}
            >
              Create new (secondary)
            </Button>
            <Grid container direction="row" spacing={4}>
              {secondarySubjects.map((item, topLevelIndex) => {
                return (
                  <Grid item>
                    <Modal
                      open={mainSubjectModal}
                      onClose={closeMainSubjectModal}
                    >
                      <MainSubjectModal
                        setRenderMainSubject={setRenderMainSubject}
                      />
                    </Modal>
                    <Typography align="center">50%</Typography>

                    <CardActionArea
                      onClick={() => {
                        dispatch(get_top_level_index(topLevelIndex));
                        dispatch(change_subject_type(secondarySubjects));
                        openMainSubjectModal();
                      }}
                    >
                      <Card
                        styling={{
                          width: 150,
                          height: 80,
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CardContent>
                          <Typography align="center">
                            {secondarySubjects[topLevelIndex][0].title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                    <Typography>
                      {secondarySubjects[topLevelIndex][0].learnedSkills} of{" "}
                      {secondarySubjects[topLevelIndex][0].totalSkills} skills
                      learned
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
