import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="items-center justify-center min-h-center flex-col flex-wrap flex">
      {children}
    </div>
  );
}
