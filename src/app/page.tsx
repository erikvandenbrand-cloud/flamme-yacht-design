import { redirect } from 'next/navigation';

// Vangnet. Normaal onderschept de middleware de root al en kiest daar de taal
// op land en browsertaal; komt een verzoek er toch langs, dan is Nederlands de
// standaard.
export default function RootPage() {
  redirect('/nl');
}
