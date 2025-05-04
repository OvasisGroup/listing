// app/components/MegaMenu.tsx
export default function MegaMenu() {
    return (
      <div className="absolute left-0 top-full w-full bg-white shadow-xl z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-2">Category {i + 1}</h3>
              <ul className="space-y-1 text-gray-700">
                {[...Array(4)].map((_, j) => (
                  <li key={j}>
                    <a href="#" className="hover:underline">Link {j + 1}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
  