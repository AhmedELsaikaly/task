import {NAVBAR_LINKS} from '@/constants';
import {Link} from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {ChevronDown, Menu} from 'lucide-react';
import {Button} from '../ui';
import {useTranslation} from 'react-i18next';

const Navbar = () => {
  const {t} = useTranslation();
  return (
    <header className="bg-white text-white p-4">
      <nav>
        <div className="container">
          <div className="flex items-center gap-2 justify-between">
            <ul className="flex items-center gap-8">
              {NAVBAR_LINKS.map((item) => (
                <li key={item.title} className="list-none">
                  {item.children ? (
                    <DropdownMenu key={item.title}>
                      <DropdownMenuTrigger className="flex gap-1 group items-center text-md transition-colors duration-300 hover:text-primary">
                        {item.title}
                        <ChevronDown
                          className="stroke-gray-600 transition-all duration-300 group-hover:stroke-primary"
                          size={10}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.children.map((childItem, index) => (
                          <DropdownMenuItem
                            key={childItem.title}
                            className="hover:bg-accent hover:text-primary"
                          >
                            <Link to={childItem.link} className="block">
                              <DropdownMenuLabel className="text-black font-normal text-sm transition-colors duration-300 ">
                                {childItem.title}
                              </DropdownMenuLabel>
                            </Link>
                            {index !== item.children.length - 1 && (
                              <DropdownMenuSeparator />
                            )}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      title={item.title}
                      className=" text-md transition-colors duration-300 hover:text-primary"
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button variant="default" className="h-8">
                {t('signIn')}
              </Button>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
