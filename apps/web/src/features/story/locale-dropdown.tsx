import { useCallback, useState } from "react";
import storyLanguageVar from "./story-lng";
import { useReactiveVar } from "@apollo/client";
import i18n from "../../app/i18n";

type LocaleDropdownProps = {
  onLocaleChanges: (locale: string) => void;
  availableLanguages: string[];
};

function LocaleDropdown({
  onLocaleChanges,
  availableLanguages,
}: LocaleDropdownProps) {
  const currentLng = useReactiveVar(storyLanguageVar) ?? i18n.language;
  const [open, setOpen] = useState(false);
  const updateLanguage = useCallback((lng: string) => {
    onLocaleChanges(lng);
  }, []);
  return (
    <div
      rel="button"
      className="text-chalk-100 relative uppercase"
      onClick={() => setOpen(!open)}
    >
      <div className="bg-chalk-100 text-chalk-600 dark:text-chalk-200 hover:text-chalk-900 dark:hover:text-chalk-50 dark:hover:bg-chalk-800 dark:bg-chalk-900 flex cursor-pointer justify-center px-4 py-2 transition-colors">
        <span className="material-symbols-rounded mr-2">arrow_drop_down</span>
        {currentLng}
      </div>
      {open && (
        <ul className="dark:bg-chalk-900 bg-chalk-100 absolute left-0 top-full flex w-full flex-col items-center py-2">
          {availableLanguages.map((lng, key) => (
            <li
              key={key}
              className="dark:hover:bg-chalk-800 text-chalk-600 dark:text-chalk-200 hover:bg-chalk-200 mb-2 w-full cursor-pointer py-2 text-center last:mb-0"
              onClick={() => updateLanguage(lng)}
            >
              {lng}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocaleDropdown;
