import "./globals.css";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-lidaco-cream text-lidaco-brown min-h-screen">
        <main className="min-h-screen flex items-center justify-center px-6 text-center">
          <div className="space-y-6 max-w-md">
            <span className="text-xs font-bold tracking-[0.25em] text-lidaco-gold uppercase">
              Error 404
            </span>
            <h1 className="text-4xl font-extrabold text-lidaco-green">Page not found</h1>
            <p className="text-lidaco-brown/85 font-medium">
              The page you are looking for does not exist or has been moved.
            </p>
            <a
              href="/en/"
              className="inline-block rounded-full bg-lidaco-green px-8 py-3 text-sm font-bold text-lidaco-cream hover:opacity-90"
            >
              Back to Home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
