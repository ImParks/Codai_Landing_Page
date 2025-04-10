import { Routes, Route, Navigate } from 'react-router-dom';
import { getSideRoute,getBaseRoute,getRoutePath, getRouteNameKey } from './utils/GetRoutes/GetRoutes';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { SolutionsPage } from './pages/main/SolutionsPage/SolutionsPage';
import { PricingPage } from './pages/main/PricingPage/Pricing';
import { UserGuidePage } from './pages/main/UserGuide/UserGuide';   

function App() {
  return (
      <Routes>
        <Route path={getBaseRoute("MAIN")} element={<MainLayout/>}>
            <Route index element={<Navigate to={getRoutePath("MAIN","SOLUTIONS")} replace />}/>
            {/* <Route path={getSideRoute("MAIN","MAIN")} element={<MainPage titleKey={getRouteNameKey("MAIN","MAIN")}/>}/> */}
            <Route path={getSideRoute("MAIN","SOLUTIONS")} element={<SolutionsPage titleKey={getRouteNameKey("MAIN","SOLUTIONS")}/>}/>
            <Route path={getSideRoute("MAIN","PRICING")} element={<PricingPage titleKey={getRouteNameKey("MAIN","PRICING")}/>}/>
            <Route path={getSideRoute("MAIN","USER_GUIDE")} element={<UserGuidePage titleKey={getRouteNameKey("MAIN","USER_GUIDE")}/>}/>
        </Route>
      </Routes>
  )
}

export default App
