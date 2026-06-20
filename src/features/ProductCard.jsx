export default function ProductCard({ product }) {
  const {
    title,
    price,
    description,
    image,
    rating_rate,
    rating_count,
    stock,
    createdAt,
  } = product;

  // formatted date
  const formattedDate = new Date(createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="soft-card overflow-hidden hover:-translate-y-1 transition-all bg-white flex flex-col justify-between">
      <div>
        <div className="aspect-square bg-linear-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center overflow-hidden">
          <img
            src={`http://localhost:9000/${image}`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* content part */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3
              className="font-semibold text-lg text-slate-900 line-clamp-2"
              title={title}
            >
              {title}
            </h3>
          </div>

          {/* rating */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-amber-500">⭐ {rating_rate || '0.0'}</span>
            <span className="text-slate-500">({rating_count} reviews)</span>
          </div>

          {/* upload date */}
          <p>
            Upload on: <span className="font-semibold">{formattedDate}</span>
          </p>

          {/* description */}
          <p className="text-slate-600 text-sm line-clamp-2">{description}</p>
        </div>
      </div>

      {/* price and action button */}
      <div className="p-5 pt-0 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">
            $ {price?.toLocaleString()}
          </span>
          <span
            className={`text-sm font-medium ${stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}
          >
            {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
          </span>
        </div>

        <button
          className="w-full button-primary py-2.5 rounded-lg font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
