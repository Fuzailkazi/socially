import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='m-4'>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button>SIgn In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button>Log out</Button>
    </div>
  );
}
