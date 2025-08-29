import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { TrainingPage } from './pages/Training/TrainingPage';

// Pour la démonstration, nous pouvons créer des composants simples pour vos pages.
// Vous pourrez par la suite les déplacer dans leurs propres fichiers.
const EventsPage = () => <div style={{ padding: '2rem' }}>Page des événements</div>;
const PressPage = () => <div style={{ padding: '2rem' }}>Page de la presse</div>;
const AboutPage = () => <div style={{ padding: '2rem' }}>Page "Nous connaître"</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'accueil', element: <HomePage /> },
      { path: 'evenements', element: <EventsPage /> },
      { path: 'presse', element: <PressPage /> },
      { path: 'entrainements', element: <TrainingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactUs /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
