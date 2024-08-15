import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';

const styles = {
  icon: {
    color: '#ffffff',
  },
};

export default function NotificationBox({ icon }) {
  const notifications = [
    { message: 'Johnny sent you an invoice billed $1,000', time: '8 August' },
    { message: 'Sent an invoice to Able Bugs amount of $200', time: '7 hours ago' },
    { message: 'There was a failure to your setup', time: '7 hours ago' },
    { message: 'Cristina danny invited to you join Meeting', time: '7 hours ago' },
  ];

  const iconMapping = {
    '1': <ReportIcon />,
  };

  return (
    <Box
      sx={{
        width: '30rem',
        padding: 2,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Notification
      </Typography>
      <List>
        {notifications.map((notification, index) => (
          <ListItem key={index} divider>
            <ListItemIcon>
              {iconMapping[icon]}
            </ListItemIcon>
            <ListItemText
              primary={notification.message}
              secondary={notification.time}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}