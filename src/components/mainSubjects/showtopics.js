import React from "react";

export default function showtopics() {
  return (
    <div>
      <CardContent>
        <List>
          {mainSubjects.map((item, topLevelIndex) => {
            return (
              <ListItem key={item[0].title}>
                <ListItemText>Name: {item[0].title}</ListItemText>
                {/* <ListItemText>
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
                  </ListItemText> */}
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </div>
  );
}
