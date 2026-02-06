import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/web/theme-toggle";

export function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        {/* Logo redirect to index page */}
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Next<span className="text-blue-500">Pro</span>
          </h1>
        </Link>

        {/* Page Link */}
        <div className="flex items-center gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>

          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Blog
          </Link>

          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Create
          </Link>
        </div>
      </div>

      {/* Sign Up, Login, & Theme */}
      <div className="flex items-center gap-2">
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href="/auth/sign-up"
        >
          Sign up
        </Link>

        <Link
          className={buttonVariants({ variant: "destructive" })}
          href="/auth/login"
        >
          Login
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
