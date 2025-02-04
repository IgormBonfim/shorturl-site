export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-32">
      <div className="w-12 h-12 border-4 border-violet-700 border-opacity-70 border-t-violet-500 rounded-full animate-spin" aria-label="Carregando"></div>
      <span className="text-white text-sm font-medium animate-pulse">
        Encurtando URL<span className="dots">...</span>
      </span>
    </div>
  );
}
