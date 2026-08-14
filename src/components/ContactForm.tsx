'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ContactFormProps {
  t: {
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formSelect: string;
    formSending: string;
    formError: string;
    subjectOptions: string[];
    email: string;
  };
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass =
  'h-12 rounded-xl border-border/50 bg-muted/30 focus:border-primary focus:ring-primary';

export function ContactForm({ t }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Alleen bevestigen als de server het bericht ook echt heeft aangenomen.
      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <p className="text-lg text-foreground">{t.formSuccess}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          {t.formName}
        </Label>
        <Input id="name" name="name" required className={fieldClass} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          {t.formEmail}
        </Label>
        <Input id="email" name="email" type="email" required className={fieldClass} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium">
          {t.formSubject}
        </Label>
        <select
          id="subject"
          name="subject"
          required
          className="flex h-12 w-full rounded-xl border border-border/50 bg-muted/30 px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <option value="">{t.formSelect}</option>
          {t.subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          {t.formMessage}
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          className="resize-none rounded-xl border-border/50 bg-muted/30 focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Lokvak voor bots. Buiten beeld en buiten de tabvolgorde, dus een
          bezoeker komt er nooit langs; wordt het toch ingevuld, dan negeert de
          server het bericht. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-destructive">
          {t.formError}{' '}
          <a href={`mailto:${t.email}`} className="underline underline-offset-4">
            {t.email}
          </a>
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary h-14 w-full rounded-xl"
      >
        {status === 'sending' ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
            {t.formSending}
          </span>
        ) : (
          <>
            {t.formSubmit}
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
