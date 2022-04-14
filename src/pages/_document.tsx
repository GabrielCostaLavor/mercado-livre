import Document, {Head, Html, Main, NextScript} from "next/document";
import { Header } from "../components/Header";

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <script src="https://kit.fontawesome.com/f6f4d87341.js" ></script>
                </Head>
                <body>
                    <Header />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}