import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import FixedContactComponent from "./FixedContactComponent";
import Head from 'next/head';
import { useState, useEffect } from "react";

const DefaultLayoutComponent = ({ children }) => {

    const [metaData, setMetaData] = useState()
    const [metaTitle, setMetaTitle] = useState("")
    const [metaDescription, setMetaDescription] = useState("")
    const [metaImgURl, setMetaImgUrl] = useState("")

    const fetchData = () => {
        fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/yoast/v1/get_head?url=https://172-104-145-53.ip.linodeusercontent.com/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(data => {
            if (!data) {
                console.error('Error: Data is undefined');
                return;
            }
            setMetaData(data.json)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        if (metaData) {
            setMetaTitle(metaData.og_title)
            setMetaDescription(metaData.description)
            setMetaImgUrl(metaData.og_image[0].url)
        }
    }, [metaData]);
    
    return (
        <>
            <Head>
                <title>
                    {metaTitle}
                </title>
                <meta
                    name="description"
                    content={metaDescription}
                    key="testing"
                />
                <link type="image/x-icon" rel="icon" href={metaImgURl} />
            </Head>

            <HeaderComponent/>
            <main>{children}</main>
            <FooterComponent/>
        </>
    );
}

export default DefaultLayoutComponent;