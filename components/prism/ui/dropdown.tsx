import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type DropdownTriggerType = 'default' | 'text';

export interface DropdownProps {
  /** The currently selected value */
  value?: string;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Label text displayed above the dropdown */
  label?: string;
  /** Error message to display below the dropdown */
  error?: string;
  /** Whether the dropdown is disabled */
  disabled?: boolean;
  /** Optional icon to display before the text */
  prefixIcon?: React.ReactNode;
  /** The type of trigger to display */
  triggerType?: DropdownTriggerType;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Children should be Dropdown.Option components */
  children: React.ReactNode;
}

interface StyledDropdownProps {
  $hasError?: boolean;
  $isOpen?: boolean;
  $disabled?: boolean;
  $triggerType: DropdownTriggerType;
}

const DropdownContainer = styled.div<{ $triggerType?: DropdownTriggerType }>`
  position: relative;
  width: ${props => props.$triggerType === 'text' ? 'fit-content' : '100%'};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: var(--font-paragraph-small);
  line-height: var(--line-height-paragraph);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-90);
`;

const getDefaultTriggerStyles = (props: StyledDropdownProps) => css`
  background: var(--color-gray-0);
  border: 1px solid ${props.$hasError ? 'var(--color-red-60)' : 'var(--color-gray-40)'};
  border-radius: 4px;
  padding: 8px 12px;
  
  &:hover {
    border-color: ${props.$disabled ? 'var(--color-gray-40)' : props.$hasError ? 'var(--color-red-60)' : 'var(--color-gray-50)'};
  }

  &:focus {
    outline: none;
    border-color: ${props.$hasError ? 'var(--color-red-60)' : 'var(--color-gray-70)'};
    box-shadow: 0 0 0 2px ${props.$hasError ? 'var(--color-red-20)' : 'var(--color-gray-20)'};
  }

  ${props.$isOpen && css`
    border-color: ${props.$hasError ? 'var(--color-red-60)' : 'var(--color-gray-70)'};
  `}
`;

const getTextTriggerStyles = (props: StyledDropdownProps) => css`
  background: transparent;
  border: none;
  padding: 0;
  color: var(--color-teal-70);
  font-size: var(--font-paragraph-base);
  line-height: var(--line-height-paragraph);
  font-weight: var(--font-weight-bold);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    background-color: ${props.$disabled ? 'var(--color-teal-70)' : 'var(--color-teal-80)'};
    opacity: 0;
    transition: opacity 0s;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    color: ${props.$disabled ? 'var(--color-teal-70)' : 'var(--color-teal-80)'};
  }

  ${props.$isOpen && css`
    color: var(--color-teal-80);
    
    &::after {
      opacity: 1;
      background-color: var(--color-teal-80);
    }
  `}
`;

const StyledDropdown = styled.button<StyledDropdownProps>`
  width: ${props => props.$triggerType === 'text' ? 'auto' : '100%'};
  min-height: ${props => props.$triggerType === 'text' ? 'auto' : '36px'};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  font-size: var(--font-paragraph-base);
  line-height: var(--line-height-paragraph);
  font-weight: ${props => props.$triggerType === 'text' ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)'};
  color: ${props => props.$triggerType === 'text' ? 'inherit' : 'var(--color-gray-100)'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: ${props => props.$triggerType === 'text' ? 'none' : 'all 0.2s ease'};

  ${props => props.$triggerType === 'default' ? getDefaultTriggerStyles(props) : getTextTriggerStyles(props)}
`;

const Content = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: var(--color-gray-0);
  border: 1px solid var(--color-gray-40);
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
`;

const ErrorMessage = styled.div`
  font-size: var(--font-paragraph-small);
  line-height: var(--line-height-paragraph);
  color: var(--color-red-60);
  margin-top: 4px;
`;

const Placeholder = styled.span<{ $triggerType: DropdownTriggerType }>`
  color: ${props => props.$triggerType === 'text' ? 'var(--color-teal-70)' : 'var(--color-gray-90)'};
`;

const ChevronIcon = styled.div<{ $isOpen: boolean; $triggerType: DropdownTriggerType }>`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: ${props => props.$triggerType === 'text' ? 'inherit' : 'var(--color-gray-50)'};
`;

export interface DropdownOptionProps {
  /** The value of the option */
  value: string;
  /** The display text for the option */
  children: React.ReactNode;
  /** Whether the option is currently selected */
  selected?: boolean;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Callback when the option is selected */
  onSelect?: (value: string) => void;
}

const StyledOption = styled.button<{ $selected?: boolean; $disabled?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  background: ${props => props.$selected ? 'var(--color-gray-10)' : 'transparent'};
  border: none;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  font-size: var(--font-paragraph-base);
  line-height: var(--line-height-paragraph);
  font-weight: var(--font-weight-regular);
  color: ${props => props.$disabled ? 'var(--color-gray-50)' : 'var(--color-gray-100)'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  text-align: left;

  &:hover {
    background: ${props => !props.$disabled && 'var(--color-gray-10)'};
  }

  &:focus {
    outline: none;
    background: var(--color-gray-10);
  }
`;

export const DropdownOption: React.FC<DropdownOptionProps> = ({
  value,
  children,
  selected,
  disabled,
  onSelect,
}) => {
  const handleClick = () => {
    if (!disabled && onSelect) {
      onSelect(value);
    }
  };

  return (
    <StyledOption
      type="button"
      onClick={handleClick}
      $selected={selected}
      $disabled={disabled}
    >
      {children}
    </StyledOption>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  placeholder = 'Select an option',
  label,
  error,
  disabled,
  prefixIcon,
  triggerType = 'default',
  onChange,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState<string>(placeholder);

  useEffect(() => {
    // Update display text when value changes
    if (!value) {
      setDisplayText(placeholder);
      return;
    }

    // Find the matching option's display text
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.props.value === value) {
        setDisplayText(child.props.children?.toString() || value);
      }
    });
  }, [value, children, placeholder]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (selectedValue: string) => {
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  // Clone children to pass the onSelect handler and selected state
  const options = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && typeof child.props.value === 'string') {
      return React.cloneElement(child, {
        ...child.props,
        onSelect: handleSelect,
        selected: child.props.value === value,
      });
    }
    return child;
  });

  return (
    <DropdownContainer ref={dropdownRef} $triggerType={triggerType}>
      {triggerType === 'default' && label && <Label>{label}</Label>}
      <StyledDropdown
        type="button"
        onClick={handleToggle}
        $hasError={!!error}
        $isOpen={isOpen}
        $disabled={disabled}
        $triggerType={triggerType}
      >
        {prefixIcon}
        {value ? <span>{displayText}</span> : <Placeholder $triggerType={triggerType}>{placeholder}</Placeholder>}
        <ChevronIcon $isOpen={isOpen} $triggerType={triggerType}>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </ChevronIcon>
      </StyledDropdown>
      {isOpen && <Content>{options}</Content>}
      {triggerType === 'default' && error && <ErrorMessage>{error}</ErrorMessage>}
    </DropdownContainer>
  );
};