import { useState, useContext, useEffect } from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { AuthContext } from "../../modules/auth/context";
/* import CheckboxList from '../components/CheckboxList'; */
/* import GraphicHome from '../components/GraphicHome';
import GraphicHome2 from '../components/GraphicHome2';
import MobileGraphicHome2 from '../components/MobileGraphicHome2';
import { MobileGraphicHome } from '../components'; */

type Tasks = {
  [key: string]: { id: number; text: string }[];
};

const categories: string[] = ['Pedidos', 'Reclamos', 'Empresa', 'Prestaciones', 'Profesionales', 'Pacientes'];

export default function HomeView(): JSX.Element {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState<string>('Pedidos');
  const [tasks, setTasks] = useState<Tasks>({
    Pedidos: [],
    Reclamos: [],
    Empresa: [],
    Prestaciones: [],
    Profesionales: [],
    Pacientes: [],
  });

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const addTask = (category: string, newTask: string) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: [...prevTasks[category], { id: prevTasks[category].length, text: newTask }],
    }));
  };

  const deleteTask = (category: string, taskId: number) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((task) => task.id !== taskId),
    }));
  };

  const renderCategoryContent = (category: string): JSX.Element => {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5">{category}</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              {/* {isMobile ? <MobileGraphicHome /> : <GraphicHome />} */}
              <Typography mt={2} ml={2}>
                <span className='CircleSemana' />
                Numero de {category.toLowerCase()} esta semana
              </Typography>
              <Typography mt={2} ml={2}>
                <span className='CircleSemanaAnterior' />
                Numero de {category.toLowerCase()} la semana anterior
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent="center">
              {/* <CheckboxList category={category} tasks={tasks[category]} addTask={addTask} deleteTask={deleteTask} /> */}
            </Grid>
          </Grid>
          {/* {isMobile ? <MobileGraphicHome2 /> : <GraphicHome2 />} */}
        </CardContent>
      </Card>
    );
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">
          Bienvenido {user?.name} {user?.last_name}
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        {categories.map((category, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '90%', sm: '80%' }, // Ajustar el ancho en dispositivos móviles
            }}
          >
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
              }}
              onClick={() => handleCategoryClick(category)}
            >
              <Button>
                <Typography variant="h2">{category}</Typography>
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        {selectedCategory && renderCategoryContent(selectedCategory)}
      </Grid>
    </Grid>
  );
}
