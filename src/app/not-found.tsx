import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center px-6">
      <div className="text-foreground space-y-2 text-center text-base md:text-lg">
        <p className="text-teal-500">404</p>
        <p>Page not found</p>
        <Link
          href="/"
          className="inline-block text-blue-500 duration-300 ease-in-out hover:text-blue-600"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
