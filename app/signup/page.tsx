import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandTile } from "@/components/ui/BrandMark";
import { BRAND } from "@/lib/brand";

export default function SignupPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-surface-tint px-5 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-soft">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <div className="mt-6 flex items-center gap-2.5">
          <BrandTile />
          <span className="text-lg font-extrabold tracking-tightest text-ink">
            {BRAND}
          </span>
        </div>

        <h1 className="mt-6 text-2xl">Create your account</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Start finding winning products and ads today.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="h-11 w-full rounded-xl border border-border bg-surface-tint px-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-border bg-surface-tint px-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <Button size="lg" className="w-full" type="button">
            Sign up
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
