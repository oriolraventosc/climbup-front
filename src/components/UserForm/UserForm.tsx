import React, { PropsWithChildren } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import UserFormStyled from "./UserFormStyled";

interface LoginRegisterForm extends PropsWithChildren {
  title: string;
  buttonText: string;
  preLink: string;
  link: string;
  linkText: string;
  errorEmail: boolean;
  errorEmailText: string;
  errorPassword: boolean;
  errorPasswordText: string;
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
  errorEmail,
  errorEmailText,
  errorPassword,
  errorPasswordText,
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
          error={errorEmail}
          helperText={errorEmailText}
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
          name="Contraseña"
          error={errorPassword}
          helperText={errorPasswordText}
          onChange={handleFormChange}
          label="Contraseña"
          aria-label="Contraseña"
          aria-invalid="false"
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
          {preLink} <NavLink to={link}>{linkText}</NavLink>
        </Typography>
      </Box>
    </UserFormStyled>
  );
};

export default UserForm;
