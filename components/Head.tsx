import { FC } from 'react';
import NextHead from 'next/head';

interface HeadProps {
    title: string;
}

const Head: FC<HeadProps> = ({ title }) => {
    return (
        <NextHead>
            <title>{title}</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono" />
            <link rel="icon" href="/images/favicon.png" />
            <meta name="description" content="Coding Challenge" />
        </NextHead>
    );
};

export default Head;
