import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render(){

        return(
            <Html lang='pt-BR'>

                <Head>

                    <link rel="shortcut icon" href="logo.svg" type="/logo.svg" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&family=Ubuntu:wght@700&display=swap" 
                        rel="stylesheet" 
                    />
                    <title>Gabriel Santos</title>

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>

        );

    };
    
}