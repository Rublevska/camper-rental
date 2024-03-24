import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import InterRegular from '../../fonts/Inter-Regular.ttf';
import InterMedium from '../../fonts/Inter-Medium.ttf';
import InterSemiBold from '../../fonts/Inter-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'InterRegular';
        src: local('InterRegular'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterMedium';
        src: local('InterMedium'),
        url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

body {
  font-family: 'Inter', sans-serif;
  color: ${p => p.theme.colors.main};
}

code {
  font-family: 'Inter', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button{
  border-radius: ${p => p.theme.radii.ld};
  cursor: pointer;
};

button:active, button:focus, button:hover {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}

ul {
  list-style: none;
}

a {
    text-decoration: none;
}



`;
