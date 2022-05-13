import { Grid, Paper } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { InfosCardItem, InfosCardItemListImage } from "./InfosCardItem";

type ResultCardProps = {
  score: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  school: string;
  major: string;
  foundedSkills: string[];
  missingSkills: string[];
  profilePicture: StaticImageData;
  pages: number;
  offer: string;
  duration: string;
  workingMethod: string;
  cv: string;
};

export function ResultCard(props: ResultCardProps) {
  const {
    score,
    cv,
    duration,
    email,
    foundedSkills,
    location,
    major,
    missingSkills,
    name,
    offer,
    pages,
    phone,
    profilePicture,
    school,
    workingMethod,
  } = props;
  return (
    <Paper elevation={3} className="my-3 p-4">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          {score === 1 ? (
            <h1 className="font-bold text-3xl">
              1<sup>st</sup>
            </h1>
          ) : score === 2 ? (
            <h1 className="font-bold text-3xl">
              2<sup>nd</sup>
            </h1>
          ) : (
            <h1 className="font-bold text-3xl">
              3<sup>rd</sup>
            </h1>
          )}
          <div>
            <InfosCardItem cle="Name" value={name} />
            <InfosCardItem cle="Email" value={email} />
            <InfosCardItem cle="Phone" value={phone} />
            <InfosCardItem cle="Location" value={location} />
            <InfosCardItem cle="School" value={school} />
            <InfosCardItem cle="Major" value={major} />
          </div>
          {/* analysis */}
          <div>
            <InfosCardItemListImage cle="Founded Skills" list={foundedSkills} />
            <InfosCardItemListImage cle="Missing Skills" list={missingSkills} />
            <InfosCardItemListImage
              cle="Profile Picture"
              image={profilePicture}
            />
            <InfosCardItem cle="Pages" value={`${pages}`} />
            <InfosCardItem cle="Offer" value={offer} />
            <InfosCardItem cle="Duration" value={duration} />
            <InfosCardItem cle="Working Method" value={workingMethod} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <div className="w-full relative">
            <iframe src={cv} className="w-full h-[500px]" />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
