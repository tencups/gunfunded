import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'

import theme from '../components/theme'
import Footer from '../components/footer'

const name = 'Gun Funded'
const desc = 'Rescuing democracy'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>{name}</title>
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@lachlanjc" />
          <meta property="twitter:description" content={desc} />
          <meta property="og:title" content={name} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gunfunded.now.sh/" />
          <meta property="description" content={desc} />
        </Head>
        <ThemeProvider theme={theme}>
          <Global styles={theme => ({ body: theme.styles.root })} />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    )
  }
}
