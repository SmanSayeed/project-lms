// app/[locale]/layout.tsx
import RootLayout from "../layout"; // reuse existing main layout
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = { children: React.ReactNode; params: { locale: string } };

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}/common.json`)).default;
  } catch (err) {
    // if locale not found -> show 404 or fallback
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Wrap your old RootLayout so header/footer stay the same */}
          <RootLayout>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
