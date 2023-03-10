import { SelectChangeEvent, TextField } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {
  addActivityActionCreator,
  addInstallationActionCreator,
  addLocationActionCreator,
} from "../../redux/features/FIlterSlicer/FilterSlice";
import { useAppDispatch } from "../../redux/hooks";
import FilterContainerStyled from "./FilterContainerStyled";

const FilterPrivate = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [installation, setInstallation] = useState("");
  const [activity, setActivities] = useState("");
  const [location, setLocation] = useState("");
  const handleChangeInstallation = (event: SelectChangeEvent) => {
    setInstallation(event.target.value);
  };
  const handleChangeActivities = (event: SelectChangeEvent) => {
    setActivities(event.target.value);
  };

  const handleChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  useEffect(() => {
    dispatch(addInstallationActionCreator(installation));
    dispatch(addActivityActionCreator(activity));
    dispatch(addLocationActionCreator(location));
  }, [installation, activity, location, dispatch]);
  return (
    <FilterContainerStyled>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Nombre de ciudad/pueblo"
        className="search"
        aria-label="search"
        aria-invalid="false"
        onChange={handleChangeLocation}
        value={location.toLowerCase()}
      />
      <FormControl className="filter">
        <InputLabel id="instalaciones">Instalaciones</InputLabel>
        <Select
          id="instalaciones"
          value={installation}
          label="Instalaciones"
          onChange={handleChangeInstallation}
        >
          <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          <MenuItem value={"Cafeteria"}>Cafeteria</MenuItem>
          <MenuItem value={"Campus"}>Campus</MenuItem>
          <MenuItem value={"Moonboard"}>Moonboard</MenuItem>
          <MenuItem value={"Multipresa"}>Multipresa</MenuItem>
          <MenuItem value={"Muro de velocidad"}>Muro de velocidad</MenuItem>
          <MenuItem value={"Tienda"}>Tienda</MenuItem>
          <MenuItem value={"V??as con Autobelay"}>V??as con Autobelay</MenuItem>
          <MenuItem value={"V??as con cuerda"}>V??as con cuerda</MenuItem>
          <MenuItem value={"Zona b??lder"}>Zona b??lder</MenuItem>
          <MenuItem value={"Zona core"}>Zona core</MenuItem>
          <MenuItem value={"Zona musculaci??n"}>Zona musculaci??n</MenuItem>
          <MenuItem value={"Zona ni??os"}>Zona ni??os</MenuItem>
          <MenuItem value={"Kilterboard"}>Kilterboard</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="filter">
        <InputLabel id="actividades">Actividades</InputLabel>
        <Select
          id="actividades"
          value={activity}
          label="Actividades"
          onChange={handleChangeActivities}
        >
          <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          <MenuItem value={"Ni??os"}>Ni??os</MenuItem>
          <MenuItem value={"Grupos"}>Grupos</MenuItem>
          <MenuItem value={"Empresas"}>Empresas</MenuItem>
          <MenuItem value={"Escuela de escalada"}>Escuela de escalada</MenuItem>
          <MenuItem value={"Clases particulares"}>Clases particulares</MenuItem>
          <MenuItem value={"Cumplea??os"}>Cumplea??os</MenuItem>
          <MenuItem value={"Salidas a roca"}>Salidas a roca</MenuItem>
          <MenuItem value={"Formaci??n"}>Formaci??n</MenuItem>
          <MenuItem value={"Campamentos"}>Campamentos</MenuItem>
        </Select>
      </FormControl>
      <Button
        className="button"
        sx={{
          fontSize: {
            xxl: "1.5rem",
            xl: "0.9rem",
            lg: "0.9rem",
            md: "0.9rem",
            sm: "1rem",
            xs: "1rem",
          },
        }}
      >
        A??adir roc??dromo
      </Button>
    </FilterContainerStyled>
  );
};

export default FilterPrivate;
