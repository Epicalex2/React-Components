// BookWidget.tsx
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

interface WidgetProps {
  // Add any props you need for your widget
}

const WidgetContainer = styled(Paper)(({ isFlipped }: { isFlipped: boolean }) => ({
    padding: 10,
    textAlign: 'center',
    width: 200,
    height: 300,
    maxWidth: 200,
    margin: 'auto',
    position: 'relative',
    cursor: 'pointer', // Add cursor pointer to indicate interaction
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s', // Add a transition for the transform property
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply the flip effect
  }));

  const Content = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    backfaceVisibility: 'hidden',
  });
  
  const ContentFront = styled(Content)({
    //transformOrigin: 'center bottom',
    transform: 'rotateY(0deg)',
    //display: 'block',
  });
  
  const ContentBack = styled(Content)({
    transform: 'rotateY(180deg)',
    //transformOrigin: 'center top',
    //display: 'none',
  });

  const Image = styled('img')({
    height: 300,
    width: 200,
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: 5,
  });

const Widget: React.FC<WidgetProps> = ({ /* destructure props here */ }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
  
  return (
    <WidgetContainer elevation={3} style={{ padding: 20 }} isFlipped={isFlipped} onClick={handleFlip}>
        <ContentFront>
            {/* Front content goes here */}
            
            <Image src={require('../Pictures/Michael Vey The Traitor Book Cover.jpg')} alt="Book Cover"/>
        </ContentFront>
        <ContentBack>
        {/* Back content goes here */}
        <p>Back content goes here!</p>
        {/* Add any additional content for the back of the widget */}
        </ContentBack> 
    </WidgetContainer>
  );
};

export default BookWidget;
