import { DARK_BLUE_GRAY, IconButton } from '@sistent/sistent';
import { CustomTooltip, styled, Menu, MenuItem } from '@sistent/sistent';
import { MoreVert } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { iconMedium } from 'css/icons.styles';
import React from 'react';

const StyledMenuItem = styled(MenuItem)({
  paddingLeft: '.5rem',
  paddingRight: '.5rem',
  paddingTop: '.65rem',
  paddingBottom: '.65rem',
  margin: '0px',
  height: '100%',
});

const StyledMenuDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  height: '50%',
  position: 'relative',
  padding: '0',
  gap: '0.4rem',
  backgroundColor: theme.palette.mode == 'light' ? theme.palette.background.paper : DARK_BLUE_GRAY,
}));

export const MenuComponent = ({ options = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xl'));

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const renderDirectIcons = () => {
    return (
      <div style={{ display: 'flex', gap: '0' }}>
        {options.map((option) => (
          <CustomTooltip key={option.title} title={option.title}>
            <IconButton
              sx={{
                padding: '0.15rem',
              }}
              disabled={option.disabled}
              style={{ cursor: 'pointer' }}
              onClick={(event) => {
                event.stopPropagation();
                option.handler(event);
              }}
            >
              {option.icon}
            </IconButton>
          </CustomTooltip>
        ))}
      </div>
    );
  };

  if (!isMobile) {
    return renderDirectIcons();
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }} onClick={handleClick}>
        <CustomTooltip title="Quick Actions">
          <MoreVert
            style={{
              cursor: 'pointer',
              fontSize: '1rem',
              ...iconMedium,
            }}
          />
        </CustomTooltip>
      </div>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
          style: {
            padding: 0,
            display: 'flex',
          },
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        onClose={handleClose}
        style={{
          borderRadius: '3px',
          zIndex: 9999999999,
        }}
      >
        {options.map((option) => (
          <StyledMenuDiv key={option.key || option.title}>
            <StyledMenuDiv>
              <CustomTooltip key={option.title} title={option.title}>
                <StyledMenuItem
                  disabled={option.disabled}
                  key={option.title}
                  onClick={(event) => {
                    event.stopPropagation();
                    option.handler(event);
                    handleClose(event);
                  }}
                >
                  {option.icon}
                </StyledMenuItem>
              </CustomTooltip>
            </StyledMenuDiv>
          </StyledMenuDiv>
        ))}
      </Menu>
    </div>
  );
};
