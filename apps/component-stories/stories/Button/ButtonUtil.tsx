import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@portfolio/button';
import { font, sizes, ColorPalette } from '@portfolio/css-util';
import { IoIosArrowForward } from 'react-icons/io';
import { GoThreeBars } from 'react-icons/go';

export const ButtonArrowIcon = styled(IoIosArrowForward)`
  width: 20px;
  height: 20px;
`;

export const ThreeDashMenuIcon = styled(GoThreeBars)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;


export const IconLabel = () => (
  <>
    {'Button'}
    <ButtonArrowIcon />
  </>
);


export const ColouredLargeButton = styled(Button)`
  width: ${sizes.buttonLarge.width}px;
  height: ${sizes.buttonLarge.height}px;
  color: white;
  background: ${ColorPalette.purple.purple1};
  font-size: ${font.button.buttonLarge.fontSize}px;
  font-weight: ${font.button.buttonLarge.fontWeight};
`;

export const ColouredMediumButton = styled(Button)`
  width: ${sizes.buttonMedium.width}px;
  height: ${sizes.buttonMedium.height}px;
  color: white;
  background: ${ColorPalette.purple.purple1};
  font-size: ${font.button.buttonMedium.fontSize}px;
  font-weight: ${font.button.buttonMedium.fontWeight};
`;

export const ColouredMediumButtonWithIcon = styled(Button)`
  width: ${sizes.buttonMediumWithIcon.width}px;
  height: ${sizes.buttonMediumWithIcon.height}px;
  color: white;
  background: ${ColorPalette.purple.purple1};
  font-size: ${font.button.buttonMedium.fontSize}px;
  font-weight: ${font.button.buttonMedium.fontWeight};
`;

export const ColouredSmallButton = styled(Button)`
  width: ${sizes.buttonSmall.width}px;
  height: ${sizes.buttonSmall.height}px;
  color: white;
  background: ${ColorPalette.purple.purple1};
  font-size: ${font.button.buttonSmall.fontSize}px;
  font-weight: ${font.button.buttonSmall.fontWeight};
`;

export const ColouredSmallButtonWithIcon = styled(Button)`
  width: ${sizes.buttonSmallWithIcon.width}px;
  height: ${sizes.buttonSmallWithIcon.height}px;
  color: white;
  background: ${ColorPalette.purple.purple1};
  font-size: ${font.button.buttonSmall.fontSize}px;
  font-weight: ${font.button.buttonSmall.fontWeight};

`;

export const StrokeLargeButton = styled(Button)`
  width: ${sizes.buttonLarge.width}px;
  height: ${sizes.buttonLarge.height}px;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonLarge.fontSize}px;
  font-weight: ${font.button.buttonLarge.fontWeight};
`;

export const StrokeMediumButton = styled(Button)`
  width: ${sizes.buttonMedium.width}px;
  height: ${sizes.buttonMedium.height}px; 
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonMedium.fontSize}px;
  font-weight: ${font.button.buttonMedium.fontWeight};
`;

export const StrokeSmallButton = styled(Button)`
  width: ${sizes.buttonSmall.width}px;
  height: ${sizes.buttonSmall.height}px; 
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonSmall.fontSize}px;
  font-weight: ${font.button.buttonSmall.fontWeight};
`;

export const ColouredLargeButtonWithIcon = styled(Button)`
  width: ${sizes.buttonLargeWithIcon.width}px;
  height: ${sizes.buttonLargeWithIcon.height}px;
  color: white;
  background: ${ColorPalette.purple.purple1};
  font-size: ${font.button.buttonLarge.fontSize}px;
  font-weight: ${font.button.buttonLarge.fontWeight};
`;


export const StrokeLargeButtonWithIcon = styled(Button)`
  width: ${sizes.buttonLargeWithIcon.width}px;
  height: ${sizes.buttonLargeWithIcon.height}px;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonLarge.fontSize}px;
  font-weight: ${font.button.buttonLarge.fontWeight};
`;

export const StrokeMediumButtonWithIcon = styled(Button)`
  width: ${sizes.buttonMediumWithIcon.width}px;
  height: ${sizes.buttonMediumWithIcon.height}px; 
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonMedium.fontSize}px;
  font-weight: ${font.button.buttonMedium.fontWeight};
`;

export const StrokeSmallButtonWithIcon = styled(Button)`
  width: ${sizes.buttonSmallWithIcon.width}px;
  height: ${sizes.buttonSmallWithIcon.height}px; 
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonSmall.fontSize}px;
  font-weight: ${font.button.buttonSmall.fontWeight};
`;

export const SimpleLargeButton = styled(Button)`
  width: ${sizes.buttonLarge.width}px;
  height: ${sizes.buttonLarge.height}px;
  border: none;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonLarge.fontSize}px;
  font-weight: ${font.button.buttonLarge.fontWeight};
`;

export const SimpleMediumButton = styled(Button)`
  width: ${sizes.buttonMedium.width}px;
  height: ${sizes.buttonMedium.height}px;
  border: none;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonMedium.fontSize}px;
  font-weight: ${font.button.buttonMedium.fontWeight};
`;

export const SimpleSmallButton = styled(Button)`
  width: ${sizes.buttonSmall.width}px;
  height: ${sizes.buttonSmall.height}px;
  border: none;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonSmall.fontSize}px;
  font-weight: ${font.button.buttonSmall.fontWeight};
`;

export const SimpleLargeButtonWithIcon = styled(Button)`
  width: ${sizes.buttonLargeWithIcon.width}px;
  height: ${sizes.buttonLargeWithIcon.height}px;
  border: none;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonLarge.fontSize}px;
  font-weight: ${font.button.buttonLarge.fontWeight};
`;

export const SimpleMediumButtonWithIcon = styled(Button)`
  width: ${sizes.buttonMediumWithIcon.width}px;
  height: ${sizes.buttonMediumWithIcon.height}px;
  border: none;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonMedium.fontSize}px;
  font-weight: ${font.button.buttonMedium.fontWeight};
`;

export const SimpleSmallButtonWithIcon = styled(Button)`
  width: ${sizes.buttonSmallWithIcon.width}px;
  height: ${sizes.buttonSmallWithIcon.height}px;
  border: none;
  background: ${ColorPalette.purple.purple5};
  font-size: ${font.button.buttonSmall.fontSize}px;
  font-weight: ${font.button.buttonSmall.fontWeight};
`;