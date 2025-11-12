// app/layout.tsx

import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from 'next/font/google';
import "./globals.css";
import React from 'react'; // <-- AÑADIDO: Necesario para el tipo 'React.ReactNode'

// 2. Configura la fuente principal (Montserrat)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

// 3. Configura la fuente de títulos (Dancing Script)
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dancing-script',
});

export const metadata = {
  title: 'Portafolio de Astrid Reyes',
  description: 'Portafolio profesional de Astrid Reyes',
};

// 
// ¡AQUÍ ESTÁ LA CORRECCIÓN PRINCIPAL!
// Le decimos a TypeScript que 'children' es un "Nodo de React"
//
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* 4. Tu código de 'body' estaba perfecto */}
      <body className={`${montserrat.className} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
