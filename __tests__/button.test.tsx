import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import RNButton from '../src/components/button/index';

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

// Mock the text component
jest.mock('components/text', () => {
  const { Text } = require('react-native');
  const MockText = ({ children, ...props }: any) => (
    <Text {...props}>{children}</Text>
  );
  MockText.displayName = 'MockText';
  return MockText;
});

const renderWithNavigation = (component: React.ReactElement) => {
  return render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('RNButton', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with title', () => {
    const { getByText } = renderWithNavigation(
      <RNButton title="Test Button" onPress={mockOnPress} />,
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  test('calls onPress when pressed', () => {
    const { getByText } = renderWithNavigation(
      <RNButton title="Test Button" onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    const { getByRole } = renderWithNavigation(
      <RNButton title="Test Button" onPress={mockOnPress} disabled={true} />,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });
});
