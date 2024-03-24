export const theme = {
  colors: {
    button: '#E44848',
    buttonActive: '#D84343',
    main: '#101828',
    text: '#475467',
    rating: '#FFC531',
    blockFeatures: '#F2F4F7',
    inputs: '#F7F7F7',

    borderColor: 'rgba(16, 24, 40, 0.2)',
  },

  radii: {
    xsd: '10px',
    sd: '20px',
    md: '100px',
    ld: '200px',
  },

  spacing: value => `${value * 4}px`,

  shadows: {
    formShadow: `0px 5px 10px 2px rgba(34, 60, 80, 0.2)`,
    btnShadow: `5px 5px 5px -5px rgba(255, 255, 255, 0.8) inset`,
    btnPushShadow: `3px 3px 3px -3px rgba(34, 60, 80, 0.6) inset`,
  },
};
