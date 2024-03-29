import clsx from "clsx"

export default function Tag({ children, type }) {
  const tagClasses = clsx(
    'px-3 py-1 font-semibold text-sm rounded',
    type === 'language' && 'text-orange-600 bg-orange-100 dark:text-cyan-300 dark:bg-cyan-800',
    type === 'library' && 'text-purple-600 bg-purple-100 dark:text-purple-300 dark:bg-purple-800',
    type === 'service' && 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-800',
  )
  return (<span className={tagClasses}>{children}</span>)
}
