import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Feito com Next.js &middot; Tailwind CSS</p>
      </div>
    </footer>
  );
}
