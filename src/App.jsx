import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import {PathAtom} from './PathAtom'


const HomePage = lazy(() => import("./Home"));
const RidesPage = lazy(() => import("./Rides"));
const FoodPage = lazy(() => import("./Food"));
const AboutPage = lazy(() => import('./About'))

function App() {

    const [path, setpath] = useRecoilState(PathAtom)

    const navigate = useNavigate();

    useEffect(()=>{
        navigate(path)
    },[path])

    return (
        <div className="pt-12">
            <Suspense fallback={<div>Loading .... </div>}>
                <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/RidesPage" element={<RidesPage />} />
                    <Route path="/FoodPage" element={<FoodPage />} />
                    <Route path="/AboutPage" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;