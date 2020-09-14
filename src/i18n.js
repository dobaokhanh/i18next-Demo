import i18n from 'i18next';
import LanguagueDector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import languageEN from './locate/en/translate.json';
import languageFI from './locate/fi/translate.json';

i18n
    .use(XHR)
    .use(LanguagueDector)
    .use(initReactI18next)
    .init({
        resources: {
            en: languageEN,
            fi: languageFI
        },

        // default language when load the website in browser
        lng: "en",

        // When react i18next not finding any language as default in browser
        fallbackLng: "en",

        // debugger for Development environment
        debug: true,
        ns: ["translation"],
        // Add the Namespace and Default Namespace
        defaultNS: "translation",
        //keySeparator is used for extract value by key for nested object
        keySeparator: ".",
        // Enable integrating dynamic values into your translations
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        // Handle rendering while translations are not ready. 
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindI18nStore: 'added removed',
            nsMode: 'default'
        }
        
    });

    export default i18n;