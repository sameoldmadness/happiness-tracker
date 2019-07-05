import styled from '@emotion/styled';

const LogoName = styled.h1`
  font-weight: 800;
  font-size: 80px;
  color: ${props => props.theme.blackGrey};
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.klarnaSuccessText};
`;

const Text = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-decoration-style: dashed;
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.klarnaWarningText};
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Hero = () => (
  <Wrapper>
    <LogoName>Happiness Tracker</LogoName>
    <Text>Keep track who feels like 🤩 or 💩</Text>
  </Wrapper>
);

export default Hero;
