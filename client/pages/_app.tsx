import App, { Container } from 'next/app';

import Page from '../components/Page';

type InitialProps = {
  Component: any;
  ctx: any;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: InitialProps) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    // @ts-ignore
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
