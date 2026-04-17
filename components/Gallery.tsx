import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';
import { galleryImages } from '@/constants/data';

interface GalleryItemProps {
  image: (typeof galleryImages)[0];
  onPress?: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onPress }) => {
  return (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.galleryItem,
      pressed && styles.galleryItemPressed,
    ]}
  >
    <Image source={image.uri} style={styles.galleryImage} />
    <View style={styles.imageOverlay}>
      <Text style={styles.imageAlt}>{image.alt}</Text>
    </View>
  </Pressable>
  )
};

export const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.sectionTitle}>{t('gallery.title')}</Text>
        <Text style={styles.subtitle}>{t('gallery.subtitle')}</Text>

        <View style={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: spacing.xxxl,
  },
  inner: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    width: '100%',
  },
  sectionTitle: {
    fontSize: typography.fontSizes.xxxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSizes.lg,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'center',
  },
  galleryItem: {
    width: Platform.OS === 'web' ? 'calc(33.333% - 12px)' : '47%' as any,
    minWidth: 150,
    maxWidth: Platform.OS === 'web' ? 380 : undefined,
    aspectRatio: 1,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.md,
  },
  galleryItemPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    padding: spacing.md,
    opacity: 0,
  },
  imageAlt: {
    color: colors.white,
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
  },
});

export default Gallery;
