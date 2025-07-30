import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import RNText from '../src/components/text/index';
import { RNTextEnum } from '../designLib/types/typography';

// Mock theme
const mockTheme = {
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    text: '#000000',
    border: '#CCCCCC',
  },
  layout: {
    scaledX: {
      small: 8,
      xSmall: 4,
      medium: 16,
      large: 24,
    },
    scaledY: {
      small: 8,
      xSmall: 4,
      medium: 16,
      large: 24,
    },
  },
  fonts: {
    h1: { fontSize: 24, fontWeight: 'bold' },
    h2: { fontSize: 20, fontWeight: 'bold' },
    h3: { fontSize: 18, fontWeight: 'bold' },
    p1: { fontSize: 16 },
  },
};

// Mock the theme hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useTheme: () => mockTheme,
}));

// Mock the typography enum
jest.mock('../designLib/types/typography', () => ({
  RNTextEnum: {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p1: 'p1',
  },
}));

const renderWithNavigation = (component: React.ReactElement) => {
  return render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('RNText', () => {
  test('renders text with correct content', () => {
    const { getByText } = renderWithNavigation(
      <RNText type={RNTextEnum.h1}>Hello World</RNText>,
    );
    expect(getByText('Hello World')).toBeTruthy();
  });

  test('renders with different text types', () => {
    const { getByText } = renderWithNavigation(
      <RNText type={RNTextEnum.p1}>Paragraph text</RNText>,
    );
    expect(getByText('Paragraph text')).toBeTruthy();
  });

  test('applies custom styles', () => {
    const customStyle = { color: 'red' };
    const { getByText } = renderWithNavigation(
      <RNText type={RNTextEnum.h2} customStyles={customStyle}>
        Custom styled text
      </RNText>,
    );
    expect(getByText('Custom styled text')).toBeTruthy();
  });

  test('uses accessibility label when provided', () => {
    const { getByLabelText } = renderWithNavigation(
      <RNText type={RNTextEnum.h3} accessibilityLabel="Custom Label">
        Text content
      </RNText>,
    );
    expect(getByLabelText('Custom Label')).toBeTruthy();
  });

  test('uses text content as accessibility label when not provided', () => {
    const { getByLabelText } = renderWithNavigation(
      <RNText type={RNTextEnum.p1}>Accessible text</RNText>,
    );
    expect(getByLabelText('Accessible text')).toBeTruthy();
  });
});
