import { style } from '@vanilla-extract/css';

export const NavbarWhite = style({
  padding: '2rem 10rem',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 25px 0px',
});

export const NavbarBlack = style({
  padding: '2rem 10rem',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 25px 0px',
  backgroundColor: '#00040D',
  color: 'white',
  borderBottom: '1px solid white',
});

export const Controller = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Button = style({
  display: 'flex',
  gap: '11px',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

export const ButtonBlack = style({
  display: 'flex',
  gap: '11px',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'white',
});

export const BodySection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '3rem 10rem',
});

export const DivInput = style({
  display: 'flex',
  alignItems: 'center',
  gap: '21px',
  borderRadius: '0.5rem',
  padding: '1rem 1.5rem',
  width: '20vw',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  background: 'White',
});

export const Input = style({
  border: 'none',
  fontSize: '1.1rem',
  background: 'White',
  outline: 'none',
});

export const Select = style({
  border: 'none',
  outline: 'none',
  borderRadius: '0.5rem',
  padding: '1rem 1.5rem',
  width: '10vw',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
});

export const Titulo = style({
  fontWeight: 'bold',
});

export const CountryNameText = style({
  fontSize: '1.3rem',
  fontWeight: '700',
});

export const CountrySection = style({
  paddingTop: '10rem',
  display: 'grid',
  gridTemplateColumns: '400px 400px 400px 400px',
  columnGap: '1rem',
  rowGap: '3rem',
});

export const CardStyle = style({
  width: '300px',
  backgroundColor: 'White',
  borderRadius: '0.5rem',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
});

export const DivText = style({
  paddingTop: '0.8rem',
  paddingBottom: '0.8rem',
  paddingLeft: '1.3rem',
  textAlign: 'left',
});

export const DivText2 = style({
  paddingBottom: '2rem',
  paddingLeft: '1.3rem',
  textAlign: 'left',
});

export const CountryInfo = style({
  padding: '3rem 10rem',
  minHeight: '100vh',
});

export const CountryInfoBlack = style({
  padding: '3rem 10rem',
  backgroundColor: '#00040D',
  color: 'white',
  minHeight: '91vh',
});

export const BackButton = style({
  padding: '0.8rem 2rem',
  width: '150px',
  background: 'white',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  color: 'black',
  gap: '11px',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
});

export const ButtonText = style({
  fontSize: '1.3rem',
});

export const InfoSection = style({
  paddingTop: '7rem',
  display: 'flex',
});

export const CountryInfoText = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '7rem',
  paddingTop: '2rem',
});

export const InfoSectionCountryName = style({
  fontSize: '2rem',
  paddingBottom: '2rem',
});

export const Flex = style({
  display: 'flex',
  gap: '0.5rem',
});

export const Div1 = style({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const Flex2 = style({
  display: 'flex',
  gap: '3rem',
});

export const FlexWPaddingTop = style({
  display: 'flex',
  gap: '0.5rem',
  paddingTop: '10rem',
});
