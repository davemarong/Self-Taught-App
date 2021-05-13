import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AddTopicModal from "./AddTopicModal";
import useMainSubjectData from "../useMainSubjectData";
import Checkbox from "@material-ui/core/Checkbox";

export default function MainSubjectModal({ setRenderMainSubject }) {
  const {
    handleToggleLearnedSkill,
    handleFilterRemoveOneItem,
    update_Title_LearnedSkills_TotalSkills,
    setRender,
  } = useMainSubjectData();
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const [addTopicModal, setAddTopicModal] = useState(false);
  const [renderAgain, setRenderAgain] = useState();
  const openAddTopicModal = () => {
    setAddTopicModal(true);
  };
  const closeAddTopicModal = () => {
    setAddTopicModal(false);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Modal open={addTopicModal} onClose={closeAddTopicModal}>
          <AddTopicModal setRenderMainSubject={setRenderMainSubject} />
        </Modal>
        <Card>
          <Typography variant="h3">
            {mainSubjects[topLevelIndex][0].title}
          </Typography>
          <IconButton
            onClick={() => {
              openAddTopicModal();
            }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <Typography>
            Total learned: {mainSubjects[topLevelIndex][0].learnedSkills}
          </Typography>
          <Typography>
            Total Topics: {mainSubjects[topLevelIndex][0].totalSkills}
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Topic</TableCell>
                  <TableCell>Learned</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mainSubjects[topLevelIndex][1].map((item, lowLevelIndex) => (
                  <TableRow key={item.title}>
                    <TableCell component="th" scope="row">
                      {item.title}
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        handleToggleLearnedSkill(
                          topLevelIndex,
                          item.title,
                          lowLevelIndex
                        );
                        setRender(Math.floor(Math.random() * 100));
                      }}
                    >
                      {item.learned ? "yes" : "no"}
                    </TableCell>
                    <TableCell
                      onClick={() => {
                        handleFilterRemoveOneItem(topLevelIndex, item.title);
                        update_Title_LearnedSkills_TotalSkills(topLevelIndex);
                        setRenderMainSubject(item.title);
                      }}
                    >
                      Delete
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </div>
  );
}
