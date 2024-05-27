import { Navigate, Route, Routes } from 'react-router-dom';
import { useLoginSessionContext } from '../ContextAPI/UserLoginSessionContext';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Public_Routes } from './PublicRoutesConfig';
import { Private_Routes } from './PrivateRoutesConfig';

function RouteConfig() {
    const { isLoggedIn, isUserLoggedIn, login, role } = useLoginSessionContext()
    const [app_routes, setAppRoutes] = useState(Public_Routes)

    const switchRoutes = (loginState) => {
        if (loginState) {
            setAppRoutes(Private_Routes)
        } else {
            setAppRoutes(Public_Routes)
        }
    }

    useLayoutEffect(() => {
        if (isUserLoggedIn()) {
            switchRoutes(true)
            if (sessionStorage.getItem('role') !== null)
                login(sessionStorage.getItem('role'))
        }
    }, [])

    useEffect(() => {
        switchRoutes(isLoggedIn)
    }, [isLoggedIn])

    return (
        <>
            <Routes>
                {
                    app_routes.map((route, routeIndex) => {
                        if (!route.children.length)
                            if (isLoggedIn) {
                                return role === route.role.indexOf(role) !== -1 && < Route key={routeIndex} path={route.path} element={route.element} />
                            } else {
                                return < Route key={routeIndex} path={route.path} element={route.element} />
                            }
                        else
                            if (isLoggedIn) {
                                return (
                                    role === route.role.indexOf(role) !== -1 &&
                                    (<Route key={routeIndex} path={route.path} element={route.element}>
                                        {
                                            route.children.map((childRoute, childRouteIndex) => {
                                                if (childRoute.index) {
                                                    return <Route key={childRouteIndex} index element={childRoute.element} />
                                                } else {
                                                    return <Route key={childRouteIndex} path={childRoute.path} element={childRoute.element} />
                                                }
                                            })
                                        }
                                    </Route>)
                                )
                            } else {
                                return (
                                    <Route key={routeIndex} path={route.path} element={route.element}>
                                        {
                                            route.children.map((childRoute, childRouteIndex) => {
                                                if (childRoute.index) {
                                                    return <Route key={childRouteIndex} index element={childRoute.element} />
                                                } else {
                                                    return <Route key={childRouteIndex} path={childRoute.path} element={childRoute.element} />
                                                }
                                            })
                                        }
                                    </Route>
                                )
                            }

                    })
                    // renderRoutes(app_routes)
                }
                <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
        </>

    )
}

// const renderRoutes = (routes) => {
//     return routes.map((route, routeIndex) => {
//         if (!route.children) {
//             if (route.index) {
//                 return <Route key={routeIndex} index element={route.element} />
//             } else {
//                 return <Route key={routeIndex} path={route.path} element={route.element} />
//             }
//         } else {
//             return (
//                 <Route key={routeIndex} path={route.path} element={route.element}>
//                     {
//                         renderRoutes(route.children)
//                     }
//                 </Route>
//             )
//         }
//     })
// }

export default RouteConfig;
