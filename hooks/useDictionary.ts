import { useState, useEffect } from 'react';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export const useDictionary = (lang: Locale) => {
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    };

    loadDictionary();
  }, [lang]);

  return dictionary;
};
