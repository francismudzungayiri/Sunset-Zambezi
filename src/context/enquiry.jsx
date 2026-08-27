import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const EnquiryContext = createContext(null);

/**
 * Holds the enquiry panel's open state and the experience a visitor was looking
 * at when they opened it, so the form can pre-select the right interest. Kept in
 * context because a dozen CTAs across the page all open the same panel.
 */
export function EnquiryProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [interest, setInterest] = useState('');

  const open = useCallback((preselect = '') => {
    setInterest(preselect);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ isOpen, interest, open, close }), [isOpen, interest, open, close]);

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used inside an EnquiryProvider');
  return ctx;
}
