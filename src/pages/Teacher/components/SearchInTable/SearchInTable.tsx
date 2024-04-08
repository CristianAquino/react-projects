"use client";

import { Label } from "./styled-components";

export type SearchInTableProps = {
  // types...
  title: string;
  search: string;
  ariaLabel: string;
  onchange: (e: string) => void;
};

const SearchInTable = ({
  title,
  onchange,
  search,
  ariaLabel,
}: SearchInTableProps) => {
  return (
    <Label>
      <span>{title}</span>
      <input
        type="text"
        value={search}
        aria-label={ariaLabel}
        onChange={(e) => onchange(e.target.value)}
        autoFocus
      />
    </Label>
  );
};

export default SearchInTable;
