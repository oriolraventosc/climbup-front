import React, { PropsWithChildren } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import UserFormStyled from "./UserFormStyled";

interface LoginRegisterForm extends PropsWithChildren {
  title: string;
  buttonText: string;
  preLink: string;
  link: string;
  linkText: string;
  handleSubmit: (event: React.SyntheticEvent) => Promise<void>;
  handleFormChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const UserForm = ({
  title,
  buttonText,
  preLink,
  link,
  linkText,
  handleSubmit,
  handleFormChange,
}: LoginRegisterForm): JSX.Element => {
  return (
    <UserFormStyled>
      <Typography
        component="h2"
        variant="h5"
        sx={{
          fontSize: {
            xxl: "2.5rem",
            xl: "2.2rem",
            lg: "2.2rem",
            md: "2.2rem",
            sm: "2.5rem",
            xs: "2.5rem",
          },
          pt: "3rem",
          fontWeight: "700",
        }}
      >
        {title}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{}}>
        <TextField
          className="input-field"
          margin="normal"
          fullWidth
          name="email"
          onChange={handleFormChange}
          label="Email"
          aria-label="Email"
          type="email"
          id="email"
        />
        <TextField
          className="input-field"
          margin="normal"
          fullWidth
          name="password"
          onChange={handleFormChange}
          label="Contraseña"
          aria-label="Contraseña"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: {
              xxl: "1.8rem",
              xl: "1.1rem",
              lg: "1.1rem",
              md: "1.1rem",
              sm: "1.3rem",
              xs: "1.3rem",
            },
            mt: "1rem",
            mb: "1rem",
          }}
        >
          {buttonText}
        </Button>
        <Typography
          variant="body2"
          className="link-area"
          sx={{
            fontSize: {
              xxl: "1.8rem",
              xl: "1.1rem",
              lg: "1.1rem",
              md: "1.1rem",
              sm: "1.3rem",
              xs: "1.3rem",
            },
            pb: "3rem",
          }}
        >
          {preLink} <Link to={link}>{linkText}</Link>
        </Typography>
      </Box>
    </UserFormStyled>
  );
};

export default UserForm;
