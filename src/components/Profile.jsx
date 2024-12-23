import PropTypes from 'prop-types';
// @mui
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @types

/***************************  PROFILE  ***************************/

export default function Profile({ avatar, title, caption, label, sx }) {
  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 0.75, width: 'fit-content', ...sx }}>
      {avatar && <Avatar {...avatar} alt="profile" />}
      <Stack sx={{ gap: 0.25 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
          <Typography variant="subtitle2">{title}</Typography>
          {label}
        </Stack>
        {caption && (
          <Typography variant="caption" sx={{ color: 'grey.700' }}>
            {caption}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

Profile.propTypes = { avatar: PropTypes.any, title: PropTypes.any, caption: PropTypes.any, label: PropTypes.any, sx: PropTypes.any };