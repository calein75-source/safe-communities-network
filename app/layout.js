export const metadata = {
  title: "Safe Communities Network",
  description: "Connecting Communities. Protecting Lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
