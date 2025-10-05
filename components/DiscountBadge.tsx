interface DiscountBadgeProps {
  percentage: string;
  price: string;
}

export function DiscountBadge({ percentage, price }: DiscountBadgeProps) {
  return (
    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full px-3 py-2 shadow-lg">
      <div className="text-center">
        <div className="text-lg font-bold">{percentage}</div>
        <div className="text-xs">OFF</div>
        <div className="text-xs bg-white text-orange-600 px-2 py-1 rounded-full mt-1">
          ${price}
        </div>
      </div>
    </div>
  );
}