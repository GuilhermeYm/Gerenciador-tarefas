import "./globals.css";

export const metadata = {
  title: "Gerenciador de terefas",
  description: "Gerenciador de tarefas simples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
