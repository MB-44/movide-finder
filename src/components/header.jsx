import React from "react";
import { 
    Header, 
    Container, 
    Burger, 
    Group, 
    createStyles, 
    Paper, Text, 
    Transition, MantineProvider  } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useEffect } from "react";


const useStyles = createStyles((theme) => ({
    root: {

    }
}))

function PageHeader() {
    const {classes, cx} = useStyles();
    const [ opened, { toggle, close }] = useDisclosure(false);
    const currentPath = typeof window !== "undefined" ? window.location.pathname: null;

    useEffect(() => {
        const updatePath = () => {
            if (typeof window !== "undefined") {
                currentPath = window.location.pathname;
            }
        };
        window.addEventListener('popstate', updatePath);
        return () => {
            window.removeEventListener("popstate", updatePath);
        };
    }, []);


    return(
        <Header height={70} className={classes.root}>
            <Container className={classes.header}>
                <Group spacing="xl">
                    <Text className={classes.title}>
                        movieFinder.io
                    </Text>
                </Group>

                <Group spacing={5} className={classes.links}>
                    <Link href="/">
                        <a 
                          key="Home"
                          className={cx(classes.link, currentPath == "/" ? classes.linkActive: '')}
                          onClick={(event) => {
                            close();
                          }}
                          >
                            Home
                          </a>
                    </Link>
                </Group>



            </Container>
        </Header>
    );
}

export default PageHeader;