import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ROUTE from '.';
import App from '@/App';
import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const Binary = lazy(() => import('@/pages/Binary'));
const Memory = lazy(() => import('@/pages/Memory'));
const LogicGates = lazy(() => import('@/pages/LogicGates'));
const ArithmeticLogicUnit = lazy(() => import('@/pages/ALU'));
const CentralProcessingUnit = lazy(() => import('@/pages/CPU'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.APP} element={<App />}>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.BINARY} element={<Binary />} />
        <Route path={ROUTE.MEMORY} element={<Memory />} />
        <Route path={ROUTE.LOGIC_GATES} element={<LogicGates />} />
        <Route path={ROUTE.ARITHMETIC_LOGIC_UNIT} element={<ArithmeticLogicUnit />} />
        <Route path={ROUTE.CENTRAL_PROCESSING_UNIT} element={<CentralProcessingUnit />} />
    </Route>
  )
)