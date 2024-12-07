import { Provider } from "react-redux";
import { store } from "./features/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";
import { Suspense } from "react";
import Loading from "./components/Loading";

const router = createBrowserRouter(appRoutes);

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}
