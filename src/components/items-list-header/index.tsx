import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Typography,
} from '../ui';
import {AlignJustify, ChevronDownIcon, LayoutGrid} from 'lucide-react';
import {SORT_ITEMS} from '@/constants';

interface ItemsListHeaderProps {
  totalItems: number;
  startRange: number;
  endRange: number;
  viewType: 'cards' | 'list';
  setViewType: (viewType: 'cards' | 'list') => void;
}

export const ItemsListHeader: FC<ItemsListHeaderProps> = ({
  totalItems,
  startRange,
  endRange,
  viewType,
  setViewType,
}) => {
  const {t} = useTranslation();
  const [selectedSort, setSelectedSort] = useState('newestPost');

  return (
    <div>
      <div className="flex items-center justify-between">
        <Typography as="p" variant="body" className="!text-foreground">
          {totalItems && (
            <>
              {t('showing')}
              <Typography as="span" className="font-bold me-1 !text-foreground">
                {` ${startRange} - ${endRange} `}
              </Typography>

              {` ${t('of')} `}
              <Typography
                as="span"
                className="font-bold me-1  !text-foreground"
              >
                {totalItems}
              </Typography>
              {t('jobs')}
            </>
          )}
        </Typography>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none text-sm border-none flex gap-1 group items-center text-md transition-colors duration-300 hover:text-primary">
              {t(selectedSort)}
              <ChevronDownIcon
                className="stroke-gray-600 transition-all duration-300 group-hover:stroke-primary"
                size={10}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {SORT_ITEMS.map((item, index) => (
                <DropdownMenuItem
                  key={item.name}
                  className="hover:bg-accent hover:text-primary"
                  onClick={() => setSelectedSort(item.value)}
                >
                  {item.name}
                  {index !== SORT_ITEMS.length - 1 && <DropdownMenuSeparator />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewType('list')}
              className={`${
                viewType === 'list' ? 'bg-primary-foreground' : ''
              }`}
            >
              <AlignJustify
                className={`${viewType === 'list' ? 'stroke-primary' : ''}`}
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewType('cards')}
              className={`${
                viewType === 'cards' ? 'bg-primary-foreground' : ''
              }`}
            >
              <LayoutGrid
                className={`${viewType === 'cards' ? 'stroke-primary' : ''}`}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
