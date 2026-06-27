const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-[var(--color-border)]" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--color-brand)] border-r-[var(--color-brand-2)] animate-spin" />
      </div>
      <p className="text-sm text-[var(--color-muted)] tracking-widest uppercase">
        Loading
      </p>
    </div>
  );
};

export default Loading;
