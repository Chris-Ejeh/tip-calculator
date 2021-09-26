import { FC } from 'react';
import NextHead from 'next/head';

interface HeadProps {
    title: string;
}

const Head: FC<HeadProps> = ({ title }) => {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content="Coding Challenge" />
            <link rel="icon" href="/images/favicon.png" />
        </NextHead>
    );
};

export default Head;
