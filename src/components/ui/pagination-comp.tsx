import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {FC} from 'react';

export const PaginationLinks: FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({currentPage, totalPages, onPageChange}) => {
  const pages: JSX.Element[] = [];
  if (totalPages <= 6) {
    // Generate pagination links for total pages <= 6
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={`page-${i}`}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
  } else {
    // Generate pagination links for total pages > 6
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationItem key={`page-${i}`}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    if (2 < currentPage && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis key="ellipsis-1" />);
      pages.push(
        <PaginationItem key={`page-${currentPage}`}>
          <PaginationLink
            onClick={() => onPageChange(currentPage)}
            isActive={true}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    pages.push(<PaginationEllipsis key="ellipsis-2" />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={`page-${i}`}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
  }
  return pages;
};

type PaginatorProps = {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  showPreviousNext: boolean;
  totalItems: number;
  itemsPerPage: number;
};

export const Paginator = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  showPreviousNext,
}: PaginatorProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Total number of pages

  return (
    <Pagination>
      <PaginationContent>
        {showPreviousNext && totalPages ? (
          <div>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(currentPage - 1)}
                className={`${
                  currentPage - 1 < 1 ? 'pointer-events-none' : ''
                }`}
              />
            </PaginationItem>
          </div>
        ) : null}
        <PaginationLinks
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <PaginationNext
              className={`${
                currentPage > totalPages - 1 ? 'pointer-events-none' : ''
              }`}
              onClick={() => onPageChange(currentPage + 1)}
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
