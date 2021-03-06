import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import {
  change_main_subjects,
  get_top_level_index,
  change_subject_type,
} from "../../redux/actions/index";
import Modal from "@material-ui/core/Modal";
import MainSubjectModal from "./modal/MainSubjectModal";
import CreateSubjectModal from "./modal/CreateSubjectModal";
import DeleteSubjectModal from "./modal/DeleteSubjectModal";
import usePushDataToServer from "../customHooks/usePushDataToServer";
import { motion } from "framer-motion";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";

import "../../styles/Home.css";
import Introduction from "../introduction/Introduction";

export default function MainSubjects() {
  const dispatch = useDispatch();
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  const [mainSubjectModal, setMainSubjectModal] = useState({
    boolean: false,
    index: "",
  });
  const [createSubjectModal, setCreateSubjectModal] = useState();
  const [deleteSubjectModal, setDeleteSubjectModal] = useState({
    boolean: false,
    index: 0,
    subject: "",
  });
  const [introductionModal, setIntroductionModal] = useState();
  const [renderMainSubject, setRenderMainSubject] = useState("hei");
  const [subjectsType, setSubjectsType] = useState();
  const [deleteOption, setDeleteOption] = useState(false);
  const { updateMainSubjectsInServer, updateSecondarySubjectsInServer } =
    usePushDataToServer();
  const openMainSubjectModal = (subjectIndex, subject) => {
    setMainSubjectModal({
      boolean: true,
      index: subjectIndex,
      subject: subject,
    });
  };
  const closeMainSubjectModal = () => {
    if (mainSubjectModal.subject === "mainsubject") {
      updateMainSubjectsInServer(mainSubjects);
    } else if (mainSubjectModal.subject === "secondarysubject") {
      updateSecondarySubjectsInServer(secondarySubjects);
    }
    setMainSubjectModal({ boolean: false, index: 0, subject: "" });
  };
  const openCreateSubjectModal = () => {
    setCreateSubjectModal(true);
  };
  const closeCreateSubjectModal = () => {
    setCreateSubjectModal(false);
  };
  const openDeleteSubjectModal = (index, subject) => {
    setDeleteSubjectModal({ boolean: true, index: index, subject: subject });
  };
  const closeDeleteSubjectModal = () => {
    setDeleteSubjectModal({ boolean: false, index: 0, subject: "" });
  };
  const openIntroductionModal = () => {
    setIntroductionModal(true);
  };
  const closeIntroductionModal = () => {
    setIntroductionModal(false);
  };

  const handleToggleDeleteOption = () => {
    setDeleteOption(!deleteOption);
  };

  const numberToPercent = (lowNumber, highNumber) => {
    const percent = (lowNumber / highNumber) * 100;
    return Math.trunc(percent);
  };
  useEffect(() => {
    const watchedIntroductionVideo = localStorage.getItem(
      "watchedIntroductionVideo"
    );
    if (!watchedIntroductionVideo) {
      openIntroductionModal();
    }
    localStorage.setItem("watchedIntroductionVideo", true);
  }, []);
  return (
    <div>
      <Modal
        open={introductionModal}
        onClose={closeIntroductionModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={introductionModal}>
          <div style={{ maxWidth: 560, margin: "auto", outline: "none" }}>
            <Introduction closeIntroductionModal={closeIntroductionModal} />
          </div>
        </Zoom>
      </Modal>
      <Modal
        open={createSubjectModal}
        onClose={closeCreateSubjectModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={createSubjectModal}>
          <div style={{ maxWidth: 700, margin: "auto", outline: "none" }}>
            <CreateSubjectModal
              subjectsType={subjectsType}
              closeCreateSubjectModal={closeCreateSubjectModal}
            />
          </div>
        </Zoom>
      </Modal>
      <Modal
        open={deleteSubjectModal.boolean}
        onClose={closeDeleteSubjectModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={deleteSubjectModal.boolean}>
          <div style={{ maxWidth: 560, margin: "auto", outline: "none" }}>
            <DeleteSubjectModal
              modalIndex={deleteSubjectModal}
              closeDeleteSubjectModal={closeDeleteSubjectModal}
              deleteSubjectModal={deleteSubjectModal}
            />
          </div>
        </Zoom>
      </Modal>
      <Modal
        open={mainSubjectModal.boolean}
        onClose={closeMainSubjectModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={mainSubjectModal.boolean}>
          <div
            style={{
              // maxWidth: 850,
              margin: "auto",
              padding: 0,
              outline: "none",
            }}
          >
            <MainSubjectModal
              closeMainSubjectModal={closeMainSubjectModal}
              setRenderMainSubject={setRenderMainSubject}
              mainSubjectModal={mainSubjectModal}
            />
          </div>
        </Zoom>
      </Modal>
      <Card style={{ marginBottom: 100 }}>
        <CardContent>
          <List>
            <Grid container direction="row" justify="center" spacing={4}>
              <Grid container justify="flex-end" item xs={12}>
                <Button
                  style={deleteOption ? { background: "#9e9e9eb0" } : null}
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  variant="outlined"
                  onClick={handleToggleDeleteOption}
                  endIcon={<EditRoundedIcon />}
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center" variant="h2">
                  Main subjects
                </Typography>
              </Grid>
              {mainSubjects.map((subject, topLevelIndex) => {
                return (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    item
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      boxShadow: "0 0 3px",
                      width: 250,
                      margin: "20px",
                    }}
                    component={motion.div}
                    whileHover={{
                      // scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => {
                      dispatch(get_top_level_index(topLevelIndex));
                      dispatch(change_subject_type(mainSubjects));
                    }}
                  >
                    <Typography variant="h3" align="center">
                      {" "}
                      {numberToPercent(
                        subject[0].learnedSkills,
                        subject[0].totalSkills
                      )}
                      %
                    </Typography>

                    <div
                      style={{
                        width: 200,
                        height: 15,
                        borderRadius: 50,
                        background: "grey",
                        marginBottom: 20,
                        marginTop: 5,
                      }}
                    >
                      <div
                        style={{
                          width: `
                          ${numberToPercent(
                            subject[0].learnedSkills,
                            subject[0].totalSkills
                          )}%`,
                          height: 15,
                          borderRadius: 50,
                          background: "#57ca10",
                        }}
                      ></div>
                    </div>

                    <Card
                      style={{
                        borderRadius: 15,
                        width: 200,
                        height: 110,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        background:
                          "linear-gradient(10deg, #ff5e41 10%, #c445fb 60%)",
                      }}
                    >
                      <Typography variant="h4" align="center">
                        {subject[0].title}
                      </Typography>
                    </Card>
                    <Typography variant="body1" align="center">
                      {subject[0].learnedSkills} of {subject[0].totalSkills}{" "}
                      topics learned
                    </Typography>
                    <Grid
                      container
                      justify="flex-end"
                      style={{ margin: "10px 0" }}
                    >
                      <Button
                        style={{ margin: "10px 0" }}
                        onClick={() => {
                          openMainSubjectModal(topLevelIndex, "mainsubject");
                        }}
                        component={motion.div}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3 },
                        }}
                        variant="outlined"
                        endIcon={<OpenInNewRoundedIcon />}
                      >
                        Open
                      </Button>
                      {deleteOption ? (
                        <Button
                          style={{ backgroundColor: "#ff2929", color: "white" }}
                          variant="outlined"
                          onClick={() => {
                            openDeleteSubjectModal(
                              topLevelIndex,
                              "mainsubject"
                            );
                          }}
                          component={motion.div}
                          whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 },
                          }}
                          endIcon={<DeleteForeverRoundedIcon />}
                        >
                          Delete subject
                        </Button>
                      ) : null}
                    </Grid>
                  </Grid>
                );
              })}
              <Grid container justify="flex-end" item xs={12} spacing={5}>
                <Grid item>
                  <Button
                    style={{
                      background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
                    }}
                    component={motion.div}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                    variant="outlined"
                    endIcon={<AddIcon />}
                    onClick={() => {
                      setSubjectsType("mainSubjects");
                      openCreateSubjectModal();
                    }}
                  >
                    Create new
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <List>
            <Grid container direction="row" justify="center" spacing={4}>
              <Grid container justify="flex-end" item xs={12}>
                <Button
                  style={deleteOption ? { background: "#9e9e9eb0" } : null}
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  variant="outlined"
                  onClick={handleToggleDeleteOption}
                  endIcon={<EditRoundedIcon />}
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center" variant="h2">
                  Secondary subjects
                </Typography>
              </Grid>
              {secondarySubjects.map((subject, topLevelIndex) => {
                return (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    item
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      boxShadow: "0 0 3px",
                      width: 250,
                      margin: "50px 20px",
                    }}
                    component={motion.div}
                    whileHover={{
                      // scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => {
                      dispatch(get_top_level_index(topLevelIndex));
                      dispatch(change_subject_type(secondarySubjects));
                    }}
                  >
                    <Typography variant="h6" align="center">
                      {numberToPercent(
                        subject[0].learnedSkills,
                        subject[0].totalSkills
                      )}
                      %
                    </Typography>

                    <div
                      style={{
                        width: 150,
                        height: 15,
                        borderRadius: 50,
                        background: "grey",
                        marginBottom: 20,
                        marginTop: 5,
                      }}
                    >
                      <div
                        style={{
                          width: `${numberToPercent(
                            subject[0].learnedSkills,
                            subject[0].totalSkills
                          )}%`,
                          height: 15,
                          borderRadius: 50,
                          background: "#57ca10",
                        }}
                      ></div>
                    </div>

                    <Card
                      style={{
                        borderRadius: 15,
                        width: 150,
                        height: 80,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        margin: "auto",
                        background:
                          "linear-gradient(10deg, #D6AD3C 10%, #c445fb 60%)",
                      }}
                    >
                      <Typography variant="h5" align="center">
                        {subject[0].title}
                      </Typography>
                    </Card>
                    <Typography variant="body2" align="center">
                      {subject[0].learnedSkills} of {subject[0].totalSkills}{" "}
                      topics learned
                    </Typography>
                    <Grid
                      container
                      justify="flex-end"
                      style={{ margin: "10px 0" }}
                    >
                      <Button
                        style={{ margin: "10px 0" }}
                        onClick={() => {
                          openMainSubjectModal(
                            topLevelIndex,
                            "secondarysubject"
                          );
                        }}
                        component={motion.div}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3 },
                        }}
                        variant="outlined"
                        endIcon={<OpenInNewRoundedIcon />}
                      >
                        Open
                      </Button>
                      {deleteOption ? (
                        <Button
                          style={{ backgroundColor: "#ff2929", color: "white" }}
                          variant="outlined"
                          onClick={() => {
                            openDeleteSubjectModal(
                              topLevelIndex,
                              "secondarysubject"
                            );
                          }}
                          component={motion.div}
                          whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 },
                          }}
                          endIcon={<DeleteForeverRoundedIcon />}
                        >
                          Delete subject
                        </Button>
                      ) : null}
                    </Grid>
                  </Grid>
                );
              })}
              <Grid container justify="flex-end" item xs={12}>
                <Button
                  style={{
                    background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
                  }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  variant="outlined"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    setSubjectsType("secondarySubjects");
                    openCreateSubjectModal();
                  }}
                >
                  Create new
                </Button>
              </Grid>
            </Grid>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
