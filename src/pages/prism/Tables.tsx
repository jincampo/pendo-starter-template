import React, { useState } from 'react';
import { Table } from '@prism/table';
import { Button } from '@prism/button';
import { Icon } from '@prism/icon';
import { cn } from '@lib/utils';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  starred: boolean;
  selected: boolean;
  lastActive: string;
  avatar?: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  featured: boolean;
  selected: boolean;
}

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'tables',
  name: 'Tables',
  category: 'Data Display',
  description: 'Tables display structured data in rows and columns with support for sorting, selection, custom cell rendering, and row actions. They provide an organized view of complex datasets.',
  usage: {
    whenToUse: [
      'For displaying structured, tabular data',
      'When users need to compare data across multiple dimensions',
      'For data that requires sorting, filtering, or selection',
      'To show detailed information that benefits from column organization',
      'When actions need to be performed on data rows'
    ],
    whenNotToUse: [
      'For simple lists (use list components instead)',
      'When data doesn\'t naturally fit tabular structure',
      'For read-only content that doesn\'t need organization',
      'On very small screens where tables become unusable',
      'When relationships between data points are more important than individual values'
    ],
    anatomy: [
      { element: 'Table header', description: 'Column titles with optional sorting controls' },
      { element: 'Table rows', description: 'Data rows with consistent cell structure' },
      { element: 'Table cells', description: 'Individual data points with type-specific formatting' },
      { element: 'Row actions', description: 'Interactive elements for row-level operations' },
      { element: 'Selection controls', description: 'Checkboxes or radio buttons for row selection' }
    ],
    accessibility: [
      'Use proper table semantics (table, thead, tbody, th, td)',
      'Provide column headers with scope attributes',
      'Ensure keyboard navigation between interactive elements',
      'Support screen reader announcements for sorting',
      'Maintain focus management for row actions'
    ],
    dosDonts: {
      dos: ['Keep column headers descriptive and concise', 'Align data consistently within columns', 'Provide clear visual hierarchy'],
      donts: ['Overload tables with too many columns', 'Use tables for layout purposes', 'Make text too small to read comfortably']
    }
  }
};

