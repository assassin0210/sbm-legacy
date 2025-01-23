import { ChangeEvent, forwardRef } from 'react'

export const Checkbox = forwardRef<
  HTMLInputElement,
  {
    checked: boolean
    onChange: (v: ChangeEvent<HTMLInputElement>) => void
  }
>(({ checked, onChange }, ref) => {
  return (
    <label className="inline-block self-end w-full h-full max-w-4 max-h-4 cursor-pointer overflow-hidden -mb-1">
      <div
        className={`w-4 h-4 flex justify-center items-center border-2 rounded transition-all ${
          checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e)}
        className="hidden"
      />
    </label>
  )
})
