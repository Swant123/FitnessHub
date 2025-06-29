export default function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8", 
    large: "w-12 h-12"
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${sizeClasses[size]} border-4 border-gray-300 border-t-[hsl(217,91%,40%)] rounded-full animate-spin`}
        aria-label="Caricamento"
      />
    </div>
  );
}