import { token } from '@atlaskit/tokens';
import styled from '@emotion/styled';
import Heading from '@atlaskit/heading';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Text } from '@atlaskit/primitives';
import Toggle from '@atlaskit/toggle';
import { createPortal } from 'react-dom';

// Styled components
const MorphContainer = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
`;

const HeadingSpacer = styled.div`
  height: 16px;
`;

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

function App({ mode: _mode, onToggleTheme: _onToggleTheme }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [collapsing, setCollapsing] = useState(false);

  // Show small logo for 2s, then morph to open state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setCollapsing(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Content fade-in after morph
  useEffect(() => {
    let contentTimer: NodeJS.Timeout;
    if (isOpen && !collapsing) {
      contentTimer = setTimeout(() => setShowContent(true), 350);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(contentTimer);
  }, [isOpen, collapsing]);

  // Logo animation variants
  const logoVariants = {
    closed: {
      width: 32,
      height: 37,
      marginBottom: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    open: {
      width: 72,
      height: 84,
      marginBottom: 16,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  // Morphing animation variants
  const morphVariants = {
    closed: {
      width: 64,
      height: 64,
      borderRadius: 12,
      padding: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    open: {
      width: 400,
      height: 500,
      borderRadius: 12,
      padding: 24,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  return (
    <MorphContainer
      initial="closed"
      animate={isOpen && !collapsing ? 'open' : 'closed'}
      variants={morphVariants}
      style={{ minHeight: 64, maxHeight: isOpen ? 500 : 64, cursor: isOpen ? 'default' : 'pointer' }}
      onClick={() => { if (!isOpen && !collapsing) setIsOpen(true); }}
    >
      {/* Single logo that animates size/position */}
      <LogoContainer
        variants={logoVariants}
        animate={isOpen && !collapsing ? 'open' : 'closed'}
        initial="closed"
        style={{ overflow: 'visible' }}
      >
        <svg width="100%" height="100%" viewBox="0 0 58 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.999 33.1953L57.0371 17.3477H28.999H0.960938L28.999 33.1953Z" fill="#CFE1FD"/>
          <path d="M29 33.1953L57.0381 17.3477L43.019 41.4238L29 65.5V33.1953Z" fill="#8FB8F6"/>
          <path d="M0.960938 17.3476L28.999 1.5M0.960938 17.3476L28.999 33.1952M0.960938 17.3476H28.999M0.960938 17.3476V49.6524M28.999 1.5L57.0371 17.3476M28.999 1.5V17.3476M57.0371 17.3476L28.999 33.1952M57.0371 17.3476H28.999M57.0371 17.3476V49.6524M57.0371 17.3476L43.0181 41.4238M28.999 33.1952V65.5M28.999 33.1952L0.960938 49.6524M0.960938 49.6524L28.999 65.5M28.999 65.5L57.0371 49.6524M28.999 65.5L43.0181 41.4238M57.0371 49.6524L43.0181 41.4238" stroke="#1868DB" strokeWidth="1.5"/>
        </svg>
      </LogoContainer>
      {/* Content fades in after morph */}
      <div style={{ width: '100%', textAlign: 'center', minHeight: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', height: '100%' }}>
        <AnimatePresence>
          {isOpen && showContent && !collapsing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Heading size="xlarge">You're all set!</Heading>
              <HeadingSpacer />
              <Heading size="small">Head back to Cursor and ask it to build something. It will use the Atlassian Design System to assemble the UI.</Heading>
              <HeadingSpacer />
              <Text color="color.text.subtlest" size="medium" as="span">
                Atlas Vibekit
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Theme toggle at the bottom of the screen */}
        {createPortal(
          <ToggleFooter>
            <Toggle
              isChecked={_mode === 'dark'}
              onChange={_onToggleTheme}
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
    </MorphContainer>
  );
}

export default App;