// Component stories with live examples
const TablesDemo = (): ComponentStory[] => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [starredUsers, setStarredUsers] = useState<number[]>([1, 3]);

  const mockUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', starred: true, selected: false, lastActive: '2 minutes ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', starred: false, selected: false, lastActive: '1 hour ago' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active', starred: true, selected: false, lastActive: '5 minutes ago' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', starred: false, selected: false, lastActive: '30 minutes ago' },
  ];

  const mockProducts: Product[] = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 45, status: 'Available', featured: true, selected: false },
    { id: 2, name: 'Coffee Mug', category: 'Kitchen', price: 12.99, stock: 0, status: 'Out of Stock', featured: false, selected: false },
    { id: 3, name: 'Laptop Stand', category: 'Electronics', price: 49.99, stock: 23, status: 'Available', featured: false, selected: false },
    { id: 4, name: 'Desk Lamp', category: 'Office', price: 34.99, stock: 12, status: 'Available', featured: true, selected: false },
  ];

  const componentStories: ComponentStory[] = [
    {
      id: 'basic-table',
      name: 'Basic Table',
      description: 'Simple table with standard columns and sorting',
      code: `<Table<User>
  title="Users"
  headerActions={
    <Button size="small">
      <Icon name="UserPlus" size="small" />
      Add User
    </Button>
  }
  columns={[
    { key: 'name', title: 'Name', type: 'text', sortable: true },
    { key: 'email', title: 'Email', type: 'text', sortable: true },
    { key: 'role', title: 'Role', type: 'text' },
    { key: 'status', title: 'Status', type: 'text' },
  ]}
  data={userData}
/>`,
      component: (
        <Table<User>
          title="Users"
          headerActions={
            <Button size="small">
              <Icon name="UserPlus" size="small" />
              Add User
            </Button>
          }
          columns={[
            { key: 'name', title: 'Name', type: 'text', sortable: true },
            { key: 'email', title: 'Email', type: 'text', sortable: true },
            { key: 'role', title: 'Role', type: 'text' },
            { key: 'status', title: 'Status', type: 'text' },
          ]}
          data={mockUsers}
        />
      )
    },
    {
      id: 'advanced-features',
      name: 'Advanced Features',
      description: 'Table with selection, starring, and custom cell rendering',
      code: `<Table<User>
  title="Users with Actions"
  columns={[
    { key: 'selected', title: '', type: 'checkbox', width: '48px' },
    { key: 'starred', title: '', type: 'star', width: '48px' },
    { 
      key: 'name',
      title: 'Name',
      type: 'icon-text',
      icon: 'User',
      sortable: true
    },
    { key: 'email', title: 'Email', type: 'text', sortable: true },
    { key: 'role', title: 'Role', type: 'text' },
    {
      key: 'status',
      title: 'Status',
      type: 'custom',
      render: (value) => (
        <span className={cn(
          "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
          value === 'Active' 
            ? "bg-green-100 text-green-800"
            : "bg-gray-100 text-gray-600"
        )}>
          {value}
        </span>
      )
    },
  ]}
  data={userData}
  onCheckboxChange={handleCheckboxChange}
  onStarClick={handleStarClick}
  isStarred={(record) => record.starred}
  defaultSortKey="name"
  defaultSortDirection="asc"
/>`,
      component: (
        <Table<User>
          title="Users with Actions"
          headerActions={
            <Button size="small">
              <Icon name="Settings" size="small" />
              Manage
            </Button>
          }
          columns={[
            { key: 'selected', title: '', type: 'checkbox', width: '48px' },
            { key: 'starred', title: '', type: 'star', width: '48px' },
            { 
              key: 'name',
              title: 'Name',
              type: 'icon-text',
              icon: 'User',
              sortable: true
            },
            { key: 'email', title: 'Email', type: 'text', sortable: true },
            { key: 'role', title: 'Role', type: 'text' },
            {
              key: 'status',
              title: 'Status',
              type: 'custom',
              render: (value) => (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  backgroundColor: value === 'Active' ? 'var(--color-green-20)' : 'var(--color-gray-20)',
                  color: value === 'Active' ? 'var(--color-green-100)' : 'var(--color-gray-70)'
                }}>
                  {value}
                </span>
              )
            },
          ]}
          data={mockUsers}
          onCheckboxChange={(checked, record) => {
            if (checked) {
              setSelectedUsers([...selectedUsers, record.id]);
            } else {
              setSelectedUsers(selectedUsers.filter(id => id !== record.id));
            }
          }}
          onStarClick={(record) => {
            if (starredUsers.includes(record.id)) {
              setStarredUsers(starredUsers.filter(id => id !== record.id));
            } else {
              setStarredUsers([...starredUsers, record.id]);
            }
          }}
          isStarred={(record) => starredUsers.includes(record.id)}
          defaultSortKey="name"
          defaultSortDirection="asc"
        />
      )
    },
    {
      id: 'product-table',
      name: 'Product Inventory Table',
      description: 'Real-world example with different data types and formatting',
      code: `<Table<Product>
  title="Product Inventory"
  headerActions={
    <div className="flex gap-2">
      <Button size="small" variant="secondary">
        <Icon name="Download" size="small" />
        Export
      </Button>
      <Button size="small">
        <Icon name="Plus" size="small" />
        Add Product
      </Button>
    </div>
  }
  columns={[
    { key: 'selected', title: '', type: 'checkbox', width: '48px' },
    { key: 'name', title: 'Product Name', type: 'text', sortable: true },
    { key: 'category', title: 'Category', type: 'text', sortable: true },
    {
      key: 'price',
      title: 'Price',
      type: 'custom',
      sortable: true,
      render: (value) => $\{value.toFixed(2)}
    },
    {
      key: 'stock',
      title: 'Stock',
      type: 'custom',
      sortable: true,
      render: (value, record) => (
        <span style={{
          color: value === 0 ? 'var(--color-red-60)' : 
                value < 20 ? 'var(--color-yellow-60)' : 
                'var(--color-text-primary)'
        }}>
          {value} units
        </span>
      )
    },
    {
      key: 'status',
      title: 'Status',
      type: 'custom',
      render: (value) => (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: 'var(--font-size-xs)',
          backgroundColor: value === 'Available' ? 'var(--color-green-20)' : 'var(--color-red-20)',
          color: value === 'Available' ? 'var(--color-green-100)' : 'var(--color-red-100)'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: value === 'Available' ? 'var(--color-green-70)' : 'var(--color-red-60)'
          }} />
          {value}
        </span>
      )
    }
  ]}
  data={productData}
  defaultSortKey="name"
/>`,
      component: (
        <Table<Product>
          title="Product Inventory"
          headerActions={
            <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
              <Button size="small" variant="secondary">
                <Icon name="Download" size="small" />
                Export
              </Button>
              <Button size="small">
                <Icon name="Plus" size="small" />
                Add Product
              </Button>
            </div>
          }
          columns={[
            { key: 'selected', title: '', type: 'checkbox', width: '48px' },
            { key: 'name', title: 'Product Name', type: 'text', sortable: true },
            { key: 'category', title: 'Category', type: 'text', sortable: true },
            {
              key: 'price',
              title: 'Price',
              type: 'custom',
              sortable: true,
              render: (value) => `$${(typeof value === 'number' ? value : 0).toFixed(2)}`
            },
            {
              key: 'stock',
              title: 'Stock',
              type: 'custom',
              sortable: true,
              render: (value, record) => (
                <span style={{
                  color: value === 0 ? 'var(--color-red-60)' : 
                        (typeof value === 'number' ? value : 0) < 20 ? 'var(--color-yellow-60)' : 
                        'var(--color-text-primary)'
                }}>
                  {value} units
                </span>
              )
            },
            {
              key: 'status',
              title: 'Status',
              type: 'custom',
              render: (value) => (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: 'var(--font-size-xs)',
                  backgroundColor: value === 'Available' ? 'var(--color-green-20)' : 'var(--color-red-20)',
                  color: value === 'Available' ? 'var(--color-green-100)' : 'var(--color-red-100)'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: value === 'Available' ? 'var(--color-green-70)' : 'var(--color-red-60)'
                  }} />
                  {value}
                </span>
              )
            }
          ]}
          data={mockProducts}
          defaultSortKey="name"
        />
      )
    },
    {
      id: 'compact-table',
      name: 'Compact Table',
      description: 'Space-efficient table for dense data display',
      code: `<Table<User>
  title="Recent Activity"
  size="compact"
  columns={[
    { key: 'name', title: 'User', type: 'text' },
    { key: 'lastActive', title: 'Last Active', type: 'text' },
    { 
      key: 'status', 
      title: 'Status', 
      type: 'custom',
      render: (value) => (
        <div style={{ 
          width: '8px', 
          height: '8px', 
          borderRadius: '50%',
          backgroundColor: value === 'Active' ? '#10b981' : '#6b7280'
        }} />
      )
    }
  ]}
  data={recentUsers}
  showHeader={false}
/>`,
      component: (
        <div style={{ maxWidth: '400px' }}>
          <Table<User>
            title="Recent Activity"

            columns={[
              { key: 'name', title: 'User', type: 'text' },
              { key: 'lastActive', title: 'Last Active', type: 'text' },
              { 
                key: 'status', 
                title: 'Status', 
                type: 'custom',
                render: (value) => (
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%',
                    backgroundColor: value === 'Active' ? 'var(--color-green-70)' : 'var(--color-gray-50)'
                  }} />
                )
              }
            ]}
            data={mockUsers.slice(0, 3)}
          />
        </div>
      )
    }
  ];

  return componentStories;
};

// Props table component
const PropsTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-50">
          <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Title displayed in the table header</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">headerActions</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Actions displayed in the table header</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">columns</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Column[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Array of column definitions</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">data</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">T[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">[]</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Array of data items to display</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultSortKey</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Initial column key to sort by</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">defaultSortDirection</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"asc" | "desc" | null</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">null</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Initial sort direction</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"default" | "compact"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"default"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Table size variant</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onCheckboxChange</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(checked: boolean, record: T) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when row checkbox changes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onStarClick</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(record: T) =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Callback when star icon is clicked</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">isStarred</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">(record: T) =&gt; boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Function to determine if row is starred</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Tables() {
  const tablesDemo = TablesDemo();
  
  return (
    <div className="prism-preview">
      <ComponentShowcase 
        component={componentInfo}
        stories={tablesDemo}
        propsTable={<PropsTable />}
      />
    </div>
  );
}