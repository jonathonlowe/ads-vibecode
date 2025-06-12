import { token } from '@atlaskit/tokens';
import styled from '@emotion/styled';
import Toggle from '@atlaskit/toggle';
import { createPortal } from 'react-dom';
import JiraIssueView from './components/JiraIssueView';
import Heading from '@atlaskit/heading';

const ToggleFooter = styled.div`
  position: fixed;
  left: 50%;
  bottom: ${token('space.300')};
  transform: translateX(-50%);
  z-index: 10001;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleLabel = styled.div`
  margin-top: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface AppProps {
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
}

function App({ mode, onToggleTheme }: AppProps) {
  return (
    <div>
      <JiraIssueView />
      
      {/* Theme toggle at the bottom of the screen */}
      {createPortal(
        <ToggleFooter>
          <Toggle
            isChecked={mode === 'dark'}
            onChange={onToggleTheme}
            size="large"
            label="Dark mode"
          />
          <ToggleLabel>
            <Heading size="xsmall" color={token('color.text.subtlest') as any} as="span">
              Dark mode
            </Heading>
          </ToggleLabel>
        </ToggleFooter>,
        document.body
      )}
    </div>
  );
}

export default App;