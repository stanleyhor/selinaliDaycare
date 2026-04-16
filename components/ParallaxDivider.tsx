import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Animated,
  Platform,
  Dimensions,
} from 'react-native';
import { colors } from '@/constants/theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ParallaxDividerProps {
  imageUri: string;
  height?: number;
  scrollY?: Animated.Value;
  offsetY?: number;
  overlayColor?: string;
  overlayOpacity?: number;
}

export const ParallaxDivider: React.FC<ParallaxDividerProps> = ({
  imageUri,
  height = 200,
  scrollY,
  offsetY = 0,
  overlayColor = colors.primary,
  overlayOpacity = 0.6,
}) => {
  const parallaxTransform = scrollY
    ? {
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [offsetY - SCREEN_HEIGHT, offsetY + height],
              outputRange: [-height * 0.3, height * 0.3],
              extrapolate: 'clamp',
            }),
          },
        ],
      }
    : {};

  return (
    <View style={[styles.container, { height }]}>
      <Animated.View style={[styles.imageContainer, parallaxTransform]}>
        <ImageBackground
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
        >
          <View
            style={[
              styles.overlay,
              { backgroundColor: overlayColor, opacity: overlayOpacity },
            ]}
          />
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  imageContainer: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    bottom: -50,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ParallaxDivider;
