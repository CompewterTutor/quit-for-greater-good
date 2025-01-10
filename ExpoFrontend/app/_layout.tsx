import { Slot } from "expo-router";
import { SessionProvider } from '@/context/index';

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
