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
const Container = styled(motion.div)`
  padding: ${token('space.200')};
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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
  display: flex;
  flex-direction: row;
  gap: ${token('space.200')};
  padding: ${token('space.200')};
`;

const Card = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  background: ${token('elevation.surface.overlay')};
  box-shadow: ${token('elevation.shadow.raised')};
  display: flex;
  align-items: left;
  justify-content: left;
  text-align: left;
  font-size: 14px;
  color: ${token('color.text')};
  font-weight: 500;
  padding: ${token('space.200')};
  cursor: pointer;
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: ${token('color.background.neutral.bold')};
  color: ${token('color.text.inverse')};
  padding: ${token('space.050')} ${token('space.100')};
  border-radius: ${token('border.radius.100')};
  font-size: 12px;
  box-shadow: ${token('elevation.shadow.overlay')};
  pointer-events: none;
  z-index: 10;
  opacity: 0.95;
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
      <Heading size="xxlarge">
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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedTips, setSelectedTips] = useState<string[]>([]);
  const [showCards, setShowCards] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Shuffle and select 4 random tips
    const shuffled = [...tips].sort(() => 0.5 - Math.random());
    setSelectedTips(shuffled.slice(0, 4));
    // Start animation after 0.5s
    const timer = setTimeout(() => setShowCards(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const warpAnimation = {
    initial: {
      opacity: 0,
      rotateX: -10,
      skewY: -2.5,
      scaleY: 1.2,
      scaleX: 0.8,
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      skewY: 0,
      scaleY: 1,
      scaleX: 1,
      transition: {
        duration: 1.4,
        ease: [0.65, 0, 0.35, 1],
        delay: 0.5
      },
    },
  };

  // Each card animates in with a staggered delay
  const cardAnimation = (index: number) => ({
    initial: { opacity: 0, y: -12 },
    animate: {
      opacity: showCards ? 1 : 0,
      y: showCards ? 0 : -12,
      transition: {
        delay: 0.18 * index,
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 1
      }
    }
  });

  return (
    <Container
          style={{
        transformPerspective: 1000,
        originX: 0.5,
        originY: 0,
      }}
    >
      <Section
        initial="initial"
        animate="animate"
        variants={warpAnimation}
      >
        <Stack space="space.200">
          {/*<IllustrationContainer>
            <img src={heroImage} alt="VibeCode Illustration" />
          </IllustrationContainer>*/}
          <WavyText />
          <Heading size="small">Ask Cursor to build using Atlassian Design System.</Heading>
        </Stack>
      </Section>
      <CardsContainer>
        {selectedTips.map((tip, index) => (
          <Card
            key={tip}
            initial="initial"
            animate="animate"
            variants={cardAnimation(index)}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(tip);
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 3000);
              } catch (e) {
                // fallback for clipboard API
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
            {copiedIndex === index && <Tooltip>Copied!</Tooltip>}
            {tip}
          </Card>
        ))}
      </CardsContainer>
      <DraggableTextField
        drag
        dragMomentum={true}
        dragElastic={0.1}
        dragTransition={{
          bounceStiffness: 600,
          bounceDamping: 20,
          power: 0.1,
          timeConstant: 200
        }}
                  style={{ 
          x,
          y,
          rotate: 15,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        onDragEnd={(event, info) => {
          setPosition({
            x: position.x + info.offset.x,
            y: position.y + info.offset.y,
          });
          x.set(position.x + info.offset.x);
          y.set(position.y + info.offset.y);
        }}
      >
        {/*<Textfield
          placeholder="Drag me around!"
          width="medium"
        />*/}
      </DraggableTextField>
    </Container>
  );
}

export default App;