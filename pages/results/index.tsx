import type { NextPage } from "next";
import Head from "next/head";
import { ResultCard } from "../../src/components";
import { Images } from "../../src/constants";

const ResultsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Results | Jina Recrute</title>
      </Head>
      <div>
        <ResultCard
          name="Ahmed Bargady"
          cv="/go.pdf"
          duration="1-2 months"
          email="ahmed.bargady@outlook.com"
          foundedSkills={[
            "ReactJS",
            "Typescirpt",
            "flaskAPI",
            "python",
            "JS",
            "Problem Solving",
          ]}
          location="Rabat"
          major="Data Science"
          missingSkills={[
            "Communication",
            "Soft skills",
            "react-native",
            "dart",
            "fluter",
          ]}
          offer="Stage PFA"
          pages={1}
          phone="06.72.62.87.44"
          profilePicture={Images.me2021}
          school="ESI Rabat"
          workingMethod="Présentiel"
          score={1}
        />
        <ResultCard
          name="Ahmed Bargady"
          cv="/go.pdf"
          duration="1-2 months"
          email="ahmed.bargady@outlook.com"
          foundedSkills={[
            "ReactJS",
            "Typescirpt",
            "flaskAPI",
            "python",
            "JS",
            "Problem Solving",
          ]}
          location="Rabat"
          major="Data Science"
          missingSkills={[
            "Communication",
            "Soft skills",
            "react-native",
            "dart",
            "fluter",
          ]}
          offer="Stage PFA"
          pages={1}
          phone="06.72.62.87.44"
          profilePicture={Images.me2021}
          school="ESI Rabat"
          workingMethod="Présentiel"
          score={2}
        />
        <ResultCard
          name="Ahmed Bargady"
          cv="/go.pdf"
          duration="1-2 months"
          email="ahmed.bargady@outlook.com"
          foundedSkills={[
            "ReactJS",
            "Typescirpt",
            "flaskAPI",
            "python",
            "JS",
            "Problem Solving",
          ]}
          location="Rabat"
          major="Data Science"
          missingSkills={[
            "Communication",
            "Soft skills",
            "react-native",
            "dart",
            "fluter",
          ]}
          offer="Stage PFA"
          pages={1}
          phone="06.72.62.87.44"
          profilePicture={Images.me2021}
          school="ESI Rabat"
          workingMethod="Présentiel"
          score={3}
        />
      </div>
    </div>
  );
};

export default ResultsPage;
