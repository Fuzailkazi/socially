import ModeToggle from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import prisma from '@/lib/prisma';

export default function Home() {
  return (
    <div className='m-4'>
      <h1>content page</h1>
    </div>
  );
}
