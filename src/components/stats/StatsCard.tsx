// Imports

// React
import React, { ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
interface Props {
  children: ReactNode;
}

export const StatsCard = ({ children }: Props) => {
  return (
    <Card style={{ marginBottom: 100, paddingBottom: 50 }}>{children}</Card>
  );
};
