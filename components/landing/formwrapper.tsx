"use client";

import dynamic from "next/dynamic";

const skeletonRow = "h-14 rounded-2xl bg-[var(--color-surface-tint)]";

function FormSkeleton() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_30px_70px_-32px_rgba(32,183,128,0.32)] md:p-8"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-accent)]" />
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="h-6 w-2/3 animate-pulse rounded bg-[var(--color-surface-tint)]" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-[var(--color-surface-tint)]" />
        </div>
        <div className={`${skeletonRow} animate-pulse`} />
        <div className={`${skeletonRow} animate-pulse`} />
        <div className={`${skeletonRow} animate-pulse`} />
        <div className={`${skeletonRow} animate-pulse`} />
        <div className="h-12 w-full animate-pulse rounded-full bg-[var(--color-accent-soft)]" />
      </div>
    </div>
  );
}

const Form = dynamic(() => import("./form"), {
  ssr: false,
  loading: () => <FormSkeleton />,
});

export default function FormWrapper() {
  return <Form />;
}
