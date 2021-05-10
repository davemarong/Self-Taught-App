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
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
export default function MainSubjectModal() {
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal open={open} onClose={handleClose}> */}
      <Container maxWidth="sm">
        <Card>
          <Typography variant="h3">
            {mainSubjects[topLevelIndex][0].title}
          </Typography>
          <IconButton>
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
                {mainSubjects[topLevelIndex][1].map((item, index) => (
                  <TableRow key={item.title}>
                    <TableCell component="th" scope="row">
                      {item.title}
                    </TableCell>
                    <TableCell>{item.learned ? "yes" : "no"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
      {/* </Modal> */}
    </div>
  );
}
{
  /* <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div> */
}
