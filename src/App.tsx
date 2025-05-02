import { token } from '@atlaskit/tokens';
import styled from '@emotion/styled';
import Heading from '@atlaskit/heading';
import { Stack, Text } from '@atlaskit/primitives';
import heroImage from './assets/hero-ads-light.png';

// Styled components
const Container = styled.div`
  padding: ${token('space.400')};
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  text-align: center;
  padding: ${token('space.500')};
  background: ${token('color.background.neutral')};
  border-radius: ${token('border.radius.200')};
`;

const IllustrationContainer = styled.div`
  margin-bottom: ${token('space.400')};
  img {
    max-width: 300px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <Container>
      <Section>
        <Stack space="space.400">
          <IllustrationContainer>
            <img src={heroImage} alt="VibeCode Illustration" />
          </IllustrationContainer>
          <Heading size="xxlarge">Welcome to vibecoding using ADS!</Heading>
          <Text>
            Ask Cursor to build stuff using Atlassian Design System. Happy vibecoding!
          </Text>
        </Stack>
      </Section>
    </Container>
  );
}

export default App;
