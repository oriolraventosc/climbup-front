import { TextField } from "@mui/material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import useClimbingWall from "../../hooks/climbingWall/useClimbingWall";
import FilterContainerStyled from "./FilterContainerStyled";

const Filter = (): JSX.Element => {
  const [installations, setInstallation] = useState("");
  const [activities, setActivities] = useState("");
  const [location, setLocation] = useState("");
  const { loadAllClimbingWalls } = useClimbingWall();

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
    loadAllClimbingWalls(location, activities, installations);
  }, [loadAllClimbingWalls, location, activities, installations]);
  return (
    <FilterContainerStyled>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Nombre de ciudad/pueblo"
        className="search"
        aria-label="search"
        onChange={handleChangeLocation}
      />
      <FormControl className="filter">
        <InputLabel id="instalaciones">Instalaciones</InputLabel>
        <Select
          id="instalaciones"
          value={installations}
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
          <MenuItem value={"Vías con Autobelay"}>Vías con Autobelay</MenuItem>
          <MenuItem value={"Vías con cuerda"}>Vías con cuerda</MenuItem>
          <MenuItem value={"Zona búlder"}>Zona búlder</MenuItem>
          <MenuItem value={"Zona core"}>Zona core</MenuItem>
          <MenuItem value={"Zona musculación"}>Zona musculación</MenuItem>
          <MenuItem value={"Zona niños"}>Zona niños</MenuItem>
          <MenuItem value={"Kilterboard"}>Kilterboard</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="filter">
        <InputLabel id="actividades">Actividades</InputLabel>
        <Select
          id="actividades"
          value={activities}
          label="Actividades"
          onChange={handleChangeActivities}
        >
          <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          <MenuItem value={"Niños"}>Niños</MenuItem>
          <MenuItem value={"Grupos"}>Grupos</MenuItem>
          <MenuItem value={"Empresas"}>Empresas</MenuItem>
          <MenuItem value={"Escuela de escalada"}>Escuela de escalada</MenuItem>
          <MenuItem value={"Clases particulares"}>Clases particulares</MenuItem>
          <MenuItem value={"Cumpleaños"}>Cumpleaños</MenuItem>
          <MenuItem value={"Salidas a roca"}>Salidas a roca</MenuItem>
          <MenuItem value={"Formación"}>Formación</MenuItem>
          <MenuItem value={"Campamentos"}>Campamentos</MenuItem>
        </Select>
      </FormControl>
    </FilterContainerStyled>
  );
};

export default Filter;
