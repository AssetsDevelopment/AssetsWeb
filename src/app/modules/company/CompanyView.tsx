import { useEffect,/*  useState */ } from 'react';
import {
  Grid,
  Typography,
  TextField,
} from '@mui/material';
/* import { ButtonAdd, CardUserPedidos, DialogRegister, TableEmpresa } from '../components'; */

/* services */
/* import { findCompanies } from '../../services/company/custom-hooks'; */

export default function CompanyView() {
/*   const [search, setSearch] = useState("");
  const [empresas, setEmpresas] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [open, setOpen] = useState(false);
 */
/*   const {data, error, loading} = findCompanies()  */

/*   const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }; */

/*   const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; */

/*   const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }; */

/*   const filteredEmpresas = empresas?.filter((empresa) =>
    empresa.name.toLowerCase().includes(search.toLowerCase())
  ); */

/*   useEffect(() => {
    console.log(data)
    if (data?.findCompanies) setEmpresas(data?.findCompanies)
  }, [loading, data]) */

  return (
    <Grid container direction='column' spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Empresa</Typography>
      </Grid>
      <Grid item container justifyContent="space-between" alignItems="center">
       {/*  <ButtonAdd handleOpen={() => setOpen(true)} title="Registrar Empresa" /> */}
        {/* <DialogRegister
          open={open}
          onClose={() => setOpen(false)}
          onRegister={(data) => setEmpresas([...empresas, data])}
          title="Registrar Empresa"
          asunt='Ingrese los datos para registrar una empresa'
          type="Empresa"
          visibleFields={['nombre', 'cuit', 'entregaPlantillas', 'entregaFacturas', 'entregaPagos', 'ordenMedica', 'numeroIncidente', 'excel', 'nota']}
          fieldLabels={{
            nombre: 'Nombre',
            cuit: 'Cuit',
            entregaPlantillas: 'Plantilla',
            entregaFacturas: 'Facturas',
            entregaPagos: 'Pagos',
            ordenMedica: 'Orden medica',
            numeroIncidente: 'Incidente',
            excel: 'Excel',
            nota: 'Ingrese una nota',
          }}
          fieldSizes={{
            nombre: { sm: 6, xs: 6 },
            cuit: { sm: 6, xs: 6 },
            entregaPlantillas: { sm: 4, xs: 12 },
            entregaFacturas: { sm: 4, xs: 12 },
            entregaPagos: { sm: 4, xs: 12 },
            ordenMedica: { sm: 4, xs: 12 },
            numeroIncidente: { sm: 4, xs: 12 },
            excel: { sm: 4, xs: 12 },
            nota: { sm: 12, xs: 12 },
          }}
        /> */}
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={12} md={4}>
          {/* <CardUserPedidos title="Facturación" title2="Importe Bruto" total="2,300" change="+3%" icon={2} /> */}
        </Grid>
        <Grid item xs={12} md={4}>
         {/*  <CardUserPedidos title="Costos" title2="Gastos Operativos" total="1,200" change="+2%" icon={2} /> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <CardUserPedidos title="Ganancias" title2="Importe Neto" total="1,100" change="+1%" icon={2} /> */}
        </Grid>
      </Grid>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Lista de Empresas</Typography>
 {/*        <TextField
          label="Buscar Empresa"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          size="small"
        /> */}
      </Grid>
      <Grid item>
        {/* <TableEmpresa
          empresas={filteredEmpresas}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </Grid>
    </Grid>
  );
}