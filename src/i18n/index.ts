import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Current language translations
import en from './en.json';
import nl from './nl.json';

i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.translations = { en, nl };

// console.log(i18n.t('EXIT.TITLE'))

export default i18n;