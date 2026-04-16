import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';
import { contactInfo } from '@/constants/data';

interface ContactCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  onPress?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  children,
  onPress,
}) => (
  <Pressable
    onPress={onPress}
    disabled={!onPress}
    style={({ pressed }) => [
      styles.contactCard,
      onPress && pressed && styles.contactCardPressed,
    ]}
  >
    <View style={styles.cardIconContainer}>
      <Text style={styles.cardIcon}>{icon}</Text>
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </Pressable>
);

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const handlePhonePress = () => {
    Linking.openURL(`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`);
  };

  const handleAddressPress = () => {
    const address = `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.state} ${contactInfo.zip}`;
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = Platform.select({
      ios: `maps:?address=${encodedAddress}`,
      android: `geo:0,0?q=${encodedAddress}`,
      default: `https://maps.google.com/?q=${encodedAddress}`,
    });
    Linking.openURL(mapsUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.sectionTitle}>{t('contact.title')}</Text>
        <Text style={styles.subtitle}>{t('contact.subtitle')}</Text>

        <View style={styles.cardsContainer}>
          <ContactCard
            icon="📍"
            title={t('contact.address')}
            onPress={handleAddressPress}
          >
            <Text style={styles.cardText}>{contactInfo.address}</Text>
            <Text style={styles.cardText}>
              {contactInfo.city}, {contactInfo.state} {contactInfo.zip}
            </Text>
          </ContactCard>

          <ContactCard
            icon="📞"
            title={t('contact.phone')}
            onPress={handlePhonePress}
          >
            <Text style={[styles.cardText, styles.phoneText]}>
              {contactInfo.phone}
            </Text>
          </ContactCard>

          <ContactCard icon="🕐" title={t('contact.hours')}>
            <View style={styles.hoursRow}>
              <Text style={styles.hoursLabel}>{t('contact.weekdays')}:</Text>
              <Text style={styles.hoursValue}>{contactInfo.hours.weekdays}</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.hoursLabel}>{t('contact.weekend')}:</Text>
              <Text style={styles.hoursValue}>{t('contact.closed')}</Text>
            </View>
          </ContactCard>
        </View>

        {Platform.OS === 'web' && (
          <View style={styles.mapContainer}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.state} ${contactInfo.zip}`
              )}`}
              style={{
                width: '100%',
                height: 300,
                border: 0,
                borderRadius: borderRadius.lg,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
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
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSizes.lg,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.xl,
    opacity: 0.9,
  },
  cardsContainer: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: spacing.lg,
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  contactCard: {
    backgroundColor: colors.white,
    padding: spacing.xl,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    width: Platform.OS === 'web' ? 280 : '100%',
    ...shadows.md,
  },
  contactCardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  cardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  cardIcon: {
    fontSize: 28,
  },
  cardTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  cardText: {
    fontSize: typography.fontSizes.md,
    color: colors.textLight,
    textAlign: 'center',
  },
  phoneText: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.primary,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: spacing.xs,
  },
  hoursLabel: {
    fontSize: typography.fontSizes.sm,
    color: colors.textLight,
  },
  hoursValue: {
    fontSize: typography.fontSizes.sm,
    color: colors.text,
    fontWeight: typography.fontWeights.medium,
  },
  mapContainer: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.lg,
  },
});

export default Contact;
