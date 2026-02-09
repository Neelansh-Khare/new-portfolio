import React from 'react';
import { fonts } from '@/resources/once-ui.config';
import classNames from 'classnames';
import '@/app/globals.css';

export const metadata = {
  title: 'Blog | Neelansh Khare',
  description: 'Personal blog of Neelansh Khare',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        'dark',
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <body
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          fontFamily: 'var(--font-body)',
        }}
      >
        {children}
      </body>
    </html>
  );
}
