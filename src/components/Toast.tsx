import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#111116] border border-[#bef264]/40 text-white p-4 shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200"
    >
      <CheckCircle2 className="w-5 h-5 text-[#bef264] shrink-0" />
      <p className="text-xs font-medium leading-relaxed font-body flex-1">{message}</p>
      <button
        type="button"
        onClick={onDismiss}
        className="p-1 text-neutral-400 hover:text-white transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
};
