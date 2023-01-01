import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import colors from 'tailwindcss/colors'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true) }, []);

  if (!mounted) return <></>;

  return (
    <DarkModeSwitch
      checked={resolvedTheme === 'light'}
      onChange={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      size={32}
      moonColor={colors.zinc[400]}
      sunColor={colors.zinc[600]}
    />
  );
};
