import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';

import Meta from './Meta';
import { Provider } from './Context';

const theme = {
  color: '#393939',
  black: '#393939',
  blackGrey: '#22292F',
  white: '#FFFFFF',
  lightestGrey: '#F8FAFC',
  lighterGrey: '#F1F5F8',
  lightGrey: '#DAE1E7',
  baseGrey: '#B8C2CC',
  darkGrey: '#8795A1',
  darkerGrey: '#606F7B',
  darkestGrey: '#3D4852',
  blue100: '#EBF8FF',
  pink600: '#D53F8C',
  klarnaSuccessText: '#589E60',
  klarnaWarningText: '#CA8A1C',
  background: '#f2f5f7',
};

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Inner = styled.div`
  margin: auto;
  padding-top: 10px;
`;

export default class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            html {
              box-sizing: border-box;
              background: ${theme.white};
            }
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              line-height: 2;
            }
            a {
              text-decoration: none;
              color: ${theme.black};
            }
          `}
        />
        <Provider>
          <MainContainer>
            <Meta />
            <Inner>{children}</Inner>
          </MainContainer>
        </Provider>
      </ThemeProvider>
    );
  }
}
