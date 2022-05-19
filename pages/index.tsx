import { CircularProgress, Fade, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { NavbarHome, UploadPdfsCard } from "../src/components";

const Home: NextPage = () => {
  const [pdfsList, setPdfsList] = useState<string[]>([]);
  const [cvsIsHidden, setCvsIsHidden] = useState<boolean>(true);
  const handleChangeCvsIsHidden = () => {
    setCvsIsHidden(!cvsIsHidden);
  };
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSetLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/results");
    }, 4000);
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
          onClickApply={handleSetLoading}
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
      {loading ? (
        <div
          className="absolute top-0 left-0 w-full h-full 
      items-center z-10 justify-center flex flex-col
      bg-black opacity-50"
        >
          <Fade
            in={loading}
            style={{
              transitionDelay: loading ? "800ms" : "0ms",
            }}
            unmountOnExit
            color="primary"
          >
            <CircularProgress size={100} />
          </Fade>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
