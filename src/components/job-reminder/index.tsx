import {useTranslation} from 'react-i18next';
import {Button, Typography} from '../ui';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Form, FormControl, FormField, FormItem, FormMessage} from '../ui/form';
import {Input} from '../ui/input';
import {Mail} from 'lucide-react';
import i18n from '@/i18n';

const formSchema = z.object({
  email: z
    .string()
    .email(i18n.t('pleaseEnterValidEmail'))
    .nonempty(i18n.t('thisFieldIsRequired')),
});

export const JobReminder = () => {
  const {t} = useTranslation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: {email: string}) => {};
  return (
    <div className="bg-customBlue rounded-md p-4">
      <Typography as="h3" variant="h5">
        {t('setJobReminder')}
      </Typography>
      <Typography as="p" variant="small" className="my-2">
        {t('setJobReminderDesc')}
      </Typography>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="bg-white ps-8"
                        type="email"
                        placeholder={t('enterEmailAddress')}
                        {...field}
                      />
                      <Mail
                        size={14}
                        className="absolute stroke-gray-400 top-1/2 -translate-y-1/2 start-2"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit">{t('submit')}</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
