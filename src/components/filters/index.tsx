import {
  BriefcaseBusiness,
  ChevronDown,
  DollarSign,
  MapPin,
  Search,
} from 'lucide-react';
import {Input} from '../ui/input';
import {Badge} from '../ui/badge';
import {useTranslation} from 'react-i18next';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui';
import {JOB_TYPES} from '@/constants/filter-constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {Slider} from '../ui/slider';
import {useForm} from 'react-hook-form';
import {Form, FormControl, FormField, FormItem} from '../ui/form';

export const Filters = () => {
  const {t} = useTranslation();
  const formSchema = z.object({
    search: z.string(),
    jobType: z.string(),
    location: z.string(),
    salaryFrom: z.number(),
    salaryTo: z.number(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
      jobType: '',
      location: '',
      salaryFrom: 10,
      salaryTo: 100,
    },
  });
  const salaryTo = form.watch('salaryTo');

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <div className="border-border bg-white shadow-sm py-2 px-4 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="search"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input className="ps-8 py-3 border-none shadow-none" />
                        <Search
                          {...field}
                          size={16}
                          className="stroke-gray absolute top-1/2 start-2 -translate-y-1/2"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <Badge
                variant="secondary"
                className="w-full h-8"
                onClose={() => {}}
              >
                {t('uiUxDesigning')}
              </Badge>
            </div>
            <div className="col-span-5 grid grid-cols-6">
              <div className="col-span-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="h-8 border-none outline-none w-full flex gap-1 group items-center text-md transition-colors duration-300 hover:text-primary">
                    <BriefcaseBusiness size={14} className="stroke-gray-500" />
                    {t('jobType')}
                    <ChevronDown
                      className="stroke-gray-600 transition-all duration-300 group-hover:stroke-primary"
                      size={10}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <FormField
                      control={form.control}
                      name="jobType"
                      render={({field}) => (
                        <Select {...field}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={t('jobType')} />
                          </SelectTrigger>
                          <SelectContent>
                            {JOB_TYPES.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="col-span-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="h-8 border-none outline-none w-full flex gap-1 group items-center text-md transition-colors duration-300 hover:text-primary">
                    <MapPin size={14} className="stroke-gray-500" />{' '}
                    {t('location')}
                    <ChevronDown
                      className="stroke-gray-600 transition-all duration-300 group-hover:stroke-primary"
                      size={10}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t('location')}
                              className="w-[180px]"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="col-span-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="h-8 border-none outline-none w-full flex gap-1 group items-center text-md transition-colors duration-300 hover:text-primary">
                    <DollarSign size={14} className="stroke-gray-500" />{' '}
                    {t('salaryRange')}
                    <ChevronDown
                      className="stroke-gray-600 transition-all duration-300 group-hover:stroke-primary"
                      size={10}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <FormField
                      control={form.control}
                      name="salaryFrom"
                      render={({field}) => (
                        <FormItem>
                          <FormControl>
                            <div className="py-4 px-3 w-[250px]">
                              <Slider
                                value={[field.value, salaryTo]}
                                onValueChange={(value) => {
                                  field.onChange(value[0]);
                                  form.setValue('salaryTo', value[1]);
                                }}
                                max={1000}
                                min={10}
                                step={1}
                              />
                              <div className="flex gap-2 mt-4">
                                <div>
                                  <label htmlFor="#from" className="text-sm">
                                    {t('from')}
                                  </label>
                                  <Input
                                    id="from"
                                    type="number"
                                    placeholder="$1000"
                                    value={field.value}
                                    onChange={(e) =>
                                      field.onChange(Number(e.target.value))
                                    }
                                  />
                                </div>
                                <div>
                                  <label htmlFor="#to" className="text-sm">
                                    {t('to')}
                                  </label>
                                  <Input
                                    id="to"
                                    type="number"
                                    placeholder="$66000"
                                    value={salaryTo}
                                    onChange={(e) =>
                                      form.setValue(
                                        'salaryTo',
                                        Number(e.target.value),
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="col-span-2 flex justify-end pe-3">
              <Button type="submit">{t('findNow')}</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
