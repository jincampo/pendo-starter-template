import React, { useState, useMemo } from 'react'
import { cn } from "@lib/utils"
import { Card } from '@prism/card'
import { Icon } from '@prism/icon'
import * as LucideIcons from 'lucide-react'

export type ColumnType = 'text' | 'icon-text' | 'checkbox' | 'star' | 'custom'
export type SortDirection = 'asc' | 'desc' | null

export interface Column<T> {
  key: string
  title: string
  type: ColumnType
  width?: string
  icon?: keyof typeof LucideIcons
  render?: (value: T[keyof T], record: T) => React.ReactNode
  sortable?: boolean
}

export interface TableProps<T> {
  /** Title displayed in the card header */
  title: string
  /** Optional actions displayed in the card header */
  headerActions?: React.ReactNode
  /** Column definitions */
  columns: Column<T>[]
  /** Data array */
  data: T[]
  /** Callback when a row checkbox is clicked */
  onCheckboxChange?: (checked: boolean, record: T) => void
  /** Callback when a star is clicked */
  onStarClick?: (record: T) => void
  /** Function to determine if a row is starred */
  isStarred?: (record: T) => boolean
  /** Default sort key */
  defaultSortKey?: string
  /** Default sort direction */
  defaultSortDirection?: SortDirection
  /** Callback when sort changes */
  onSortChange?: (key: string, direction: SortDirection) => void
}

export function Table<T extends { id: string | number }>({
  title,
  headerActions,
  columns,
  data,
  onCheckboxChange,
  onStarClick,
  isStarred,
  defaultSortKey,
  defaultSortDirection = null,
  onSortChange,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(defaultSortKey || null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(defaultSortDirection)

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return

    let newDirection: SortDirection = 'asc'
    if (sortKey === column.key) {
      if (sortDirection === 'asc') newDirection = 'desc'
      else if (sortDirection === 'desc') newDirection = null
      else newDirection = 'asc'
    }

    setSortKey(newDirection ? column.key : null)
    setSortDirection(newDirection)
    onSortChange?.(column.key, newDirection)
  }

  const sortedData = useMemo(() => {
    if (!data || data.length === 0) return []
    if (!sortKey || !sortDirection) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortKey as keyof T]
      const bValue = b[sortKey as keyof T]

      if (aValue === bValue) return 0
      
      const comparison = aValue < bValue ? -1 : 1
      return sortDirection === 'asc' ? comparison : -comparison
    })
  }, [data, sortKey, sortDirection])

  const renderSortIcon = (column: Column<T>) => {
    if (!column.sortable) return null

    if (sortKey !== column.key) {
      return <Icon name="ArrowUpDown" size="small" className="text-[var(--color-gray-100)]" />
    }

    return sortDirection === 'asc' ? (
      <Icon name="ArrowUp" size="small" className="text-[var(--color-gray-100)]" />
    ) : (
      <Icon name="ArrowDown" size="small" className="text-[var(--color-gray-100)]" />
    )
  }

  const renderCell = (column: Column<T>, record: T) => {
    const value = record[column.key as keyof T]

    switch (column.type) {
      case 'icon-text':
        return (
          <div className="flex items-center gap-2">
            {column.icon && <Icon name={column.icon} size="medium" className="text-[var(--color-gray-90)]" />}
            {value as React.ReactNode}
          </div>
        )
      
      case 'checkbox':
        const checked = Boolean(value)
        return (
          <div className="relative w-4 h-4">
            <input
              type="checkbox"
              className="absolute opacity-0 w-4 h-4 m-0 cursor-pointer"
              checked={checked}
              onChange={(e) => onCheckboxChange?.(e.target.checked, record)}
            />
            <div className={cn(
              "w-4 h-4 border-[1.5px] rounded-[3px] flex items-center justify-center pointer-events-none",
              checked ? "border-[var(--color-teal-70)] bg-[var(--color-teal-70)]" : "border-[var(--color-gray-50)] bg-[var(--color-gray-0)]"
            )}>
              {checked && <Icon name="Check" size="small" className="text-[var(--color-gray-0)]" />}
            </div>
          </div>
        )
      
      case 'star':
        const starred = isStarred?.(record) ?? false
        return (
          <button 
            className="bg-none border-none p-0 cursor-pointer flex items-center justify-center hover:opacity-80"
            onClick={() => onStarClick?.(record)}
          >
            <Icon
              name="Star"
              size="medium"
              className={starred ? "text-[var(--color-orange-50)]" : "text-[var(--color-gray-50)]"}
            />
          </button>
        )
      
      case 'custom':
        return column.render?.(value, record)
      
      default:
        return value as React.ReactNode
    }
  }

  return (
    <Card title={title} headerActions={headerActions} noPadding>
      <div className="w-full">
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border-spacing-0">
            <thead>
              <tr>
                {columns && columns.length > 0 ? columns.map((column) => (
                  <th 
                    key={column.key}
                    className={cn(
                      "h-[37px] text-left bg-[var(--color-gray-20)]",
                      "paragraph-base-bold text-[var(--color-gray-100)] whitespace-nowrap align-middle",
                      "px-4",
                      column.width && `w-[${column.width}]`
                    )}
                    style={column.width ? { width: column.width } : undefined}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-1",
                        column.sortable && "cursor-pointer hover:text-[var(--color-gray-90)]"
                      )}
                      onClick={() => handleSort(column)}
                    >
                      {column.title}
                      {renderSortIcon(column)}
                    </div>
                  </th>
                )) : (
                  <th className="h-[37px] px-4 text-left border-b border-[var(--color-gray-40)] bg-[var(--color-gray-20)]">
                    No columns defined
                  </th>
                )}
              </tr>
              <tr className="border-b border-[var(--color-gray-40)]">
                <td colSpan={columns?.length || 1} className="p-0"></td>
              </tr>
            </thead>
            <tbody>
              {sortedData && sortedData.length > 0 ? sortedData.map((record) => (
                <React.Fragment key={record.id}>
                  <tr>
                    {columns && columns.length > 0 && columns.map((column) => (
                      <td 
                        key={`${record.id}-${column.key}`}
                        className={cn(
                          "h-[55px] text-left",
                          "paragraph-base text-[var(--color-gray-90)] align-middle",
                          "px-4"
                        )}
                      >
                        {renderCell(column, record)}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-[var(--color-gray-40)]">
                    <td colSpan={columns?.length || 1} className="p-0"></td>
                  </tr>
                </React.Fragment>
              )) : (
                <>
                  <tr>
                    <td 
                      colSpan={columns ? columns.length : 1}
                      className="h-[55px] text-center paragraph-base text-[var(--color-gray-90)] px-4"
                    >
                      No data available
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--color-gray-40)]">
                    <td colSpan={columns?.length || 1} className="p-0"></td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}