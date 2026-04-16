import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';
import { faqItems } from '@/constants/data';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FAQItemProps {
  questionKey: string;
  answerKey: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  questionKey,
  answerKey,
  isOpen,
  onToggle,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.faqItem}>
      <Pressable
        onPress={onToggle}
        style={({ pressed }) => [
          styles.questionContainer,
          pressed && styles.questionPressed,
        ]}
      >
        <Text style={styles.question}>{t(`faq.${questionKey}`)}</Text>
        <Text style={[styles.chevron, isOpen && styles.chevronOpen]}>
          {isOpen ? '−' : '+'}
        </Text>
      </Pressable>
      {isOpen && (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{t(`faq.${answerKey}`)}</Text>
        </View>
      )}
    </View>
  );
};

export const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.sectionTitle}>{t('faq.title')}</Text>
        <Text style={styles.subtitle}>{t('faq.subtitle')}</Text>

        <View style={styles.faqList}>
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              questionKey={item.question}
              answerKey={item.answer}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: spacing.xxxl,
  },
  inner: {
    maxWidth: 800,
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
  faqList: {
    gap: spacing.md,
  },
  faqItem: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.sm,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
  },
  questionPressed: {
    backgroundColor: colors.backgroundAlt,
  },
  question: {
    flex: 1,
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text,
    paddingRight: spacing.md,
  },
  chevron: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.primary,
  },
  chevronOpen: {
    color: colors.accent,
  },
  answerContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    paddingTop: 0,
  },
  answer: {
    fontSize: typography.fontSizes.md,
    color: colors.textLight,
    lineHeight: typography.fontSizes.md * typography.lineHeights.relaxed,
  },
});

export default FAQ;
