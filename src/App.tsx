import React, {useEffect} from 'react';
import {Layout} from "antd";
import {Sidebar} from "./modules/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import g from './assets/styles/main.module.scss';
import {MyFloss} from './pages/MyFloss';
import {useDispatch, useSelector} from 'react-redux'
import {getIsAuthLoading, getIsLogged} from "./redux/auth/selectors";
import {login} from "./redux/auth/authSlice";

const {Content} = Layout

function App() {
    const dispatch = useDispatch()
    const logged = useSelector(getIsLogged)
    const authLoading = useSelector(getIsAuthLoading)

    useEffect(() => {
        login({username: 'kek', password: 'kek'})
    }, [])

    return (
        <BrowserRouter>
            <div className={g.wrapper}>
                <Sidebar/>
                <Content className={g.content}>
                    <Routes>
                        <Route path="/myFloss" element={<MyFloss/>}/>
                    </Routes>
                </Content>
            </div>
        </BrowserRouter>
    );
}

export default App;
