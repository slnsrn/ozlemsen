import { Locale } from "../types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const changeLanguage = (lang: Locale) => {
    router.replace(router.pathname, router.pathname, { locale: lang });
  };
  return (
    <div className="absolute right-4">
      <label
        htmlFor="language"
        className="block text-sm font-medium text-slate-700"
      >
        {t("language")}
      </label>
      <select
        id="language"
        name="language"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-400 focus:border-gray-400 sm:text-sm rounded-md"
        defaultValue={router.locale}
        onChange={(e) => changeLanguage(e.target.value as Locale)}
      >
        <option value={"en"}>EN</option>
        <option value={"tr"}>TR</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
