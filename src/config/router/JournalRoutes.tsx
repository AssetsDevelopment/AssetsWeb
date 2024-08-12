import { Navigate, Route, Routes } from 'react-router-dom'
/* import { RouteWrapper } from './RouteWrapper'; */

export const JournalRoutes = () => {
    return (
      <Routes>
        {/* <Route path='/' element={ <RouteWrapper component={Home} /> } /> */}
        {/* <Route path='/pedidos/recibidos' element={ <RouteWrapper component={Pedidos} /> } /> */}
        {/* <Route path='/reclamos' element={ <RouteWrapper component={Reclamos} /> } /> */}
        {/* <Route path='/reclamos/:id' element={ <RouteWrapper component={ReclamosDetalle} /> } /> */}
        {/* <Route path='/empresa' element={ <RouteWrapper component={Empresa} /> } /> */}
        {/* <Route path='/empresa/:id' element={ <RouteWrapper component={EmpresaDetalle} /> } /> */}
        {/* <Route path='/prestaciones' element={ <RouteWrapper component={Prestaciones} /> } /> */}
        {/* <Route path='/prestaciones/:id' element={ <RouteWrapper component={PrestacionesDetalle} /> } /> */}
        {/* <Route path='/profesionales' element={ <RouteWrapper component={Profesionales} /> } /> */}
        {/* <Route path='/profesionales/:id' element={ <RouteWrapper component={ProfesionalesDetalle} /> } /> */}
        {/* <Route path='/pacientes' element={ <RouteWrapper component={Pacientes} /> } /> */}
        {/* <Route path='/pacientes/:id' element={ <RouteWrapper component={PacientesDetalle} /> } /> */}
        {/* <Route path='/liquidacion' element={ <RouteWrapper component={Liquidacion} /> } /> */}
        {/* <Route path='/resumen' element={ <RouteWrapper component={Resumen} /> } /> */}
        {/* <Route path='/profile' element={ <RouteWrapper component={Profile} /> } /> */}
        <Route path='/*' element={ <Navigate to='/' /> }/>
      </Routes>
    );
  }