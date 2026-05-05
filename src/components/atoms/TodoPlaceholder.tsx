interface TodoPlaceholderProps {
  message: string
}

export function TodoPlaceholder({ message }: TodoPlaceholderProps) {
  if (!import.meta.env.DEV) return null

  return (
    <span className="todo-placeholder">
      [TODO: REEMPLAZAR] {message}
    </span>
  )
}
