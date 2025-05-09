import { token } from '@atlaskit/tokens';
import styled from '@emotion/styled';
import Heading from '@atlaskit/heading';
import { Stack, Text } from '@atlaskit/primitives';
import heroImage from './assets/hero-ads-light.png';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Textfield from '@atlaskit/textfield';
import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';

// Styled components
const MorphContainer = styled(motion.div)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9999;
  background: ${token('elevation.surface.overlay')};
  box-shadow: ${token('elevation.shadow.overlay')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FloatingButton = styled(motion.button)`
  width:64px;
  height: 64px;
  border-radius: 12px;
  background: ${token('elevation.surface.overlay')};
  box-shadow: ${token('elevation.shadow.overlay')};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9999;
  cursor: pointer;
  padding: 0;
`;

const Section = styled(motion.div)`
  text-align: center;
  padding: ${token('space.500')};
  border-radius: ${token('border.radius.200')};
`;

const IllustrationContainer = styled.div`
  margin-bottom: ${token('space.200')};
  img {
    max-width: 300px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const DraggableTextField = styled(motion.div)`
  position: absolute;
  z-index: 1000;
  cursor: move;
  border-radius: ${token('border.radius.100')};
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${token('space.100')};
  width: 100%;
  margin-top: ${token('space.300')};
`;

const Card = styled(motion.div)`
  width: 100%;
  min-width: 0;
  height: 120px;
  border-radius: 12px;
  background: ${token('elevation.surface.overlay')};
  border: 1px solid ${token('color.border')};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 14px;
  color: ${token('color.text')};
  font-weight: 500;
  padding: ${token('space.200')};
  cursor: pointer;
  position: relative;
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: ${token('color.background.neutral.bold')};
  color: ${token('color.text.inverse')};
  padding: ${token('space.050')} ${token('space.100')};
  border-radius: 3px;
  font-size: 12px;
  box-shadow: ${token('elevation.shadow.overlay')};
  pointer-events: none;
  z-index: 10;
  opacity: 1;
  overflow: hidden;
`;

const BigTopIcon = styled(motion.div)`
  width: 56px;
  height: 64px;
  margin-bottom: ${token('space.200')};
`;

const SmallTopIcon = styled(motion.div)`
  width: 32px;
  height: 37px;
  position: absolute;
  top: 14px;
  left: 16px;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10000;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadingSpacer = styled.div`
  height: 16px;
`;

const tips = [
  "Add Atlassian navigation at the top of my app with Confluence logo",
  "Create a form with validation using Atlaskit form components",
  "Add a dropdown menu with custom styling using Atlaskit dropdown",
  "Implement a data table with sorting using Atlaskit table",
  "Create a modal dialog with custom header and footer",
  "Add a search field with autocomplete suggestions",
  "Implement a multi-select dropdown with custom options",
  "Create a progress indicator with custom colors",
  "Add a tooltip that appears on hover",
  "Implement a breadcrumb navigation component",
  "Create a tabbed interface with custom styling",
  "Add a date picker with custom date format",
  "Implement a file upload component with drag and drop",
  "Create a notification banner with different states",
  "Add a pagination component with custom styling",
  "Implement a tree view with expandable nodes",
  "Create a badge component with custom colors",
  "Add a toggle switch with custom styling",
  "Implement a range slider with custom marks",
  "Create a progress bar with custom colors",
  "Add a radio group with custom styling",
  "Implement a checkbox group with custom layout",
  "Create a select field with custom options",
  "Add a text area with character count",
  "Implement a button group with custom styling",
  "Create a card with hover effects",
  "Add a loading spinner with custom colors",
  "Implement a status lozenge with custom states",
  "Create a section message with custom styling",
  "Add a inline message with custom colors"
];

function WavyText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      const { chars } = splitText(
        containerRef.current.querySelector('.wavy')!
      );
      containerRef.current.style.visibility = 'visible';
      const staggerDelay = 0.15;
      animate(
        chars,
        { y: [0, 10] },
        {
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          duration: 2,
          delay: stagger(
            staggerDelay,
            { startDelay: -staggerDelay * chars.length }
          ),
        }
      );
    });
  }, []);

  return (
    <div className="wavy-container" ref={containerRef} style={{ visibility: 'hidden', display: 'inline-block' }}>
      <Heading size="large">
        <span className="wavy">Atlas VibeKit</span>
      </Heading>
      <style>{`
        .split-char {
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const [showSmallIcon, setShowSmallIcon] = useState(true);
  const [showBigIcon, setShowBigIcon] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedTips, setSelectedTips] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...tips].sort(() => 0.5 - Math.random());
    setSelectedTips(shuffled.slice(0, 4));
  }, []);

  // Content fade-in/out timing
  useEffect(() => {
    let contentTimer: NodeJS.Timeout;
    let iconTimer: NodeJS.Timeout;
    let collapseTimer: NodeJS.Timeout;
    if (isOpen && !collapsing) {
      setShowSmallIcon(false);
      setShowBigIcon(true);
      contentTimer = setTimeout(() => setShowContent(true), 350);
    } else if (!isOpen && !collapsing) {
      setShowSmallIcon(true);
      setShowBigIcon(false);
    }
    // When collapsing, fade out content, then fade out big icon, then collapse
    if (collapsing) {
      setShowContent(false);
      iconTimer = setTimeout(() => {
        setShowBigIcon(false);
        // Only after big icon is gone, collapse the container and show small icon
        collapseTimer = setTimeout(() => {
          setIsOpen(false);
          setCollapsing(false);
          setShowSmallIcon(true);
        }, 200); // match big icon exit duration
      }, 300); // allow content to fade out before big icon
    }
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(iconTimer);
      clearTimeout(collapseTimer);
    };
  }, [isOpen, collapsing]);

  // Morphing animation variants
  const morphVariants = {
    closed: {
      width: 64,
      height: 64,
      borderRadius: 12,
      padding: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }
    },
    open: {
      width: 400,
      height: 500,
      borderRadius: 12,
      padding: 24,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.15, duration: 0.5 }
    })
  };

  // Handle open/close with delayed collapse
  const handleOpen = () => {
    setIsOpen(true);
    setCollapsing(false);
  };
  const handleClose = () => {
    setShowContent(false);
    setCollapsing(true);
    setTimeout(() => {
      setIsOpen(false);
      setCollapsing(false);
    }, 400); // Wait for fade out before collapsing
  };

  return (
    <MorphContainer
      initial="closed"
      animate={isOpen && !collapsing ? 'open' : 'closed'}
      variants={morphVariants}
      style={{ minHeight: 64, maxHeight: isOpen ? 500 : 64, cursor: isOpen ? 'default' : 'pointer' }}
      onClick={() => { if (!isOpen && !collapsing) handleOpen(); }}
    >
      {/* Small icon: visible when closed, fades in after collapse */}
      <AnimatePresence>
        {showSmallIcon && (
          <SmallTopIcon
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="32" height="37" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_2)">
                <path d="M16 17L31 9H16H1L16 17Z" fill="#CFE1FD"/>
                <path d="M16 17L31 9L23.5 21.5L16 34V17Z" fill="#8FB8F6"/>
                <path d="M1 9L16 1M1 9L16 17M1 9H16M1 9V26M16 1L31 9M16 1V9M31 9L16 17M31 9H16M31 9V26M31 9L23.5 21.5M16 17V34M16 17L1 26M1 26L16 34M16 34L31 26M16 34L23.5 21.5M31 26L23.5 21.5" stroke="#1868DB"/>
              </g>
              <defs>
                <filter id="filter0_d_1_2" x="0.5" y="0.5" width="31" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feGaussianBlur stdDeviation="0.5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.407843 0 0 0 0 0.858824 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_dropShadow_1_2"/>
                </filter>
              </defs>
            </svg>
          </SmallTopIcon>
        )}
      </AnimatePresence>
      {/* Big icon: visible when open, stays until collapse starts */}
      <AnimatePresence>
        {showBigIcon && (
          <BigTopIcon
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ duration: 0.1 }}
          >
            <svg width="58" height="67" viewBox="0 0 58 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.999 33.1953L57.0371 17.3477H28.999H0.960938L28.999 33.1953Z" fill="#CFE1FD"/>
              <path d="M29 33.1953L57.0381 17.3477L43.019 41.4238L29 65.5V33.1953Z" fill="#8FB8F6"/>
              <path d="M0.960938 17.3476L28.999 1.5M0.960938 17.3476L28.999 33.1952M0.960938 17.3476H28.999M0.960938 17.3476V49.6524M28.999 1.5L57.0371 17.3476M28.999 1.5V17.3476M57.0371 17.3476L28.999 33.1952M57.0371 17.3476H28.999M57.0371 17.3476V49.6524M57.0371 17.3476L43.0181 41.4238M28.999 33.1952V65.5M28.999 33.1952L0.960938 49.6524M0.960938 49.6524L28.999 65.5M28.999 65.5L57.0371 49.6524M28.999 65.5L43.0181 41.4238M57.0371 49.6524L43.0181 41.4238" stroke="#1868DB" stroke-width="1.5"/>
            </svg>
          </BigTopIcon>
        )}
      </AnimatePresence>
      {/* Close button only when open */}
      {isOpen && !collapsing && (
        <CloseButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={e => { e.stopPropagation(); handleClose(); }}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="5" x2="15" y2="15" stroke="#42526E" strokeWidth="2" strokeLinecap="round"/>
            <line x1="15" y1="5" x2="5" y2="15" stroke="#42526E" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </CloseButton>
      )}
      {/* Content fades in only when open */}
      <AnimatePresence>
        {isOpen && showContent && !collapsing && (
          <motion.div
            style={{ width: '100%' }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeIn}
          >
            <Heading size="xlarge">Atlas VibeKit</Heading>
            <HeadingSpacer />
            <Heading size="small">Use this file for Cursor to build prototypes using Atlassian Design System.</Heading>
            <CardsContainer>
              {selectedTips.map((tip, index) => (
                <motion.div
                  key={tip}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                  custom={index + 2}
                >
                  <Card
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(tip);
                        setCopiedIndex(index);
                        setTimeout(() => setCopiedIndex(null), 3000);
                      } catch (e) {
                        const textarea = document.createElement('textarea');
                        textarea.value = tip;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);
                        setCopiedIndex(index);
                        setTimeout(() => setCopiedIndex(null), 3000);
                      }
                    }}
                  >
                    {copiedIndex === index &&
                      <Tooltip
                        initial={{opacity: 0, y: 10}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}>Copied!
                      </Tooltip>}
                    {tip}
                  </Card>
                </motion.div>
              ))}
            </CardsContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </MorphContainer>
  );
}

export default App;