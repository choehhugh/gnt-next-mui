import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import image1 from "../../public/img/mark.jpg";
import image2 from "../../public/img/mark-ga.jpg";

// mui

import Grid from "@mui/material/Unstable_Grid2";
import {
  Stack,
  Link,
  Box,
  Button,
  Typography,
  Modal,
  Divider,
} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const M_style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "90vh",
    bgcolor: "#EEF1F3",

    // border: '2px solid #000',
    // boxShadow: 24,
    px: 2,
  };
  // const card_style = {
  //   position: "absolute" as "absolute",
  //   overflowY: "auto",
  //   maxHeight: "852px",
  // };
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Button variant="outlined" onClick={handleOpen}>
        Outlined
      </Button>
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={M_style}>
          <Stack
            mb={2}
            sx={{
              height: "90px",
              // background: "#fff",
              display: "d-flex",
              alignItems: "center",
              justifyContent: "space-start",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: "3E4E58",
              }}
            >
              Attest - 433222.0.1
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                color: "3E4E58",
              }}
            >
              abnahmeprüfzeugnis 3.1 (DE+EN)
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Stack
                sx={{
                  borderRadius: "10px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-start",
                  overflowY: "auto",
                  overflowX: "hidden", // Add this line to hide horizontal scrollbar
                  maxHeight: "67vh",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#f1f1f1",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#888",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                  },
                }}
              >
                <Stack
                  sx={{
                    display: "d-flex",
                    alignItems: "center",
                    justifyContent: "space-start",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    m={2}
                    sx={{
                      fontSize: "10px",
                      width: "5px",
                      color: "#3E4E58",
                    }}
                  >
                    Seite Page
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    m={2}
                    sx={{
                      fontSize: "10px",
                      width: "5px",
                      color: "#3E4E58",
                    }}
                  >
                    2
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    display: "d-flex",
                    alignItems: "center",
                    justifyContent: "space-start",
                  }}
                >
                  <Grid md={6}>
                    <Typography
                      mx={2}
                      style={{ fontSize: "9px", color: "#3E4E58" }}
                    >
                      <Link href="your-link-url" target="_blank" rel="noopener">
                        BGH Edelstahl Siegen GmbH Industriestraße 9 57076 Siegen
                      </Link>
                    </Typography>
                    <Typography
                      mx={2}
                      style={{
                        fontSize: "14px",
                        color: "#3E4E58",
                        fontWeight: 600,
                      }}
                    >
                      Flender GmbH
                    </Typography>

                    <Typography
                      mx={2}
                      style={{
                        fontSize: "14px",
                        color: "#3E4E58",
                        fontWeight: 600,
                      }}
                    >
                      Alfred-Flender-Straße 77
                    </Typography>
                    <Typography
                      mx={2}
                      style={{
                        fontSize: "14px",
                        color: "#3E4E58",
                        fontWeight: 600,
                      }}
                    >
                      46395 Bocholt
                    </Typography>
                    <Typography
                      mx={2}
                      style={{
                        fontSize: "14px",
                        color: "#3E4E58",
                        fontWeight: 600,
                      }}
                    >
                      Deutschland
                    </Typography>
                  </Grid>
                  <Grid
                    md={6}
                    ml={2}
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Image
                        src={image1}
                        alt="Your Image"
                        width={40}
                        height={40}
                      />
                      <Typography
                        ml={1}
                        id="modal-modal-title"
                        style={{
                          fontSize: "30px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        BGH
                      </Typography>
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      my={3}
                      style={{
                        fontSize: "14px",
                        width: "300px",
                        fontWeight: 600,
                        color: "#3E4E58",
                      }}
                    >
                      BGH Edelstahl SiegenGmbH
                    </Typography>
                    <Stack
                      sx={{
                        display: "d-flex",
                        alignItems: "center",
                        justifyContent: "space-start",
                      }}
                    >
                      <Grid xs={4}>
                        <Typography
                          style={{
                            fontSize: "9px",
                            fontWeight: 600,
                            color: "#3E4E58",
                          }}
                        >
                          Zeugnis-Nr. Certificate no. No. de certificat
                        </Typography>
                      </Grid>
                      <Grid xs={4}>
                        <Typography
                          style={{
                            fontSize: "15px",
                            width: "80px",
                            fontWeight: 600,
                            color: "#3E4E58",
                          }}
                        >
                          431551
                        </Typography>
                      </Grid>
                    </Stack>
                    <Stack
                      mr={2}
                      sx={{
                        display: "d-flex",
                        alignItems: "center",
                        justifyContent: "space-start",
                      }}
                    >
                      <Grid xs={10}>
                        <Typography
                          style={{ fontSize: "9px", color: "#3E4E58" }}
                        >
                          Bescheinigung über Werkstoffprüfung nach DIN EN 10204
                          Certificate of material tests according to DIN EN
                          10204 Certificat des essais des matériaux selon DIN EN
                          10204
                        </Typography>
                      </Grid>
                      <Grid xs={2}>
                        <Typography
                          style={{
                            fontSize: "15px",
                            width: "80px",
                            fontWeight: 600,
                            color: "#3E4E58",
                          }}
                        >
                          3.1
                        </Typography>
                      </Grid>
                    </Stack>
                    <Stack
                      mr={2}
                      sx={{
                        display: "d-flex",
                        alignItems: "center",
                        justifyContent: "space-start",
                      }}
                    >
                      <Grid xs={12}>
                        <Typography
                          style={{ fontSize: "9px", color: "#3E4E58" }}
                        >
                          Die Lieferung entspricht den vereinbarten
                          Lieferbedingungen. Delivery in accordance with the
                          agreed terms of delivery. La livraison correspond aux
                          conditions de livraison convenues.
                        </Typography>
                      </Grid>
                    </Stack>
                    <Stack
                      mr={2}
                      sx={{
                        display: "d-flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid xs={6}>
                        <Typography
                          style={{ fontSize: "9px", color: "#3E4E58" }}
                        >
                          Zeichen des Lieferwerkes Trade mark Signe du
                          fournisseur
                        </Typography>
                      </Grid>
                      <Grid xs={6}>
                        <Typography
                          style={{ fontSize: "9px", color: "#3E4E58" }}
                        >
                          Stempel des Werkssachverständigen Inspector&apos;s stamp
                          Poincon de l&apos;inspecteur
                        </Typography>
                      </Grid>
                    </Stack>
                  </Grid>
                </Stack>
                <Stack
                  mx={2}
                  sx={{
                    display: "d-flex",
                    alignItems: "center",
                    justifyContent: "space-start",
                  }}
                >
                  <Grid xs={4}>
                    <Stack
                      sx={{
                        display: "d-flex",
                        alignItems: "center",
                        justifyContent: "space-start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "10px",
                          width: "40%",
                          color: "#3E4E58",
                        }}
                      >
                        Kunden-Bestell-Nr. Customer order no. Cde. no. du clie
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 600,
                          width: "60%",
                          color: "#3E4E58",
                        }}
                      >
                        015050017/00099366 Sonnenwellen
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={4}>
                    <Stack
                      sx={{
                        display: "d-flex",
                        alignItems: "center",
                        justifyContent: "space-start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "10px",
                          width: "40%",
                          color: "#3E4E58",
                        }}
                      >
                        BGH-Auftrags-Nr. BGH works no. BGH référence
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          width: "60%",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        015050-017-01
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={2}>
                    <Image
                      src={image2}
                      alt="Your Image"
                      width={40}
                      height={40}
                    />
                  </Grid>
                  <Grid xs={2}>
                    <Stack
                      sx={{
                        borderRadius: "100px",
                        borderColor: "#000",
                        border: "solid 1px",
                        alignItems: "center",
                        width: "46px",
                        height: "46px",
                        color: "#3E4E58",
                      }}
                    >
                      <Typography
                        mt={0.5}
                        sx={{
                          width: "55%",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        BGH Q07
                      </Typography>
                    </Stack>
                  </Grid>
                </Stack>
                <Stack
                  mb={2}
                  sx={{
                    border: "solid 2px #3E4E58",
                    width: "95%",
                    height: "auto",
                  }}
                >
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Erzeugnisform
                      </Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        sx={{
                          width: "55%",
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        Stab, rund, geschmiedet, geschält
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Product
                      </Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        sx={{
                          width: "55%",
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        Round bars,forged,peeled
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Werkstoff / Quality
                      </Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        1.6587 18CrNiMo7-6
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Anforderungen
                      </Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        sx={{
                          width: "55%",
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        TL 101 Rev. 20 06/20
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Requirements
                      </Typography>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        1.6587 18CrNiMo7-6 - Werkstoffqualität MQ ,ISO 6336 -5
                        Third ed. 2016-08-15 1.6587 18CrNiMo7-6
                        ,Zusatzvereinbarung TL 101 Rev. 20 08/20 1.6587
                        18CrNiMo7-6 ,DIN EN ISO 683 -3 Juni 2022 Die
                        Werkstoffqualität {"MQ"} nach ISO 6336-5 wird bestätigt.
                        Diese Bestätigung gilt nur für die Eigenschaften, die
                        vom Stahlhersteller beeinflußt werden können. Für
                        Eigenschaften, die von der konstruktiven Gestaltung, der
                        Endwärmebehandlung und der Einsatzbedingungen abhängig
                        sind, kann der Stahlhersteller keinerlei Garantie und
                        Gewährleistung übernehmen. The material quality {"MQ"}
                        acc. ISO 6336-5 will be confirmed. This confirmation is
                        only valid for the properties, which can be affected by
                        the steel producer. The steel producer cannot provide
                        any guarantee for properties, which are dependent on the
                        constructional design, the final heat treatment and the
                        application conditions. Bei Überschreitung der
                        regelwerksseitigen Abmessungsgrenze sind im Zweifelsfall
                        die Vorgaben des Regelwerks vom Bauteilhersteller zu
                        verifizieren. Seitens des Werkstoffherstellers werden
                        nur die, an der von ihm produzierten Geometrie,
                        überprüften Eigenschaften bestätigt. In case of doubt,
                        the specifications of the regulations must be verified
                        by the component manufacturer if the dimensional limit
                        of the regulations is exceeded. On the part of the
                        material manufacturer, only the properties verified on
                        the geometry, produced by him, are confirmed.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={2} m={"2px"}>
                    <Grid xs={4}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Besichtigung und Maßnachprüfung Inspection and
                        dimensional control Inspection et contrôle de dimension
                      </Typography>

                      <Typography
                        mt={1}
                        sx={{
                          fontSize: "12px",
                          color: "#3E4E58",
                        }}
                      >
                        ohne Beanstandung without objection
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={4}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Erschmelzung/Nachbehandlung Meltingprocess/secondary
                        refining Mode d`élaboration/traitement ultérieur
                      </Typography>
                      <Typography
                        mt={1}
                        sx={{
                          fontSize: "12px",
                          color: "#3E4E58",
                        }}
                      >
                        E - LF/VD
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={3}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Verwechslungsprüfung (spectroanalytisch) Identification
                        test (spectral-analysis) examination d`
                        identification(analyse spectrale)
                      </Typography>
                      <Typography
                        mt={1}
                        sx={{
                          fontSize: "12px",
                          color: "#3E4E58",
                        }}
                      >
                        ohne Beanstandung without objection
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={2} m={"2px"}>
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Pos. Item Poste
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Anzahl Quantity Quantité
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={6}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Abmessung Dimension Dimensions
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Gewicht Weight Poids
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Schmelz-Nr. Heat-No. No. de coulée
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={2} m={"2px"}>
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#3E4E58",
                        }}
                      >
                        17
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#3E4E58",
                        }}
                      >
                        2
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={6}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#3E4E58",
                        }}
                      >
                        450 mm rd. x 4621 + 5189 mm 738883 k
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#3E4E58",
                        }}
                      >
                        12260 kg
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#3E4E58",
                        }}
                      >
                        738883
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={2} m={"2px"}>
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        Schmelze Heat %
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={10}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#3E4E58",
                        }}
                      >
                        C Si Mn P S Cr Mo Ni Cu Nb V Ti
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={2} m={"2px"}>
                    <Grid xs={2}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        738883
                      </Typography>
                    </Grid>

                    <Grid xs={9}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#3E4E58",
                        }}
                      >
                        0,180 0,28 0,54 0,006 0,0011 1,66 0,30 1,46 0,171 0,001
                        0,004 0,001 Al N H(ppm) O Sn Sb Ca Al/N 0,027 0,0106
                        1,60 0,0009 0,005 0,001 0,0007 2,547
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={3}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        Wärmebehandlungszustand
                      </Typography>
                    </Grid>
                    <Grid xs={8}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        vergütet
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={3}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          color: "#3E4E58",
                        }}
                      >
                        Condition of heat treat
                      </Typography>
                    </Grid>
                    <Grid xs={8}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        quenched and tempered
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Probe-Nr. Test-No.
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={0.5}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Lage Loc.
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={0.5}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Temp. °C
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Rp0,2 N/mm²
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      ></Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Rm N/mm²
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        A5 %
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Z %
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Kerbschlagarbeit Impact value J
                      </Typography>
                    </Grid>

                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Probenform Shape of test piece Charpy-V
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Härte Hardness HB
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Probe-Nr. Test-No.
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={0.5}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Lage Loc.
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={0.5}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Temp. °C
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Rp0,2 N/mm²
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      ></Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Rm N/mm²
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        A5 %
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1}>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#3E4E58",
                        }}
                      >
                        Z %
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Kerbschlagarbeit Impact value J
                      </Typography>
                    </Grid>

                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Probenform Shape of test piece Charpy-V
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={1.5}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Härte Hardness HB
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={2} m={"2px"}>
                    <Grid xs={4}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Anlagen Encl. Annexe
                      </Typography>

                      <Typography
                        mt={1}
                        sx={{
                          fontSize: "12px",
                          color: "#3E4E58",
                        }}
                      >
                        UT-Zeugnis / UT cert
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={4}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Siegen,den Place and date Lieu et date
                      </Typography>
                      <Typography
                        mt={1}
                        sx={{
                          fontSize: "12px",
                          color: "#3E4E58",
                        }}
                      >
                        15.06.2023
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid xs={3}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Abnahmebeauftragter Inspector representative Inspecteur
                        de réception
                      </Typography>
                      <Typography
                        mt={1}
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Langer
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container spacing={1} m={"2px"}>
                    <Grid xs={6}>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        Das Zeugnis wurde maschinell erstellt und ist auch ohne
                        Unterschrift gültig.
                      </Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography
                        sx={{
                          fontSize: "7px",
                          fontWeight: 600,
                          color: "#3E4E58",
                        }}
                      >
                        This certificate was generated by data system and it is
                        valid without signature as well.Ce certificat a été
                        établi sur système informatique et est valable sans
                        signature aussi. without signature as wel
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={4}>
              <Stack
                mb={2}
                sx={{
                  borderRadius: "10px",
                  height: "155px",
                  background: "#fff",
                  display: "d-flex",
                  alignItems: "center",
                  justifyContent: "space-start",
                }}
              ></Stack>
              <Stack
                mb={2}
                sx={{
                  borderRadius: "10px",
                  height: "155px",
                  background: "#fff",
                  display: "d-flex",
                  alignItems: "center",
                  justifyContent: "space-start",
                }}
              ></Stack>
              <Stack
                sx={{
                  height: "155px",
                  background: "#fff",
                  display: "d-flex",
                  alignItems: "center",
                  justifyContent: "space-start",
                }}
              ></Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </main>
  );
}
