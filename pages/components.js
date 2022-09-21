import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

import YouTube from "react-youtube";
import axios from "axios";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
        },
    };
    const apiAddress = "https://www.googleapis.com/youtube/v3/videos";
    const snippet = {
        channelId: "tvNDENT",
    };
    const apiKey = "AIzaSyAFn23qxwu-hXYwMztNn_-wAANMUpyU6Xo";
    useEffect(async () => {
        const data = await axios.get(`${apiAddress}?part=snippet&snippet=${snippet}&key=${apiKey}`, {
            headers: {
                authorization:
                    "Bearer ya29.a0Aa4xrXNmIhT-yCw8GjQX0zGlOaZwiCC6hl97yzOXJhuRpgY-cp6wLUsHyoOrwo_jhAqmjNE4WNoq6qMbYLzlo93Yn02NtDq8jpnZTO5nu063yXvws16275vii5hoDGIyF1uboQZE2kQaa2E6lyQ5kxQVeHnGH7NOAFJsI60UaCgYKATASARMSFQEjDvL98DC_WjMyeBCK6_azqa-8dg0175",
            },
        });
        console.log("data:", data);
        return null;
    }, []);

    return (
        <div>
            <Header
                brand="NextJS Material Kit"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            <YouTube
                videoId="r3RGVcu_ZI0"
                opts={opts}
                onEnd={(e) => {
                    e.target.stopVideo(0);
                }}
            />
            <Parallax image="/img/nextjs_header.jpg">
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>NextJS Material Kit.</h1>
                                <h2 className={classes.subtitle}>A Badass Material Kit based on Material-UI and NextJS.</h2>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionBasics />
                <SectionNavbars />
                <SectionTabs />
                <SectionPills />
                <SectionNotifications />
                <SectionTypography />
                <SectionJavascript />
                <SectionCarousel />
                <SectionCompletedExamples />
                <SectionLogin />
                <GridItem md={12} className={classes.textCenter}>
                    <Link href="/login">
                        <a className={classes.link}>
                            <Button color="primary" size="lg" simple>
                                View Login Page
                            </Button>
                        </a>
                    </Link>
                </GridItem>
                <SectionExamples />
                <SectionDownload />
            </div>
            <Footer />
        </div>
    );
}
