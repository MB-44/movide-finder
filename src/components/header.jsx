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


const useStyles = createStyles((theme) => ({
    root: {

    }
}))

function PageHeader() {
    const {classes, cx} = useStyles();
    const [ opened, { toggle, close }] = useDisclosure(false);

    return(
        <Header height={70} className={classes.root}>
            <Container className={classes.header}>
                <Group spacing="xl">
                    <Text className={classes.title}>
                        movieFinder.io
                    </Text>
                </Group>
            </Container>
        </Header>
    );
}

export default PageHeader;