import React, { useRef, useCallback } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Animated,
  Platform,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Navbar,
  Hero,
  About,
  Programs,
  Reviews,
  Gallery,
  Schedule,
  FAQ,
  Contact,
  Footer,
  ParallaxDivider,
} from '@/components';
import { colors } from '@/constants/theme';

const SECTIONS = ['hero', 'about', 'programs', 'reviews', 'gallery', 'schedule', 'faq', 'contact'] as const;

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const sectionRefs = useRef<{ [key: string]: number }>({});

  const handleNavPress = useCallback((section: string) => {
    const yOffset = sectionRefs.current[section] || 0;
    scrollViewRef.current?.scrollTo({
      y: yOffset - 70,
      animated: true,
    });
  }, []);

  const handleCtaPress = useCallback(() => {
    handleNavPress('contact');
  }, [handleNavPress]);

  const onSectionLayout = useCallback((section: string, y: number) => {
    sectionRefs.current[section] = y;
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Navbar scrollY={scrollY} onNavPress={handleNavPress} />
      
      <Animated.ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: Platform.OS !== 'web' }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View
          onLayout={(e) => onSectionLayout('hero', e.nativeEvent.layout.y)}
        >
          <Hero scrollY={scrollY} onCtaPress={handleCtaPress} />
        </View>

        <View
          onLayout={(e) => onSectionLayout('about', e.nativeEvent.layout.y)}
        >
          <About />
        </View>

        <ParallaxDivider
          imageUri="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80"
          height={150}
          scrollY={scrollY}
          overlayColor={colors.secondary}
          overlayOpacity={0.7}
        />

        <View
          onLayout={(e) => onSectionLayout('programs', e.nativeEvent.layout.y)}
        >
          <Programs />
        </View>

        <View
          onLayout={(e) => onSectionLayout('reviews', e.nativeEvent.layout.y)}
        >
          <Reviews />
        </View>

        <View
          onLayout={(e) => onSectionLayout('gallery', e.nativeEvent.layout.y)}
        >
          <Gallery />
        </View>

        <ParallaxDivider
          imageUri="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&q=80"
          height={150}
          scrollY={scrollY}
          overlayColor={colors.accent}
          overlayOpacity={0.7}
        />

        <View
          onLayout={(e) => onSectionLayout('schedule', e.nativeEvent.layout.y)}
        >
          <Schedule />
        </View>

        <View
          onLayout={(e) => onSectionLayout('faq', e.nativeEvent.layout.y)}
        >
          <FAQ />
        </View>

        <View
          onLayout={(e) => onSectionLayout('contact', e.nativeEvent.layout.y)}
        >
          <Contact />
        </View>

        <Footer />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
