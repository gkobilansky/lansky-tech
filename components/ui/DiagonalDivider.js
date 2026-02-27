export default function DiagonalDivider({ variant = "primary", direction = "left" }) {
  const isLeft = direction === "left";

  return (
    <div className="relative w-full h-24 overflow-hidden">
      {/* Main diagonal shape */}
      <div
        className={`absolute inset-0 ${
          variant === "primary"
            ? "bg-gradient-to-br from-primary/10 to-primary/5"
            : "bg-gradient-to-br from-secondary/10 to-secondary/5"
        }`}
        style={{
          clipPath: isLeft
            ? "polygon(0 0, 100% 0%, 100% 50%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 50%)",
        }}
      />

      {/* Accent line */}
      <div
        className={`absolute ${
          isLeft ? "bottom-0 left-0" : "top-0 left-0"
        } w-full h-0.5 ${
          variant === "primary" ? "bg-primary/20" : "bg-secondary/20"
        }`}
        style={{
          transform: isLeft ? "skewY(-2deg)" : "skewY(2deg)",
          transformOrigin: isLeft ? "bottom left" : "top left",
        }}
      />

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              variant === "primary" ? "bg-primary" : "bg-secondary"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: isLeft ? `${20 + i * 15}%` : `${80 - i * 15}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
