import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { searchedSkillsList } from "../../constants";

type NavbarHomeProps = {
  cvsIsHidden: boolean;
  handleChangeCvsIsHidden: () => void;
  cvsLength: number;
};

export function NavbarHome(props: NavbarHomeProps) {
  const { cvsIsHidden, handleChangeCvsIsHidden, cvsLength } = props;
  const router = useRouter();
  const [offer, setOffer] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [workingMethod, setWorkingMethod] = useState<string>("");
  return (
    <Paper elevation={3} className="p-4 my-4 ">
      <div className="flex flex-row items-center justify-between w-full h-full">
        <Button
          onClick={handleChangeCvsIsHidden}
          color="primary"
          variant="outlined"
        >
          {cvsIsHidden ? "Display CVs" : "Hide CVs"}
        </Button>
        <h1
          className="font-semibold
      text-xl"
        >
          <span className="font-bold text-2xl">{`${cvsLength}`}</span> CVs
          Uploaded
        </h1>
        <Button onClick={() => router.push("/results")} variant="outlined">
          Apply Filters
        </Button>
      </div>
      <Autocomplete
        multiple
        options={searchedSkillsList}
        getOptionLabel={(option) => option}
        className="my-4"
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Searched Skills"
            placeholder="Skills needed"
          />
        )}
      />
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={4}>
          <div className="w-full h-full items-center justify-center flex flex-col">
            <FormControlLabel control={<Checkbox />} label="Profile picture" />
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <div className="w-full h-full items-center justify-center flex flex-col">
            <FormControlLabel control={<Checkbox />} label="Only one page" />
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <TextField
            type="number"
            placeholder="How much needed"
            fullWidth
            variant="outlined"
            label="Persons Number"
            className="p-3"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="select-offer-label">Offer</InputLabel>
            <Select
              labelId="select-offer-label"
              value={offer}
              label="Offer"
              onChange={(e: SelectChangeEvent) => {
                setOffer(e.target.value as string);
              }}
            >
              <MenuItem value="observation">Stage d&apos;observation</MenuItem>
              <MenuItem value="pfa">PFA</MenuItem>
              <MenuItem value="pfe">PFE</MenuItem>
              <MenuItem value="cdi">C.D.I</MenuItem>
              <MenuItem value="freelance">C Freelance</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="select-duration-label">Duration</InputLabel>
            <Select
              labelId="select-duration-label"
              value={duration}
              label="Duration"
              onChange={(e: SelectChangeEvent) => {
                setDuration(e.target.value as string);
              }}
            >
              <MenuItem value="1-2">1-2 months</MenuItem>
              <MenuItem value="3-4">3-4 months</MenuItem>
              <MenuItem value="5-6">5-6 months</MenuItem>
              <MenuItem value="6-12">6-12 months</MenuItem>
              <MenuItem value="year-plus">1+ year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="select-workingMethod-label">
              Working Method
            </InputLabel>
            <Select
              labelId="select-workingMethod-label"
              value={workingMethod}
              label="Working Method"
              onChange={(e: SelectChangeEvent) => {
                setWorkingMethod(e.target.value as string);
              }}
            >
              <MenuItem value="presentiel">Full time</MenuItem>
              <MenuItem value="hybrid">Part time</MenuItem>
              <MenuItem value="distance">Remote</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
