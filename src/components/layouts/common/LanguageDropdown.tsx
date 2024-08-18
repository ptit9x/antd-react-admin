import { Button, Dropdown } from 'antd';
import EnUsSvg from '@/assets/header/en_US.svg';
import VietNamSvg from '@/assets/header/vi_VN.svg';
import { LanguageIcon } from '../../icons/LanguageIcon';
import i18n from '@/i18n';
import { useState } from 'react';

const languages = [{
  locale: 'en_US',
  srcIcon: EnUsSvg,
  label: 'English',
}, {
  locale: 'vi_VN',
  srcIcon: VietNamSvg,
  label: 'Vietnam',
}]

const LanguageDropdown = () => {
  const [locale, setLocale] = useState<string>(i18n.language || 'en_US');

  const selectLocale = ({ key }: { key: string }) => {
    i18n.changeLanguage(key);
    setLocale(key);
  }

  return (
    <Dropdown
      menu={{
        onClick: info => selectLocale(info),
        items: languages.map((v) => ({
          key: v.locale,
          icon: <img src={v.srcIcon} alt="" width={20} />,
          disabled: locale === v.locale,
          label: v.label,
        }))
      }}
    >
      <Button id="language-change" type='text' icon={<LanguageIcon />} />
    </Dropdown>
  );
};

export default LanguageDropdown;
