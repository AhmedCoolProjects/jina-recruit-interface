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
          name="HILMI ANAS"
          cv="/hilmi.pdf"
          duration="5-6 months"
          email="anas.hilmi.tyln@gmail.com"
          foundedSkills={[
            "Gestion de recrutement",
            "Marketing",
            "Digitalisation RH",
            "Gestion de formation",
            "Gestion de projet",
            "Pack Office",
            "GPEC",
          ]}
          location="Rabat"
          major="Master Management Stratégique des Ressources Humaines"
          missingSkills={["Communication"]}
          offer="Stage PFE"
          pages={2}
          phone="06.08.28.25.43"
          profilePicture={Images.hilmi}
          school=" SOUISSI Mohamed V Rabat"
          workingMethod="Présentiel"
          score={1}
        />
        <ResultCard
          name="Marwa ZOUINE"
          cv="/marwa.pdf"
          duration="5-6 months"
          email="marwa.zouine@um5s.net.ma"
          foundedSkills={[
            "Pack Office",
            "Gestion d'équipe",
            "Organisation des événements",
            "Communication",
          ]}
          location="Rabat"
          major="MASTER CCA (Comptabilié, Contrôle et Audit)"
          missingSkills={["GPEG", "Gestion de recrutement"]}
          offer="Stage PFE"
          pages={1}
          phone="06.10.93.89.48"
          profilePicture={Images.marwa}
          school=" SOUISSI SOUISSI Rabat"
          workingMethod="Présentiel"
          score={2}
        />
        <ResultCard
          name="Rania AFQIR"
          cv="/rania.pdf"
          duration="5-6 months"
          email="afqir.rania@gmail.com"
          foundedSkills={[
            "Pack Office",
            "Gestion d'équipe",
            "Marketing",
            "Communication",
          ]}
          location="Rabat"
          major="Master Management Stratégique des Ressources Humaines"
          missingSkills={["GPEG", "Gestion de recrutement"]}
          offer="Stage PFE"
          pages={2}
          phone="07.01.27.34.02"
          profilePicture={Images.rania}
          school="FSJES SOUISSI Rabat"
          workingMethod="Présentiel"
          score={3}
        />
      </div>
    </div>
  );
};

export default ResultsPage;
