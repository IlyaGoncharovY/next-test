import React, {PropsWithChildren, ReactElement} from 'react';
import {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/Navbar/Navbar";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const Layout: NextPage<PropsWithChildren> = (props) => {
    return (
        <main className={`${styles.main} ${inter.className}`}>
            <Navbar/>
            {props.children}
        </main>
    );
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}
