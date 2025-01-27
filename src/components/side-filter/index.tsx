import {z} from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '../ui/input';
import {MapPin} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {Button} from '../ui';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  EXPERIENCE_TYPES,
  JOB_CATEGORIES,
  JOB_TYPES,
} from '@/constants/filter-constants';
import {Checkbox} from '../ui/checkbox';
import {Slider} from '../ui/slider';

const formSchema = z.object({
  location: z.string(),
  category: z.string(),
  jobType: z.array(z.string()),
  salaryFrom: z.number(),
  salaryTo: z.number(),
  experienceLevel: z.array(z.string()),
});
type FormValues = {
  experienceLevel: string[];
  category: string;
  jobType: string[];
  location: string;
  salaryFrom: number;
  salaryTo: number;
};
export const SideFilter = () => {
  const {t} = useTranslation();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceLevel: [],
      category: '',
      jobType: [],
      location: '',
      salaryFrom: 10,
      salaryTo: 100,
    },
  });
  const salaryTo = form.watch('salaryTo');

  const onSubmit = () => {};
  return (
    <div className="border-gray-100 border bg-white shadow-sm rounded-lg p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* job location */}
          <FormField
            control={form.control}
            name="location"
            render={({field}) => (
              <FormItem>
                <FormLabel>{t('location')}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="bg-white ps-8"
                      type="string"
                      placeholder={t('location')}
                      {...field}
                    />
                    <MapPin
                      size={14}
                      className="absolute stroke-gray-400 top-1/2 -translate-y-1/2 start-2"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* job category */}

          <FormField
            control={form.control}
            name="category"
            render={({field}) => (
              <FormItem>
                <FormLabel>{t('category')}</FormLabel>
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t('jobType')} />
                  </SelectTrigger>
                  <SelectContent>
                    {JOB_CATEGORIES.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobType"
            render={() => (
              <FormItem>
                <FormLabel>{t('jobType')}</FormLabel>

                {JOB_TYPES.map((item) => (
                  <FormField
                    key={item.value}
                    control={form.control}
                    name="jobType"
                    render={({field}) => {
                      return (
                        <FormItem
                          key={item.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.value)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, item.value]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (value: string) => value !== item.value,
                                    ), // Remove item.value if unchecked
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.name}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experienceLevel"
            render={() => (
              <FormItem>
                <FormLabel>{t('experienceLevel')}</FormLabel>

                {EXPERIENCE_TYPES.map((item) => (
                  <FormField
                    key={item.value}
                    control={form.control}
                    name="experienceLevel"
                    render={({field}) => {
                      return (
                        <FormItem
                          key={item.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.value)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, item.value]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (value: string) => value !== item.value,
                                    ), // Remove item.value if unchecked
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.name}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="salaryFrom"
            render={({field}) => (
              <FormItem>
                <FormLabel className="mb-4 block">{t('salaryRange')}</FormLabel>

                <FormControl>
                  <div>
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
                            form.setValue('salaryTo', Number(e.target.value))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="gap-2 flex ">
            <Button type="submit">{t('submit')}</Button>
            <Button type="button" variant="ghost">
              {t('reset')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
