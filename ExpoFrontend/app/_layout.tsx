import "../global.css";
import { Slot } from "expo-router";
import { SessionProvider } from '@/context/index';
import { PortalHost } from '@rn-primitives/portal';

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
      <PortalHost />
    </SessionProvider>
    
  );
}
