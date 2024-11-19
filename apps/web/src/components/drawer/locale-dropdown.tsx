"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/router";

type LocaleDropdownProps = {
  locale: string;
  availableLanguages: string[];
};

function LocaleDropdown({ locale, availableLanguages }: LocaleDropdownProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const updateLanguage = useCallback((lng: string) => {
    router.push(`/${lng}`);
  }, [router]);
  return (
    <div
      rel="button"
      className="text-chalk-100 relative uppercase"
      onClick={() => setOpen(!open)}
    >
      <div className="bg-chalk-100 text-chalk-600 dark:text-chalk-200 hover:text-chalk-900 dark:hover:text-chalk-50 dark:hover:bg-chalk-800 dark:bg-chalk-900 flex cursor-pointer justify-center px-4 py-2 transition-colors">
        <span className="material-symbols-rounded mr-2">arrow_drop_down</span>
        {locale}
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
