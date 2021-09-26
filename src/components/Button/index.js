import React, { useCallback } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export const Button = ({
  title,
  onPress,
  isSecondary,
  style: customStyles,
}) => {
  const buttonStyles = useCallback(
    ({ pressed }) => [
      styles.button,
      customStyles,
      ...(pressed ? [styles.pressed] : []),
      ...(isSecondary ? [styles.secondaryButton] : []),
    ],
    [isSecondary, customStyles],
  );

  return (
    <Pressable onPress={onPress} style={buttonStyles}>
      <Text
        style={[styles.title, ...(isSecondary ? [styles.secondaryTitle] : [])]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  secondaryTitle: {
    color: 'black',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  secondaryButton: {
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
