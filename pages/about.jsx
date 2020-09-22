/* global process */

import Layout from '../components/Layout';
import { ContentBox, H1, P } from '../components/Typography';

export default function About() {
    return (
        <Layout title="About" href="/about/">
            <H1>About</H1>
            <ContentBox>
                <P>{process.env.APP_DESCRIPTION}</P>
            </ContentBox>
        </Layout>
    );
}
