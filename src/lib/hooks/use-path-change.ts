'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const usePathnameChange = () => {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    setChanges(prev => prev + 1);
  }, [pathname]);

  return {
    isPathnameChanged: changes,
  };
};
