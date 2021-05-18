import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import {
  get_top_level_index,
  change_subject_type,
} from "../../redux/actions/index";
import Modal from "@material-ui/core/Modal";
import MainSubjectModal from "./modal/MainSubjectModal";
import CreateSubjectModal from "./modal/CreateSubjectModal";

export default function MainSubjects() {
  const dispatch = useDispatch();
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

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
  const numberToPercent = (lowNumber, highNumber) => {
    const percent = (lowNumber / highNumber) * 100;
    return Math.trunc(percent);
  };
  return (
    <div>
      <Modal open={createSubjectModal} onClose={closeCreateSubjectModal}>
        <CreateSubjectModal
          subjectsType={subjectsType}
          closeCreateSubjectModal={closeCreateSubjectModal}
        />
      </Modal>
      <Modal open={mainSubjectModal} onClose={closeMainSubjectModal}>
        <MainSubjectModal
          closeMainSubjectModal={closeMainSubjectModal}
          setRenderMainSubject={setRenderMainSubject}
        />
      </Modal>
      <Card>
        <CardContent>
          <List>
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={() => {
                setSubjectsType("mainSubjects");
                openCreateSubjectModal();
              }}
            >
              Create new
            </Button>

            <Grid container direction="row" justify="center" spacing={4}>
              {mainSubjects.map((item, topLevelIndex) => {
                return (
                  <Grid item>
                    <Typography variant="h3" align="center">
                      {" "}
                      {numberToPercent(
                        mainSubjects[topLevelIndex][0].learnedSkills,
                        mainSubjects[topLevelIndex][0].totalSkills
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
                            mainSubjects[topLevelIndex][0].learnedSkills,
                            mainSubjects[topLevelIndex][0].totalSkills
                          )}%`,
                          height: 15,
                          borderRadius: 50,
                          background: "green",
                        }}
                      ></div>
                    </div>

                    <CardActionArea
                      onClick={() => {
                        dispatch(get_top_level_index(topLevelIndex));
                        dispatch(change_subject_type(mainSubjects));
                        openMainSubjectModal();
                      }}
                    >
                      <Card
                        style={{
                          borderRadius: 15,
                          width: 200,
                          height: 110,
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                          background:
                            "linear-gradient(10deg, #D6543C 10%, #D586F7 60%)",
                        }}
                      >
                        <CardContent>
                          <Typography variant="h4" align="center">
                            {mainSubjects[topLevelIndex][0].title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                    <Typography variant="body1" align="center">
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
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={() => {
                setSubjectsType("secondarySubjects");
                openCreateSubjectModal();
              }}
            >
              Create new
            </Button>
            <Grid container direction="row" justify="center" spacing={4}>
              {secondarySubjects.map((item, topLevelIndex) => {
                return (
                  <Grid item>
                    <Typography variant="h6" align="center">
                      {numberToPercent(
                        secondarySubjects[topLevelIndex][0].learnedSkills,
                        secondarySubjects[topLevelIndex][0].totalSkills
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
                            secondarySubjects[topLevelIndex][0].learnedSkills,
                            secondarySubjects[topLevelIndex][0].totalSkills
                          )}%`,
                          height: 15,
                          borderRadius: 50,
                          background: "green",
                        }}
                      ></div>
                    </div>

                    <CardActionArea
                      onClick={() => {
                        dispatch(get_top_level_index(topLevelIndex));
                        dispatch(change_subject_type(secondarySubjects));
                        openMainSubjectModal();
                      }}
                    >
                      <Card
                        style={{
                          borderRadius: 15,
                          width: 150,
                          height: 80,
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "auto",
                          background:
                            "linear-gradient(10deg, #D6AD3C 10%, #D586F7 60%)",
                        }}
                      >
                        <CardContent>
                          <Typography variant="h5" align="center">
                            {secondarySubjects[topLevelIndex][0].title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                    <Typography variant="body2" align="center">
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
