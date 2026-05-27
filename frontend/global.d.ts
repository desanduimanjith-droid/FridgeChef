declare module 'framer-motion';
declare module 'lucide-react';
declare module 'react';
declare module 'react/jsx-runtime';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
