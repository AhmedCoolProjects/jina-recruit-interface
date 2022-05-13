import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { NavbarHome, UploadPdfsCard } from "../src/components";

const Home: NextPage = () => {
  const [pdfsList, setPdfsList] = useState<string[]>([]);
  const [cvsIsHidden, setCvsIsHidden] = useState<boolean>(true);
  const handleChangeCvsIsHidden = () => {
    setCvsIsHidden(!cvsIsHidden);
  };
  return (
    <div>
      <Head>
        <title>Dashboard | Jina Recrute</title>
      </Head>
      <div>
        <h1 className="text-3xl font-semibold my-2">Upload CVs</h1>

        <UploadPdfsCard setFilesList={setPdfsList} />
        <h1 className="text-3xl font-semibold my-2">Filters</h1>
        <NavbarHome
          cvsLength={pdfsList.length}
          handleChangeCvsIsHidden={handleChangeCvsIsHidden}
          cvsIsHidden={cvsIsHidden}
        />
        {/* todo change to !pdfsList.length === 0 */}
        {cvsIsHidden || !pdfsList ? null : (
          <>
            <h1 className="font-semibold text-3xl my-2">
              <span className="font-bold text-4xl">{`${pdfsList.length}`}</span>{" "}
              CVs Uploaded
            </h1>
            <Grid
              container
              style={{
                marginTop: 24,
              }}
              spacing={3}
            >
              {pdfsList.map((pdfItem, index) => (
                <Grid key={`${index}`} item xs={12} sm={6} md={4}>
                  <iframe src={pdfItem} className="h-[260px] w-full" />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
