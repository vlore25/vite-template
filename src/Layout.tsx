import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Footer } from './components/Footer/Footer';

export function Layout() {
  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header>
        <NavigationBar />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
